import axios from "axios"

export const requestBookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.post(url).then(res => res.status === 200)
}

export const requestUnbookmark = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/bookmarks`
  return axios.delete(url).then(res => res.status === 200)
}

export const fetchPosts = (oldestUnixTime, userId) => {
  const url = `http://localhost:3000/api/users/${userId}/bookmarked_posts`
  return axios.get(url, {
    params: {
      until: oldestUnixTime,
    },
  }).then(res => [res.data.posts, res.data.oldestUnixTime])
}

export const requestClap = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/claps`
  return axios.post(url).then(res => res.status === 200)
}
