import axios from "axios"

// eslint-disable-next-line
export const requestDeletePost = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}`
  return axios.delete(url).then(res => res.status === 200)
}
