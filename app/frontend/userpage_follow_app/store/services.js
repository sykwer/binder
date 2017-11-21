import axios from "axios"

import { usersCountPerFetchInFollows } from "../../settings/constants"
import { binderApiEndpoint } from "../../settings/endpoints"

export const requestFollow = opponentUserId => (
  axios.post(`${binderApiEndpoint}/follows`, {
    opponent_user_id: opponentUserId,
  }).then(res => res.status === 200)
)

export const requestUnfollow = opponentUserId => (
  axios.delete(`${binderApiEndpoint}/follows`, {
    params: {
      opponent_user_id: opponentUserId,
    },
  }).then(res => res.status === 200)
)

export const fetchFollowers = (
  opponentUserId,
  myUserId,
  page,
) => (
  axios.get(`${binderApiEndpoint}/users/${opponentUserId}/followers`, {
    params: {
      counts: usersCountPerFetchInFollows,
      page,
    },
  }).then(res => res.data.followers)
)

export const fetchFollowings = (
  opponentUserId,
  myUserId,
  page,
) => (
  axios.get(`${binderApiEndpoint}/users/${opponentUserId}/followings`, {
    params: {
      counts: usersCountPerFetchInFollows,
      page,
    },
  }).then(res => res.data.followings)
)
