import { delay } from "redux-saga"
import { takeLatest, call, put, select } from "redux-saga/effects"

import { requestSaveContentDraft } from "./services"

function* postContentSaveFlow(action) {
  yield call(delay, 1000)

  const state = yield select()
  yield put({ type: "START_SAVING_POST_CONTENT" })
  const isSuccess = yield call(requestSaveContentDraft, state.uuid, action.text)

  if (isSuccess) {
    yield put({ type: "FINISH_SAVING_POST_CONTENT" })
  } else {
    // handle fail here
  }
}

function* rootSaga() {
  yield takeLatest("UPDATE_POST_CONTENT", postContentSaveFlow)
}

export default rootSaga
