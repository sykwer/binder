import { fork, call, take, select, put } from "redux-saga/effects"

import {
  fetchPosts,
} from "./services"

import {
  finishFetching,
  notifyAllFetched,
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

function* rootSaga() {
  yield fork(fetchPostsFlow)
}

export default rootSaga
