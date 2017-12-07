import { fork, take, select, call, put } from "redux-saga/effects"

import { succeedFetch, notifyAllFetched } from "./actions"

import {
  fetchNotifications,
  requestReadNotification,
  requestCheckNotifications,
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

function* checkNotificationsFlow() {
  while (true) {
    yield take("OPEN_WINDOW")
    const state = yield select()
    const isSuccess = yield call(requestCheckNotifications, state.userId)

    if (!isSuccess) {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(fetchNotificationsFlow)
  yield fork(clickProfileLinkFlow)
  yield fork(clickPostLinkFlow)
  yield fork(checkNotificationsFlow)
}

export default rootSaga
