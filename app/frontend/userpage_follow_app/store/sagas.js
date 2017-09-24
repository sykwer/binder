import { fork, take, call, put, select } from "redux-saga/effects"

import {
  succeedInFollow,
  succeedInUnfollow,
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
  requestFollow,
  requestUnfollow,
  fetchFollowings,
  fetchFollowers,
} from "./services"

function* requestFollowFlow() {
  const state = yield select()

  while (true) {
    yield take("CLICK_FOLLOW")
    const isSuccess = yield call(requestFollow, state.opponentUserId)

    if (isSuccess) {
      yield put(succeedInFollow())
    } else {
      // handle failure
    }
  }
}

function* requestUnfollowFlow() {
  const state = yield select()

  while (true) {
    yield take("CLICK_UNFOLLOW")
    const isSuccess = yield call(requestUnfollow, state.opponentUserId)

    if (isSuccess) {
      yield put(succeedInUnfollow())
    } else {
      // handle failure
    }
  }
}

function* fetchFollowersFlow() {
  while (true) {
    yield take("START_FETCH_FOLLOWERS")
    const state = yield select()

    if (state.isAllFollowersFetched) {
      continue  // eslint-disable-line
    }

    const page = state.followersPage == null ? 0 : state.followersPage + 1
    const followers = yield call(fetchFollowers, state.opponentUserId, state.myUserId, page)

    yield put(finishFetchFollowers(followers, page))

    if (followers.length < 20) {
      put(notifyAllFollowersFetched())
    }
  }
}

function* fetchFollowingsFlow() {
  while (true) {
    yield take("START_FETCH_FOLLOWINGS")
    const state = yield select()

    if (state.isAllFollowingsFetched) {
      continue // eslint-disable-line
    }

    const page = state.followingsPage == null ? 0 : state.followingsPage + 1
    const followings = yield call(fetchFollowings, state.opponentUserId, state.myUserId, page)

    yield put(finishFetchFollowings(followings, page))

    if (followings.length < 20) {
      yield put(notifyAllFollowingsFetched())
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
  yield fork(requestFollowFlow)
  yield fork(requestUnfollowFlow)
  yield fork(fetchFollowersFlow)
  yield fork(fetchFollowingsFlow)
  yield fork(followFromFollowersListFlow)
  yield fork(unfollowFromFollowersListFlow)
  yield fork(followFromFollowingsListFlow)
  yield fork(unfollowFromFollowingsListFlow)
}

export default rootSaga
