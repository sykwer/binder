import axios from "axios"

export const requestBookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.post(url).then(res => res.status === 200)
}

export const requestUnbookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.delete(url).then(res => res.status === 200)
}
