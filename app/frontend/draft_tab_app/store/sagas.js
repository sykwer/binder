import { fork, take, select, call } from "redux-saga/effects"

import { requestDeletePost } from "./services"

function* deletePostFlow() {
  while (true) {
    const action = yield take("CLICK_DELETE")
    const state = yield select()
    const isSuccess = yield call(requestDeletePost, action.postUuid)

    if (isSuccess) {
      window.location.assign(`http://localhost:3000/@${state.userId}/drafts`)
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(deletePostFlow)
}

export default rootSaga
