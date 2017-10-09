import axios from "axios"

export const requestFollow = (userId) => {
  const url = "http://localhost:3000/api/follows"
  return axios.post(url, {
    opponent_user_id: userId,
  }).then(res => res.status === 200)
}

export const requestUnfollow = (userId) => {
  const url = "http://localhost:3000/api/follows"
  return axios.delete(url, {
    params: {
      opponent_user_id: userId,
    },
  }).then(res => res.status === 200)
}
