import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import onClickOutside from "react-onclickoutside"

import { closeWindow, openWindow } from "../store/actions"

class cpnt extends Component {
  handleClickOutside() {
    this.props.handleCloseWindow()
  }

  render() {
    const { handleCloseWindow, handleOpenWindow } = this.props
    const { isWindowOpen, name, username, destroySessionPath } = this.props

    return (
      <div
        className="config-icon-wrapper cancel-focus-outline"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.stopPropagation()
          handleCloseWindow()
        }}
      >
        <i
          className="fa fa-cog config-icon cancel-focus-outline"
          aria-hidden="true"
          role="button"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation()
            if (isWindowOpen) {
              handleCloseWindow()
            } else {
              handleOpenWindow()
            }
          }}
        />
        {
          isWindowOpen && (
            <div>
              <div
                className="config-window-before cancel-focus-outline"
                role="button"
                tabIndex="0"
                onClick={(e) => { e.stopPropagation()() }}
              />
              <div
                className="config-window cancel-focus-outline"
                role="button"
                tabIndex="0"
                onClick={(e) => { e.stopPropagation() }}
              >
                <div className="head-box">
                  <a href={`/@${username}`}>
                    <p className="login-name">{name}</p>
                  </a>
                  <a href={`/@${username}`}>
                    <p className="login-name-comment">マイページを表示</p>
                  </a>
                  <i
                    className="fa fa-times close-window-button cancel-focus-outline"
                    aria-hidden="true"
                    role="button"
                    tabIndex="0"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCloseWindow()
                    }}
                  />
                </div>
                <ul className="config-list">
                  {/*
                  <li className="config-list-item">
                    アカウント設定
                  </li>
                  */
                  }
                  <a href="/contacts/new">
                    <li className="config-list-item">
                      お問い合わせ
                    </li>
                  </a>
                  <a
                    href={destroySessionPath}
                    data-method="delete"
                  >
                    <li className="config-list-item cancel-focus-outline">
                      ログアウト
                    </li>
                  </a>
                </ul>
                <a href="/demands/new">
                  <ul className="config-list">
                    <li className="config-list-item bold-item">
                      Binder目安箱
                    </li>
                  </ul>
                </a>
                <div
                  className="foot-box calcel-focus-outline"
                  role="button"
                  tabIndex="0"
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseWindow()
                  }}
                />
              </div>
              <div
                className="config-window-after cancel-focus-outline"
                role="button"
                tabIndex="0"
                onClick={(e) => { e.stopPropagation() }}
              />
            </div>
          )
        }
      </div>
    )
  }
}

cpnt.propTypes = {
  isWindowOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  destroySessionPath: PropTypes.string.isRequired,
  handleCloseWindow: PropTypes.func.isRequired,
  handleOpenWindow: PropTypes.func.isRequired,
}

const wrappedCpnt = onClickOutside(cpnt)

const mapStateToProps = state => ({
  isWindowOpen: state.isWindowOpen,
  name: state.name,
  username: state.username,
  destroySessionPath: state.destroySessionPath,
})

const mapDispatchToProps = dispatch => ({
  handleOpenWindow: () => {
    dispatch(openWindow())
  },
  handleCloseWindow: () => {
    dispatch(closeWindow())
  },
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrappedCpnt)

export default Root
