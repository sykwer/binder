import axios from "axios"

import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const requestUsernameUniqueness = username => (
  axios
    .get(`${binderApiEndpoint}/username_uniquenesses/${username}`)
    .then(res => res.data.isUnique)
)
