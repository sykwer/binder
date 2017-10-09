import { fork, take, select, call, put } from "redux-saga/effects"

import { requestFollow, requestUnfollow } from "./services"
import { succeedFollow, succeedUnfollow } from "./actions"

function* requestFollowFlow() {
  while (true) {
    yield take("CLICK_FOLLOW")
    const state = yield select()
    const isSuccess = yield call(requestFollow, state.userId)

    if (isSuccess) {
      yield put(succeedFollow())
    } else {
      // handle failure
    }
  }
}

function* requestUnfollowFlow() {
  while (true) {
    yield take("CLICK_UNFOLLOW")
    const state = yield select()
    const isSuccess = yield call(requestUnfollow, state.userId)

    if (isSuccess) {
      yield put(succeedUnfollow())
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(requestFollowFlow)
  yield fork(requestUnfollowFlow)
}

export default rootSaga
