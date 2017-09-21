import axios from "axios"

// eslint-disable-next-line
export const fetchPosts = (userId, page) => {
  const url = `http://localhost:3000/api/users/${userId}/timeline`
  return axios.get(url, {
    params: {
      page,
    },
  }).then(res => res.data.posts)
}
