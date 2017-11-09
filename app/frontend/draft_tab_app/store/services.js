import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const requestDeletePost = postUuid => (
  axios.delete(
    `${binderApiEndpoint}/posts/${postUuid}`,
  ).then(res => res.status === 200)
)
