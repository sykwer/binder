import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

export const requestBookmark = postUuid => (
  axios.post(
    `${binderApiEndpoint}/posts/${postUuid}/bookmarks`,
  ).then(res => res.status === 200)
)

export const requestUnbookmark = postUuid => (
  axios.delete(
    `${binderApiEndpoint}/posts/${postUuid}/bookmarks`,
  ).then(res => res.status === 200)
)
