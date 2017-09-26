import { fork, take, call, put } from "redux-saga/effects"

import {
  succeedBookmark,
  succeedUnbookmark,
} from "./actions"

import {
  requestBookmark,
  requestUnbookmark,
} from "./services"

function* requestBookmarkFlow() {
  while (true) {
    const action = yield take("CLICK_BOOKMARK")
    const isSuccess = yield call(requestBookmark, action.postUuid)

    if (isSuccess) {
      yield put(succeedBookmark(action.postUuid))
    } else {
      // handle failure
    }
  }
}

function* requestUnbookmarkFlow() {
  while (true) {
    const action = yield take("CLICK_UNBOOKMARK")
    const isSuccess = yield call(requestUnbookmark, action.postUuid)

    if (isSuccess) {
      yield put(succeedUnbookmark(action.postUuid))
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(requestBookmarkFlow)
  yield fork(requestUnbookmarkFlow)
}

export default rootSaga
