import data from "./data";

//Then all points of interests should be displayed with their name,
//description, cost, review if it's not blank and the place it is located

const interests = {
    interestBuilder(interestObject){
        let interestArea = document.createElement("article")
        interestArea.setAttribute("id", `interest--${interestObject.id}`)

        let interestName = document.createElement("section")
        interestName.textContent = "Name: " + interestObject.name;

        let interestDescription = document.createElement("section")
        interestDescription.textContent = "Description: " + interestObject.description;

        let interestCost = document.createElement("section")
        interestCost.textContent = "Cost: " + interestObject.cost;

        let interestReview = document.createElement("section")
        interestReview.textContent = "My Review: " + interestObject.review;

        let interestCountryLabel = document.createElement("label")
        interestCountryLabel.textContent = "Pick a Country  "
        let interestCountry = document.createElement("select")
        data.getAllInterests()
        .then(parsedInterest =>{
            parsedInterest.forEach(interest => {
                let interestCountryName = document.createElement("option")
                interestCountryName.textContent += `${interest.place.name}`
                interestCountry.appendChild(interestCountryName)
                interestCountryLabel.appendChild(interestCountry)
            });
        })

        interestArea.appendChild(interestName)
        interestArea.appendChild(interestDescription)
        interestArea.appendChild(interestCost)
        interestArea.appendChild(interestReview)
        interestArea.appendChild(interestCountryLabel)

        return interestArea;
    }
}

export default interests