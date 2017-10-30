import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  clickDeleteMenu,
  clickDelete,
  clickCancelDelete,
} from "../store/actions"

const cpnt = ({
  posts,
  toBeDeletedPostUuid,
  handleClickDeleteMenu,
  handleClickDelete,
  handleClickCancelDelete,
}) => (
  <div>
    {
      toBeDeletedPostUuid && (
        <div className="delete-confirmation-window">
          <div className="delete-buttons-wrapper">
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation()
                handleClickDelete(toBeDeletedPostUuid)
              }}
            >
              Delete
            </button>
            <button
              className="cancel-button"
              onClick={(e) => {
                e.stopPropagation()
                handleClickCancelDelete()
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )
    }
    <div className="draft-list">
      {
        posts.map(post => (
          <div
            key={post.uuid}
            className="draft-list-item"
          >
            <h2 className="post-title">
              { post.titleDraft ? post.titleDraft : "タイトル未設定" }
            </h2>
            <div className="item-footer clearfix">
              <p className="last-edited">
                {`Last Edited ${post.updatedAt}`}
              </p>
              <div className="menu-wrapper">
                <i
                  className="fa fa-chevron-down draft-menu-down"
                  aria-hidden="true"
                />
                <div
                  role="button"
                  tabIndex="0"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="draft-menu"
                >
                  <a
                    className="edit-button"
                    href={`http://localhost:3000/posts/${post.uuid}/edit`}
                  >
                    Edit
                  </a>
                  <a
                    className="delete-button"
                    role="button"
                    tabIndex="0"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClickDeleteMenu(post.uuid)
                    }}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

cpnt.propTypes = {
  posts: PropTypes.array, // eslint-disable-line
  toBeDeletedPostUuid: PropTypes.string,
  handleClickDeleteMenu: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  handleClickCancelDelete: PropTypes.func.isRequired,
}

cpnt.defaultProps = {
  posts: [],
  toBeDeletedPostUuid: null,
}

window.addEventListener("load", () => {
  const draftMenuDowns = document.getElementsByClassName("draft-menu-down")
  const draftMenus = document.getElementsByClassName("draft-menu")

  for (let i = 0; i < draftMenuDowns.length; i += 1) {
    const node = draftMenuDowns[i]
    node.addEventListener("click", (e) => {
      e.stopPropagation()
      const menu = e.target.nextElementSibling
      menu.setAttribute("style", "display: block;")
    }, false)
  }

  document.body.addEventListener("click", () => {
    for (let i = 0; i < draftMenus.length; i += 1) {
      const node = draftMenus[i]
      node.setAttribute("style", "display: none;")
    }
  }, false)
})

const mapStateToProps = state => ({
  posts: state.posts,
  toBeDeletedPostUuid: state.toBeDeletedPostUuid,
})

const mapDispatchToProps = dispatch => ({
  handleClickDeleteMenu: (postUuid) => {
    dispatch(clickDeleteMenu(postUuid))
  },
  handleClickDelete: (postUuid) => {
    dispatch(clickDelete(postUuid))
  },
  handleClickCancelDelete: () => {
    dispatch(clickCancelDelete())
  },
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Root
