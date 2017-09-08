import { delay } from "redux-saga"
import { takeLatest, call, put, select, fork, take, cancel } from "redux-saga/effects"

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

function* fetchBookListFlow() {
  yield call(delay, 1000)

  const state = yield select()
  yield put({ type: "REQUEST_BOOK_LIST" })
  const books = yield call(
    requestBookList,
    state.bookNameInput,
    state.authorInput,
    state.publisherInput,
  )

  if (typeof books !== "undefined") {
    yield put({ type: "RECEIVE_BOOK_LIST", books })
  } else {
    yield put({ type: "RECEIVE_EMPTY" })
  }
}

function* searchBookListFlow() {
  let lastTask
  let state

  while (true) {
    yield take(["CHANGE_BOOK_NAME_INPUT", "CHANGE_AUTHOR_INPUT", "CHANGE_PUBLISHER_INPUT"])

    if (lastTask) {
      yield cancel(lastTask)
    }

    state = yield select()

    if (state.bookNameInput || state.authorInput || state.publisherInput) {
      lastTask = yield fork(fetchBookListFlow)
    } else {
      yield put({ type: "NOTIFY_BOOK_SEARCH_INPUT_EMPTY" })
    }
  }
}

function* afterSelectBookFlow() {
  yield call(delay, 0.1)
  yield put({ type: "NOTIFY_BOOK_SEARCH_INPUT_EMPTY" })
}

function* rootSaga() {
  yield takeLatest("UPDATE_POST_CONTENT", postContentSaveFlow)
  yield fork(searchBookListFlow)
  yield takeLatest("SELECT_BOOK", afterSelectBookFlow)
}

export default rootSaga
