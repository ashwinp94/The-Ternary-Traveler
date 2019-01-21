import data from "./data"
import interestList from "./listInterests";

const interestEditForm = {
    createAndAppendEdit(articleId, iObjToEdit){

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



    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    updateButton.addEventListener("click", ()=> {
        let editedInterest = {
            placeId: iObjToEdit.placeId,
            name: iObjToEdit.name,
            description: iObjToEdit.description,
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