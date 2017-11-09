import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

export const requestSaveProfile = (id, name, bio) => (
  axios.patch(`${binderApiEndpoint}/users/${id}/profile`, {
    name,
    bio,
  }).then(res => res.status === 200)
)

export const fetchFollowers = (userId, page) => (
  axios.get(`${binderApiEndpoint}/users/${userId}/followers`, {
    params: {
      page,
      counts: 20,
      my_user_id: userId,
    },
  }).then(res => res.data.followers)
)

export const fetchFollowings = (userId, page) => (
  axios(`${binderApiEndpoint}/users/${userId}/followings`, {
    params: {
      page,
      counts: 20,
      my_user_id: userId,
    },
  }).then(res => res.data.followings)
)

export const requestFollow = destinationId => (
  axios.post(`${binderApiEndpoint}/follows`, {
    opponent_user_id: destinationId,
  }).then(res => res.status === 200)
)

export const requestUnfollow = destinationId => (
  axios.delete(`${binderApiEndpoint}/follows`, {
    params: {
      opponent_user_id: destinationId,
    },
  }).then(res => res.status === 200)
)
