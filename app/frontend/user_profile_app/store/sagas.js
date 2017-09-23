import { takeLatest, take, select, call, fork, put } from "redux-saga/effects"

import {
  finishFetchFollowers,
  finishFetchFollowings,
  notifyAllFollowersFetched,
  notifyAllFollowingsFetched,
} from "./actions"
import { requestSaveProfile, fetchFollowers, fetchFollowings } from "./services"

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
    const page = state.followersPage == null ? 0 : state.followersPage + 1
    const followers = yield call(fetchFollowers, state.id, page) // userId == myUserId

    yield put(finishFetchFollowers(followers, page))

    if (followers.length < 20) {
      put(notifyAllFollowersFetched())
      break
    }
  }
}

function* fetchFollowingsFlow() {
  while (true) {
    yield take("START_FETCH_FOLLOWINGS")

    const state = yield select()
    const page = state.followingsPage == null ? 0 : state.followingsPage + 1
    const followings = yield call(fetchFollowings, state.id, page) // userId == myUserid

    yield put(finishFetchFollowings(followings, page))

    if (followings.length < 20) {
      yield put(notifyAllFollowingsFetched())
      break
    }
  }
}

function* rootSaga() {
  yield takeLatest("SAVE", saveProfileFlow)
  yield fork(fetchFollowersFlow)
  yield fork(fetchFollowingsFlow)
}

export default rootSaga
