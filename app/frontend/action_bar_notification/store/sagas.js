import { fork, take, select, call, put } from "redux-saga/effects"

import { succeedFetch, notifyAllFetched } from "./actions"
import { fetchNotifications } from "./services"
import { notificationsCountPerFetch } from "../../settings/constants"

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

function* rootSaga() {
  yield fork(fetchNotificationsFlow)
}

export default rootSaga
