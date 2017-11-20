import { fork, take, select, call } from "redux-saga/effects"
import axios from "axios"

import { binderRootUrl } from "../../settings/endpoints"

function* logoutFlow() {
  while (true) {
    yield take("LOGOUT")
    const state = yield select()

    const isSuccess = yield call(() => (
      axios.delete(
        `${binderRootUrl}${state.destroySessionPath}`,
      ).then(res => res.status === 301)
    ))

    if (isSuccess) {
      window.location.reload()
    } else {
      console.log("fail")
    }
  }
}

function* rootSaga() {
  yield fork(logoutFlow)
}

export default rootSaga
