import axios from "axios"

export const fetchPosts = (page) => {
  const url = "http://localhost:3000/api/streams/from_followings"
  const countPerPage = 10

  return axios.get(url, {
    params: {
      offset: page * countPerPage,
      count: countPerPage,
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
