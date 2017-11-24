import { fork, take, cancel, select, call, put } from "redux-saga/effects"
import { delay } from "redux-saga"

import {
  confirmRegrexInvalid,
  confirmUsernameUnique,
  confirmUsernameNotUnique,
  notifyInputEmpty,
} from "./actions"

import { requestUsernameUniqueness } from "./services"
import { usernameRegrex } from "../../settings/constants"

function* uniquenessCheckFlow() {
  yield call(delay, 1500)
  const state = yield select()

  const isUnique = yield call(requestUsernameUniqueness, state.usernameInput)

  if (isUnique) {
    yield put(confirmUsernameUnique())
  } else {
    yield put(confirmUsernameNotUnique())
  }
}

function* regrexCheckFlow() {
  const state = yield select()

  if (state.usernameInput.length < 1) {
    yield put(notifyInputEmpty())
  } else if (usernameRegrex.test(state.usernameInput)) {
    yield fork(uniquenessCheckFlow)
  } else {
    yield call(delay, 1500)
    yield put(confirmRegrexInvalid())
  }
}

function* rootSaga() {
  let lastTask

  while (true) {
    yield take("CHANGE_USERNAME_INPUT")

    if (lastTask) {
      yield cancel(lastTask)
    }

    lastTask = yield fork(regrexCheckFlow)
  }
}

export default rootSaga
