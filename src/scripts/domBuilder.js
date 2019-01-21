import data from "./data";
import interestList from "./listInterests"

//Given a user wants to keep track of a new point of interest
// When the user opens the application
// Then a form should be presented to the user in which the following properties of the point of interest can be provided

// 1.Name of the point of interest
// 2.Description of the point of interest
// 3.Cost of visiting the point of interest
// 4.Dropdown to pick which place the point of interest is located in

// Given a user has entered in all details of a point of interest
// When the user performs a gesture to save the point of interest
// Then the point of interest should be displayed in the application

const newInterest = {
    createAndAppendInterest() {
        let interestHeader = document.createElement("h3")
        interestHeader.textContent = "Add a New Interest"

        let newInterestNameField = document.createElement("fieldset")

        let newInterestNameLabel = document.createElement("label")
        newInterestNameLabel.textContent = "Name  "
        newInterestNameLabel.setAttribute("for", "interest_name")
        let newInterestNameInput = document.createElement("input")
        newInterestNameInput.setAttribute("id", "interest_name")
        newInterestNameInput.setAttribute("name", "interest_name")

        newInterestNameField.appendChild(newInterestNameLabel)
        newInterestNameField.appendChild(newInterestNameInput)

        let  newInterestDField = document.createElement("fieldset")

        let newInterestDLabel = document.createElement("label")
        newInterestDLabel.textContent = "Description  "
        newInterestDLabel.setAttribute("for", "interest_D")
        let newInterestDInput = document.createElement("input")
        newInterestDInput.setAttribute("id", "interest_D")
        newInterestDInput.setAttribute("name", "interest_D")

        newInterestDField.appendChild(newInterestDLabel)
        newInterestDField.appendChild(newInterestDInput)

        let newInterestCField = document.createElement("fieldset")

        let newInterestCLabel = document.createElement("label")
        newInterestCLabel.textContent = "Cost  "
        newInterestCLabel.setAttribute("for", "interest_C")
        let newInterestCinput = document.createElement("input")
        newInterestCinput.setAttribute("id", "interest_C")
        newInterestCinput.setAttribute("name", "interest_C")

        newInterestCField.appendChild(newInterestCLabel)
        newInterestCField.appendChild(newInterestCinput)

        let newInterestRField = document.createElement("fieldset")

        let newInterestRLabel = document.createElement("label")
        newInterestRLabel.textContent = "Leave a Review  "
        newInterestRLabel.setAttribute("for", "interest_R")
        let newInterestRInput = document.createElement("input")
        newInterestRInput.setAttribute("id", "interest_R")
        newInterestRInput.setAttribute("name", "interest_R")

        newInterestRField.appendChild(newInterestRLabel)
        newInterestRField.appendChild(newInterestRInput)

        let interestCountryField = document.createElement("fieldset")

        let interestCountryLabel = document.createElement("label")
        interestCountryLabel.textContent = "Pick a City  "

        let interestCountry = document.createElement("select")
        interestCountry.setAttribute("id", "interestCo")

        data.getAllPlaces()
        .then(parsedPlaces => {
            parsedPlaces.forEach(place => {
                let interestCountryName = document.createElement("option")
                interestCountryName.textContent += `${place.name}`
                interestCountryName.setAttribute("value", `${place.id}`)
                interestCountryName.setAttribute("class", "interest_Co")

                interestCountry.appendChild(interestCountryName)
                interestCountryLabel.appendChild(interestCountry)
            });
        })
        interestCountryField.appendChild(interestCountryLabel)


        let addButton = document.createElement("button")
        addButton.textContent = "Add New Interest"
        addButton.setAttribute("class", "interest_Save")
        addButton.addEventListener("click", newInterest.handleAddNewInterest)

        let interestFormFragment = document.createDocumentFragment()
        interestFormFragment.appendChild(interestHeader)
        interestFormFragment.appendChild(newInterestNameField)
        interestFormFragment.appendChild(newInterestDField)
        interestFormFragment.appendChild(newInterestCField)
        interestFormFragment.appendChild(interestCountryField)
        interestFormFragment.appendChild(newInterestRField)
        interestFormFragment.appendChild(addButton)

        let formArticle = document.querySelector(".input")
        formArticle.appendChild(interestFormFragment)
    },
    handleAddNewInterest(){
        let inputIName = document.querySelector("#interest_name").value
        let inputIDescription = document.querySelector("#interest_D").value
        let inputICost = document.querySelector("#interest_C").value
        let inputIReview = document.querySelector("#interest_R").value
        let inputICity = document.querySelector("#interestCo").value

        let newInterestObject = {
            placeId: inputICity,
            name: inputIName,
            description: inputIDescription,
            cost: inputICost,
            review: inputIReview,
        }
        data.postAllInterests(newInterestObject)
        .then(response => {
        interestList.showInterests();
        })
    }

}


export default newInterest