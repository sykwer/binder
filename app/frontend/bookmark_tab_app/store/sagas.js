import { fork, take, select, put, call } from "redux-saga/effects"

import {
  requestBookmark,
  requestUnbookmark,
  requestClap,
  fetchPosts,
} from "./services"

import {
  succeedBookmark,
  succeedUnbookmark,
  succeedClap,
  finishFetchPosts,
  notifyAllPostsFetched,
} from "./actions"

function* bookmarkFlow() {
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

function* unbookmarkFlow() {
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

function* clapFlow() {
  while (true) {
    const action = yield take("CLICK_CLAP")
    const isSuccess = yield call(requestClap, action.postUuid)

    if (isSuccess) {
      yield put(succeedClap(action.postUuid))
    } else {
      // handle failure
    }
  }
}

function* fetchPostsFlow() {
  while (true) {
    yield take("START_FETCH_POSTS")
    const state = yield select()

    const [posts, oldestUnixTime] = yield call(
      fetchPosts,
      state.oldestUnixTime,
      state.userId,
    )

    yield put(finishFetchPosts(posts, oldestUnixTime))

    if (posts.length < 20) {
      yield put(notifyAllPostsFetched())
      break
    }
  }
}

function* rootSaga() {
  yield fork(bookmarkFlow)
  yield fork(unbookmarkFlow)
  yield fork(fetchPostsFlow)
  yield fork(clapFlow)
}

export default rootSaga
