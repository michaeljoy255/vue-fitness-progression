export function setLocalStorage(item, data) {
  const json = JSON.stringify(data)
  localStorage.setItem(item, json)
}

export function getLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item))
}
