import axios from "axios"

export const requestFollow = (opponentUserId) => {
  const url = "http://localhost:3000/api/follows"
  return axios.post(url, {
    opponent_user_id: opponentUserId,
  }).then(res => res.status === 200)
}

export const requestUnfollow = (opponentUserId) => {
  const url = "http://localhost:3000/api/follows"
  return axios.delete(url, {
    params: {
      opponent_user_id: opponentUserId,
    },
  }).then(res => res.status === 200)
}
