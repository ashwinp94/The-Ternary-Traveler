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
}