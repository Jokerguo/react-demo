let id = JSON.parse(localStorage.getItem('maxId') || '0')
export const createId = () => {
  id += 1
  localStorage.setItem('maxId', id.toString())
  return id
}
