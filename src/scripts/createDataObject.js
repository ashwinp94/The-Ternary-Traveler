import data from "./data";
import interestList from "./listInterests"
import interestEditForm from "./editForm"
//Then all points of interests should be displayed with their name,
//description, cost, review if it's not blank and the place it is located

const interests = {
    interestBuilder(interestObject){
        let interestArea = document.createElement("article")
        interestArea.setAttribute("id", `interest--${interestObject.id}`)

        let nameField = document.createElement("Fieldset")

        let interestNameLabel = document.createElement("h3")
        interestNameLabel.textContent = "Name"
        let interestName = document.createElement("section")
        interestName.textContent = interestObject.name;
        interestName.setAttribute("id", `interestName--${interestObject.id}`)

        nameField.appendChild(interestNameLabel)
        nameField.appendChild(interestName)

        let descriptionField = document.createElement("Fieldset")

        let interestDescriptionLabel = document.createElement("h3")
        interestDescriptionLabel.textContent = "Description"
        let interestDescription = document.createElement("section")
        interestDescription.textContent = interestObject.description;
        interestDescription.setAttribute("id", `interestDescription--${interestObject.id}`)

        descriptionField.appendChild(interestDescriptionLabel)
        descriptionField.appendChild(interestDescription)

        let costField = document.createElement("fieldset")

        let interestCostLabel = document.createElement("h3")
        interestCostLabel.textContent = "Cost"
        let interestCost = document.createElement("section")
        interestCost.textContent = interestObject.cost;
        interestCost.setAttribute("id", `interestCost--${interestObject.id}`)

        costField.appendChild(interestCostLabel)
        costField.appendChild(interestCost)

        let reviewField = document.createElement("fieldset")

        let interestReviewLabel = document.createElement("h3")
        interestReviewLabel.textContent = "Review"
        let interestReview = document.createElement("section")
        interestReview.textContent = interestObject.review;
        interestReview.setAttribute("id", `interestReview--${interestObject.id}`)

        reviewField.appendChild(interestReviewLabel)
        reviewField.appendChild(interestReview)

        let countryName = document.createElement("fieldset")

        //Yes I know I missnamed all these country variables
        let interestCountryLabel = document.createElement("h3")
        interestCountryLabel.textContent = "City"
        let interestCountryName = document.createElement("section")
        interestCountryName.textContent = interestObject.place.name
        interestCountryName.setAttribute("id", `${interestObject.placeId}`)

        countryName.appendChild(interestCountryLabel)
        countryName.appendChild(interestCountryName)

        let editButton = document.createElement("button")
        editButton.textContent= "Edit"
        editButton.addEventListener("click", ()=> {
            let articleId = event.target.parentNode.id
            let interestId = articleId.split("--")[1]
            data.getInterests(interestId)
            .then(response =>{
                interestEditForm.createAndAppendEdit(articleId, response)
            })
        })

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", () => {
            if(confirm("Are you Sure?")){
            let interestId = event.target.parentNode.id.split("--")[1]
            data.deleteInterest(interestId)
            .then(response =>{
                interestList.showInterests();
            })
        }
        })

        interestArea.appendChild(nameField)
        interestArea.appendChild(descriptionField)
        interestArea.appendChild(costField)
        interestArea.appendChild(reviewField)
        interestArea.appendChild(countryName)

        interestArea.appendChild(deleteButton)
        interestArea.appendChild(editButton)

        return interestArea;
    }
}

export default interests