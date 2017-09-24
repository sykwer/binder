import { takeLatest, take, select, call, fork, put } from "redux-saga/effects"

import {
  finishFetchFollowers,
  finishFetchFollowings,
  notifyAllFollowersFetched,
  notifyAllFollowingsFetched,
  succeedFollowFromFollowers,
  succeedUnfollowFromFollowers,
  succeedFollowFromFollowings,
  succeedUnfollowFromFollowings,
} from "./actions"

import {
  requestSaveProfile,
  fetchFollowers,
  fetchFollowings,
  requestFollow,
  requestUnfollow,
} from "./services"

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

function* followFromFollowersListFlow() {
  while (true) {
    const action = yield take("CLICK_FOLLOW_FROM_FOLLOWERS")
    const isSuccess = yield call(requestFollow, action.destinationId)

    if (isSuccess) {
      yield put(succeedFollowFromFollowers(action.destinationId))
    } else {
      // handle failure
    }
  }
}

function* unfollowFromFollowersListFlow() {
  while (true) {
    const action = yield take("CLICK_UNFOLLOW_FROM_FOLLOWERS")
    const isSuccess = yield call(requestUnfollow, action.destinationId)

    if (isSuccess) {
      yield put(succeedUnfollowFromFollowers(action.destinationId))
    } else {
      // handle failure
    }
  }
}

function* followFromFollowingsListFlow() {
  while (true) {
    const action = yield take("CLICK_FOLLOW_FROM_FOLLOWINGS")
    const isSuccess = yield call(requestFollow, action.destinationId)

    if (isSuccess) {
      yield put(succeedFollowFromFollowings(action.destinationId))
    } else {
      // handle failure
    }
  }
}

function* unfollowFromFollowingsListFlow() {
  while (true) {
    const action = yield take("CLICK_UNFOLLOW_FROM_FOLLOWINGS")
    const isSuccess = yield call(requestUnfollow, action.destinationId)

    if (isSuccess) {
      yield put(succeedUnfollowFromFollowings(action.destinationId))
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield takeLatest("SAVE", saveProfileFlow)
  yield fork(fetchFollowersFlow)
  yield fork(fetchFollowingsFlow)
  yield fork(followFromFollowersListFlow)
  yield fork(unfollowFromFollowersListFlow)
  yield fork(followFromFollowingsListFlow)
  yield fork(unfollowFromFollowingsListFlow)
}

export default rootSaga
