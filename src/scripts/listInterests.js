import data from "./data"
import interests from "./createDataObject"

const interestList = {
    showInterests(){
        data.getAllInterests()
        .then(allInterests=>{
            let interestDocFragment = document.createDocumentFragment();
            allInterests.forEach(interest =>{
                let interestHTML = interests.interestBuilder(interest)
                interestDocFragment.appendChild(interestHTML)
            });
            let interestOutput = document.querySelector(".output")
            while (interestOutput.firstChild){
            interestOutput.removeChild(interestOutput.firstChild)
            }
            interestOutput.appendChild(interestDocFragment)
        })
    }
}

export default interestList