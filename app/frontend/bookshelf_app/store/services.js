import axios from "axios"

// eslint-disable-next-line
export const fetchPosts = (userId, postsCount) => {
  const url = `http://localhost:3000/api/users/${userId}/posts`

  return axios.get(url, {
    params: {
      offset: postsCount,
      count: 10,
    },
  }).then(res => res.data.posts)
}
