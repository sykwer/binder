import { fork, take, select, call, put } from "redux-saga/effects"

import {
  finishFetch,
  notifyAllFetched,
} from "./actions"

import { fetchPosts } from "./services"
import { postsCountPerFetchInPostTab } from "../../settings/constants"

function* postsFetchFlow() {
  while (true) {
    yield take("START_FETCH")

    const state = yield select()
    const posts = yield call(
      fetchPosts,
      state.userId,
      state.postsCount,
    )

    yield put(finishFetch(posts, posts.length))

    if (posts.length < postsCountPerFetchInPostTab) {
      yield put(notifyAllFetched())
      break
    }
  }
}

function* rootSaga() {
  yield fork(postsFetchFlow)
}

export default rootSaga
