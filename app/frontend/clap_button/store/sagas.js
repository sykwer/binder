import { fork, take, select, call, put } from "redux-saga/effects"

import { requestClap } from "./services"
import { succeedClap } from "./actions"

import { clapsCountLimit } from "../../settings/constants"

function* requestClapFlow() {
  while (true) {
    yield take("CLICK_CLAP")
    const state = yield select()

    if (state.clappedCountByMe >= clapsCountLimit) {
      break
    }

    const isSuccess = yield call(requestClap, state.postUuid)

    if (isSuccess) {
      yield put(succeedClap())
    } else {
      // handle failure
    }
  }
}

function* rootSaga() {
  yield fork(requestClapFlow)
}

export default rootSaga
