const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}?_expand=animal`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners?_expand=animal`).then(result => result.json())
  }
}