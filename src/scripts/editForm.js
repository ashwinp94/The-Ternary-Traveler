import data from "./data"
import interestList from "./listInterests";

const interestEditForm = {
    createAndAppendEdit(articleId, iObjToEdit){
    //Here I create variables to put in the edit object. These variables target the textcontent of what is already in the previous fields
    //there is probably a better way to do this using a fetch call but whatever
    let interestNameValue = document.querySelector(`#interestName--${iObjToEdit.id}`)
    interestNameValue.value = interestNameValue.textContent
    let interestDescriptionValue = document.querySelector(`#interestDescription--${iObjToEdit.id}`)
    interestDescriptionValue.value = interestDescriptionValue.textContent
    //this is the country variable in the createDataObject file I named it correctly here
    let interestCityName = document.getElementById(`${iObjToEdit.placeId}`)
    interestCityName.value = interestCityName.id

    //creating the edit field

    let interestCostField = document.createElement("p")

    let interestCostLabel = document.createElement("label")
    interestCostLabel.textContent = "Edit Cost"
    let interestCostInput = document.createElement("input")
    interestCostInput.value = iObjToEdit.cost

    interestCostField.appendChild(interestCostLabel);
    interestCostField.appendChild(interestCostInput);

    let interestReviewField = document.createElement("p")

    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "Edit Review"
    let interestReviewInput = document.createElement("input")
    interestReviewInput.value = iObjToEdit.review

    interestReviewField.appendChild(interestReviewLabel);
    interestReviewField.appendChild(interestReviewInput);

    let interest

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    updateButton.addEventListener("click", ()=>{
        let editedInterest = {
            placeId: interestCityName.value,
            name: interestNameValue.value,
            description: interestDescriptionValue.value,
            cost: interestCostInput.value,
            review: interestReviewInput.value,
        }
        data.putExistingInterests(iObjToEdit.id, editedInterest)
        .then(response =>{
            interestList.showInterests()
        })
    })

    let interestItemArticle = document.querySelector(`#${articleId}`)

    while(interestItemArticle.firstChild) {
        interestItemArticle.removeChild(interestItemArticle.firstChild);
        }
    interestItemArticle.appendChild(interestCostField)
    interestItemArticle.appendChild(interestReviewField)
    interestItemArticle.appendChild(updateButton)
    }
}


export default interestEditForm