import { fork, call, take, select, put } from "redux-saga/effects"

import {
  fetchPosts,
  fetchPostDetail,
  requestBookmark,
  requestUnbookmark,
} from "./services"

import {
  finishFetching,
  notifyAllFetched,
  fetchedPostDetail,
  succeedBookmark,
  succeedUnbookmark,
} from "./actions"

function* fetchPostsFlow() {
  while (true) {
    yield take("START_FETCHING")

    const state = yield select()
    const newPosts = yield call(
      fetchPosts,
      state.userId,
      state.postsCount,
    )

    yield put(finishFetching(
      newPosts.length,
      newPosts,
    ))

    if (newPosts.length < 10) {
      yield put(notifyAllFetched())
      break
    }
  }
}

function* fetchPostDetailFlow() {
  while (true) {
    const action = yield take("START_FETCH_POST_DETAIL")
    const post = yield call(fetchPostDetail, action.postUuid)
    yield put(fetchedPostDetail(post))
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
  yield fork(fetchPostDetailFlow)
  yield fork(requestBookmarkFlow)
  yield fork(requestUnbookmarkFlow)
}

export default rootSaga
