import { fork, take, select, call } from "redux-saga/effects"

import { binderRootUrl } from "../../settings/endpoints"
import { requestDeletePosts } from "./services"

function* deletePostsFlow() {
  while (true) {
    yield take("CONFIRM_DELETE")
    const state = yield select()
    const isSuccess = yield call(requestDeletePosts, state.selectedPostUuids)

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/@${state.username}/drafts`)
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(deletePostsFlow)
}

export default rootSaga
