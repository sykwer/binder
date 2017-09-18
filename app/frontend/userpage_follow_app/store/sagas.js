import { fork, take, call, put, select } from "redux-saga/effects"

import {
  succeedInFollow,
  succeedInUnfollow,
} from "./actions"
import {
  requestFollow,
  requestUnfollow,
} from "./services"

function* requestFollowFlow() {
  const state = yield select()

  while (true) {
    yield take("CLICK_FOLLOW")
    const isSuccess = yield call(requestFollow, state.opponentUserId)

    if (isSuccess) {
      yield put(succeedInFollow())
    } else {
      // handle failure
    }
  }
}

function* requestUnfollowFlow() {
  const state = yield select()

  while (true) {
    yield take("CLICK_UNFOLLOW")
    const isSuccess = yield call(requestUnfollow, state.opponentUserId)

    if (isSuccess) {
      yield put(succeedInUnfollow())
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
