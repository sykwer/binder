import { delay } from "redux-saga"
import { takeLatest, call, put, select, fork, take, cancel } from "redux-saga/effects"

import {
  requestSaveContentDraft,
  requestBookList,
  requestSaveSelectedBook,
  requestSaveTitleDraft,
  requestPostPublish,
  requestTagsList,
} from "./services"

import {
  startSavingPostContent,
  finishSavingPostContent,
  startSavingPostTitle,
  finishSavingPostTitle,
  startFetchTags,
  finishFetchTags,
} from "./actions"

import { binderRootUrl } from "../../../settings/endpoints"

function* postContentSaveFlow(action) {
  yield call(delay, 1500)
  yield put(startSavingPostContent())
  yield call(delay, 1500)

  const state = yield select()
  const isSuccess = yield call(requestSaveContentDraft, state.uuid, action.text)

  if (isSuccess) {
    yield put(finishSavingPostContent())
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

  const state = yield select()
  const isSuccess = yield call(
    requestSaveSelectedBook,
    state.uuid,
    state.selectedBookAsin,
    state.selectedBookImage,
    state.selectedBookTitle,
    state.selectedBookAuthor,
    state.selectedBookPublisher,
  )

  if (isSuccess) {
    // handle success
  } else {
    // handle failure
  }
}

function* postTitleSaveFlow() {
  yield call(delay, 1500)
  yield put(startSavingPostTitle())
  yield call(delay, 1500)

  const state = yield select()
  const isSuccess = yield call(requestSaveTitleDraft, state.uuid, state.postTitle)

  if (isSuccess) {
    yield put(finishSavingPostTitle())
  } else {
    // handle failure
  }
}

function* postPublishFlow() {
  while (true) {
    yield take("PUBLISH_POST")
    const state = yield select()
    const isSuccess = yield call(
      requestPostPublish,
      state.uuid,
      state.selectedTags,
      state.isSharedOnTwitter,
      state.isSharedOnFacebook,
    )

    if (isSuccess) {
      window.location.assign(`${binderRootUrl}/posts/${state.uuid}`)
    } else {
      // handle failure
    }
  }
}

function* tagsFetch(q) {
  const state = yield select()
  const tagNames = state.selectedTags.map(tag => tag.name)
  const tags = yield call(requestTagsList, q, tagNames)
  yield put(finishFetchTags(tags))
}

function* tagsFetchFlow() {
  let lastTask

  while (true) {
    const action = yield take("CHANGE_TAG_INPUT")

    if (lastTask) {
      yield cancel(lastTask)
    }

    yield call(delay, 300)

    if (action.text.length > 1) {
      yield put(startFetchTags())
      lastTask = yield fork(tagsFetch, action.text)
    }
  }
}

function* rootSaga() {
  yield takeLatest("UPDATE_POST_CONTENT", postContentSaveFlow)
  yield takeLatest("UPDATE_POST_TITLE", postTitleSaveFlow)
  yield fork(searchBookListFlow)
  yield takeLatest("SELECT_BOOK", afterSelectBookFlow)
  yield fork(postPublishFlow)
  yield fork(tagsFetchFlow)
}

export default rootSaga
