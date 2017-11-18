import { fork, take, select, call, put } from "redux-saga/effects"

import {
  finishFetchPosts,
  notifyAllFetched,
} from "./actions"

import {
  fetchPosts,
  requestDeletePosts,
  requestUnpublishPosts,
} from "./services"

import { postsCountPerFetchInPostTab } from "../../settings/constants"
import { binderRootUrl } from "../../settings/endpoints"

function* postsFetchFlow() {
  while (true) {
    yield take("START_FETCH_POSTS")

    const state = yield select()
    const posts = yield call(
      fetchPosts,
      state.userId,
      state.postsCount,
    )

    yield put(finishFetchPosts(posts, posts.length))

    if (posts.length < postsCountPerFetchInPostTab) {
      yield put(notifyAllFetched())
      break
    }
  }
}

function* deletePostsFlow() {
  while (true) {
    yield take("CONFIRM_DELETE")
    const state = yield select()
    const isSuccess = yield call(requestDeletePosts, state.selectedPostUuids)

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/@${state.username}/posts`)
    } else {
      // handle failure
    }
  }
}

function* unpublishPostsFlow() {
  while (true) {
    yield take("CONFIRM_UNPUBLISH")
    const state = yield select()
    const isSuccess = yield call(requestUnpublishPosts, state.selectedPostUuids)

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/@${state.username}/posts`)
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(postsFetchFlow)
  yield fork(deletePostsFlow)
  yield fork(unpublishPostsFlow)
}

export default rootSaga
