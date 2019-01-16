//Then all points of interests should be displayed with their name,
//description, cost, review if it's not blank and the place it is located

const interests = {
    interestBuilder(interestObject){
        let interestArea = document.createElement("article")
        interestArea.setAttribute("id", `interest--${interestArea.id}`)

        let interestName = document.createElement("section")
        interestName.textContent = interestObject.name;

        let interestDescription = document.createElement("section")
        interestDescription.textContent = interestObject.description;

        let interestCost = document.createElement("section")
        interestCost.textContent = interestObject.cost;

        let interestReview = document.createElement("section")
        interestReview.textContent = interestObject.review;

        interestArea.appendChild(interestName)
        interestArea.appendChild(interestDescription)
        interestArea.appendChild(interestCost)
        interestArea.appendChild(interestReview)



        // let interestPlace = document.createElement("select")
        // let interestCountry = document.createElement("option")

    }
}