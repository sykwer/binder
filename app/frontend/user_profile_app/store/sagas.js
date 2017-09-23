import { takeLatest, take, select, call, fork, put } from "redux-saga/effects"

import { finishFetchFollowers, notifyAllFollowersFetched } from "./actions"
import { requestSaveProfile, fetchFollowers } from "./services"

function* saveProfileFlow() {
  const state = yield select()
  const isSuccess = yield call(
    requestSaveProfile,
    state.id,
    state.displayedName,
    state.displayedBio,
  )

  if (isSuccess) {
    // handle success
  } else {
    // handle failure
  }
}

function* fetchFollowersFlow() {
  while (true) {
    yield take("START_FETCH_FOLLOWERS")

    const state = yield select()
    const page = state.page == null ? 0 : state.page + 1
    const followers = yield call(fetchFollowers, state.id, page) // userId == myUserId

    yield put(finishFetchFollowers(followers, page))

    if (followers.length < 20) {
      put(notifyAllFollowersFetched())
      break
    }
  }
}

function* rootSaga() {
  yield takeLatest("SAVE", saveProfileFlow)
  yield fork(fetchFollowersFlow)
}

export default rootSaga
