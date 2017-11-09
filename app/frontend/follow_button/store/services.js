import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

export const requestFollow = userId => (
  axios.post(`${binderApiEndpoint}/follows`, {
    opponent_user_id: userId,
  }).then(res => res.status === 200)
)

export const requestUnfollow = userId => (
  axios.delete(`${binderApiEndpoint}/follows`, {
    params: {
      opponent_user_id: userId,
    },
  }).then(res => res.status === 200)
)
