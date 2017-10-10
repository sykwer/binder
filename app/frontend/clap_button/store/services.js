import axios from "axios"

// eslint-disable-next-line
export const requestClap = (postUuid) => {
  const url = `http://localhost:3000/api/posts/${postUuid}/claps`
  return axios.post(url).then(res => res.status === 200)
}
