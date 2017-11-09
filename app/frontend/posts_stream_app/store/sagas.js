import { fork, take, select, call, put } from "redux-saga/effects"

import {
  finishFetch,
  notifyAllFetched,
  succeedBookmark,
  succeedUnbookmark,
} from "./actions"
import {
  fetchPostsFromFollowings,
  fetchPostsOfTimeline,
  requestBookmark,
  requestUnbookmark,
} from "./services"

function* fetchPostsFlowOfFollowings() {
  while (true) {
    yield take("START_FETCH")

    const state = yield select()
    let page
    if (state.page == null) {
      page = 0
    } else {
      page = state.page + 1
    }

    const posts = yield call(fetchPostsFromFollowings, page)
    yield put(finishFetch(posts, page, null))

    if (posts.length < 10) {
      yield put(notifyAllFetched())
      break
    }
  }
}

function* fetchPostsFlowOfTimeline() {
  while (true) {
    yield take("START_FETCH")

    const state = yield select()
    const { posts, oldestUnixtimeNano } = yield call(
      fetchPostsOfTimeline,
      state.oldestUnixtimeNano,
    )

    yield put(finishFetch(posts, null, oldestUnixtimeNano))

    if (posts.length < 10) {
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
  yield fork(requestBookmarkFlow)
  yield fork(requestUnbookmarkFlow)

  const state = yield select()
  switch (state.streamId) {
    case "followings":
      yield fork(fetchPostsFlowOfFollowings)
      break
    case "timeline":
      yield fork(fetchPostsFlowOfTimeline)
      break
    default:
  }
}

export default rootSaga
