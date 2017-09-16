import { fork, call, take, select, put } from "redux-saga/effects"

import { fetchPosts, fetchPostDetail } from "./services"
import {
  finishFetching,
  notifyAllFetched,
  fetchedPostDetail,
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

function* rootSaga() {
  yield fork(fetchPostsFlow)
  yield fork(fetchPostDetailFlow)
}

export default rootSaga
