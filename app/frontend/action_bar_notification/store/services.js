import axios from "axios"
import { binderApiEndpoint } from "../../settings/endpoints"
import { notificationsCountPerFetch } from "../../settings/constants"

// eslint-disable-next-line
export const fetchNotifications = oldestUnixtime => (
  axios.get(`${binderApiEndpoint}/notifications`, {
    params: {
      oldest_unixtime: oldestUnixtime,
      count: notificationsCountPerFetch,
    },
  }).then(res => [res.data.notifications, res.data.oldestUnixtime])
)
