import { fork, take, select, call, put } from "redux-saga/effects"

import { finishFetch, notifyAllFetched } from "./actions"
import { fetchPosts } from "./services"

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

function* rootSaga() {
  yield fork(fetchPostsFlow)
}

export default rootSaga
