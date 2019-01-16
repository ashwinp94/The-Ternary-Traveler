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
        newInterestNameLabel.textContent = "Name"
        newInterestNameLabel.setAttribute("for", "interest_name")
        let newInterestNameInput = document.createElement("input")
        newInterestNameInput.setAttribute("id", "interest_name")
        newInterestNameInput.setAttribute("name", "interest_name")

        newInterestNameField.appendChild(newInterestNameLabel)
        newInterestNameField.appendChild(newInterestNameInput)

        let  newInterestDField = document.createElement("fieldset")

        let newInterestDLabel = document.createElement("label")
        newInterestDLabel.textContent = "Description"
        newInterestDLabel.setAttribute("for", "interest_D")
        let newInterestDInput = document.createElement("input")
        newInterestDInput.setAttribute("id", "interest_D")
        newInterestDInput.setAttribute("name", "interest_D")

        newInterestDField.appendChild(newInterestDInput)
        newInterestDField.appendChild(newInterestDLabel)


    }
}