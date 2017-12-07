import axios from "axios"
import { binderApiEndpoint } from "../../settings/endpoints"
import { notificationsCountPerFetch } from "../../settings/constants"

export const fetchNotifications = oldestUnixtime => (
  axios.get(`${binderApiEndpoint}/notifications`, {
    params: {
      oldest_unixtime: oldestUnixtime,
      count: notificationsCountPerFetch,
    },
  }).then(res => [res.data.notifications, res.data.oldestUnixtime])
)

export const requestReadNotification = notificationId => (
  axios
    .patch(`${binderApiEndpoint}/notifications/${notificationId}/read`)
    .then(res => res.status === 200)
)
