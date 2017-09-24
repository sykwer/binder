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

export const fetchFollowers = (
  opponentUserId,
  myUserId,
  page,
) => {
  const url = `http://localhost:3000/api/users/${opponentUserId}/followers`
  return axios.get(url, {
    params: {
      my_user_id: myUserId,
      counts: 20,
      page,
    },
  }).then(res => res.data.followers)
}

export const fetchFollowings = (
  opponentUserId,
  myUserId,
  page,
) => {
  const url = `http://localhost:3000/api/users/${opponentUserId}/followings`
  return axios.get(url, {
    params: {
      my_user_id: myUserId,
      counts: 20,
      page,
    },
  }).then(res => res.data.followings)
}
