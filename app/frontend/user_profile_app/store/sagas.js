import { takeLatest, select, call } from "redux-saga/effects"

import { requestSaveProfile } from "./services"

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

function* rootSaga() {
  yield takeLatest("SAVE", saveProfileFlow)
}

export default rootSaga
