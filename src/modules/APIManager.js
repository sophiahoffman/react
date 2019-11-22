//API Manager is written in vanilla Javascript (Not JSX)

const remoteURL = "http://localhost:5002";

export default {
  getOne(id, comp) {
    return fetch(`${remoteURL}/${comp}/${id}?active=true`).then(result => result.json())
  },
  getAll(comp) {
    return fetch(`${remoteURL}/${comp}`).then(result => result.json())
  },
  delete(id, comp) {
    return fetch(`${remoteURL}/${comp}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  getOwners(id) {
    return fetch(`${remoteURL}/ownersAnimals?ownerId=${id}&_expand=owner`.then(result => result.json()))
  },
  getAnimals(id) {
    return fetch(`${remoteURL}/ownersAnimals?animalId=${id}&_expand=animal`.then(result => result.json()))
  },
  post(newObject, comp) {
    return fetch(`${remoteURL}/${comp}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  update(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}