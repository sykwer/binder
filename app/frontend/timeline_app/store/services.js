import axios from "axios"

export const fetchPosts = (userId, page) => {
  const url = `http://localhost:3000/api/users/${userId}/timeline`
  return axios.get(url, {
    params: {
      page,
    },
  }).then(res => res.data.posts)
}

export const requestBookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.post(url).then(res => res.status === 200)
}

export const requestUnbookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.delete(url).then(res => res.status === 200)
}
