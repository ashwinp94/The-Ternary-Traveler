import data from "./data";
import interestList from "./listInterests"

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

        let interestCountryName = document.createElement("section")
        interestCountryName.textContent = "City:  " + interestObject.place.name

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", () => {
            let interestId = event.target.parentNode.id.split("--")[1]
            data.deleteInterest(interestId)
            .then(response =>{
                interestList.showInterests();
            })
        })

        interestArea.appendChild(interestName)
        interestArea.appendChild(interestDescription)
        interestArea.appendChild(interestCost)
        interestArea.appendChild(interestReview)
        interestArea.appendChild(interestCountryName)
        interestArea.appendChild(deleteButton)

        return interestArea;
    }
}

export default interests