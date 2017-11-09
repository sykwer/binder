import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const requestClap = postUuid => (
  axios.post(
    `${binderApiEndpoint}/posts/${postUuid}/claps`,
  ).then(res => res.status === 200)
)
