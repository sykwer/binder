import { fork, take, select, call, put } from "redux-saga/effects"

import {
  finishFetch,
  notifyAllFetched,
  succeedBookmark,
  succeedUnbookmark,
} from "./actions"
import {
  fetchPosts,
  requestBookmark,
  requestUnbookmark,
} from "./services"

function* fetchPostsFlow() {
  while (true) {
    yield take("START_FETCH")

    const state = yield select()
    let page
    if (state.page == null) {
      page = 0
    } else {
      page = state.page + 1
    }

    const posts = yield call(fetchPosts, state.userId, page)
    yield put(finishFetch(page, posts))

    if (posts.length < 50) {
      yield put(notifyAllFetched())
      break
    }
  }
}

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
  yield fork(fetchPostsFlow)
  yield fork(requestBookmarkFlow)
  yield fork(requestUnbookmarkFlow)
}

export default rootSaga
