import { fork, take, select, call, put } from "redux-saga/effects"

import { succeedFetch, notifyAllFetched } from "./actions"

import {
  fetchNotifications,
  requestReadNotification,
} from "./services"

import { notificationsCountPerFetch } from "../../settings/constants"
import { binderRootUrl } from "../../settings/endpoints"

function* fetchNotificationsFlow() {
  while (true) {
    yield take("START_FETCH")
    const state = yield select()
    const [notifications, oldestUnixtime] = yield call(
      fetchNotifications,
      state.oldestUnixtime,
    )

    yield put(succeedFetch(notifications, oldestUnixtime))

    if (notifications.length < notificationsCountPerFetch) {
      yield put(notifyAllFetched())
      break
    }
  }
}

function* clickProfileLinkFlow() {
  while (true) {
    const action = yield take("CLICK_PROFILE_LINK")
    const { notificationId, username } = action

    const isSuccess = yield call(requestReadNotification, notificationId)

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/@${username}`)
    } else {
      // handle failure
    }
  }
}

function* clickPostLinkFlow() {
  while (true) {
    const action = yield take("CLICK_POST_LINK")
    const { notificationId, postUuid } = action

    const isSuccess = yield call(requestReadNotification, notificationId)

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/posts/${postUuid}`)
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(fetchNotificationsFlow)
  yield fork(clickProfileLinkFlow)
  yield fork(clickPostLinkFlow)
}

export default rootSaga
