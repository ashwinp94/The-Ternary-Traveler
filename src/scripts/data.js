const data = {
    getAllInterests() {
        return fetch ("http://localhost:8088/interests?_expand=place")
        .then(response => response.json())
    },
    postAllInterests(newInterestToSave) {
        return fetch ("http://localhost:8088/interests", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newInterestToSave)
            })
    },

    getAllPlaces(){
        return fetch ("http://localhost:8088/places")
        .then(response => response.json())
    },

    deleteInterest(interestId){
        return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
            }
        })
    },
    getInterests(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`)
        .then(response => response.json())
      },
    putExistingInterests(interestId, interestToEdit) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(interestToEdit)
        })
      }
}

export default data