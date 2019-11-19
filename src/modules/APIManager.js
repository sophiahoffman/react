const remoteURL = "http://localhost:5002"

export default {
  get(id, comp) {
    return fetch(`${remoteURL}/${comp}/${id}`).then(result => result.json())
  },
  getAll(comp) {
    return fetch(`${remoteURL}/${comp}`).then(result => result.json())
  }
}