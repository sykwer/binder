import { delay } from "redux-saga"
import { takeLatest, call, put, select } from "redux-saga/effects"

import { requestSaveContentDraft, requestBookList } from "./services"

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

function* searchBookListFlow() {
  yield call(delay, 1000)

  const state = yield select()
  yield put({ type: "REQUEST_BOOK_LIST" })
  const books = yield call(
    requestBookList,
    state.bookNameInput,
    state.authorInput,
    state.publisherInput,
  )
  yield put({ type: "RECEIVE_BOOK_LIST", books })
}

function* rootSaga() {
  yield takeLatest("UPDATE_POST_CONTENT", postContentSaveFlow)
  yield takeLatest([
    "CHANGE_BOOK_NAME_INPUT",
    "CHANGE_AUTHOR_INPUT",
    "CHANGE_PUBLISHER_INPUT",
  ], searchBookListFlow)
}

export default rootSaga
