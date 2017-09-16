import axios from "axios"

export const fetchPosts = (userId, postsCount) => {
  const url = `http://localhost:3000/api/users/${userId}/posts`

  return axios.get(url, {
    params: {
      offset: postsCount,
      count: 10,
    },
  }).then(res => res.data.posts)
}

export const fetchPostDetail = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}`
  return axios.get(url).then(res => res.data.post)
}