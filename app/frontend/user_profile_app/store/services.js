import axios from "axios"

export const requestSaveProfile = (id, name, bio) => {
  const url = `http://localhost:3000/api/users/${id}/profile`
  return axios.patch(url, {
    name,
    bio,
  }).then(res => res.status === 200)
}

export const fetchFollowers = (userId, page) => {
  const url = `http://localhost:3000/api/users/${userId}/followers`
  return axios.get(url, {
    params: {
      page,
      counts: 20,
      my_user_id: userId,
    },
  }).then(res => res.data.followers)
}

export const fetchFollowings = (userId, page) => {
  const url = `http://localhost:3000/api/users/${userId}/followings`
  return axios(url, {
    params: {
      page,
      counts: 20,
      my_user_id: userId,
    },
  }).then(res => res.data.followings)
}
