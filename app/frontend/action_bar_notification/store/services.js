import axios from "axios"
import { binderApiEndpoint } from "../../settings/endpoints"

// eslint-disable-next-line
export const fetchNotifications = oldestUnixtime => (
  axios.get(`${binderApiEndpoint}/notifications`, {
    params: {
      oldestUnixtime,
    },
  }).then(res => [res.data.notifications, res.data.oldestUnixtime])
)
