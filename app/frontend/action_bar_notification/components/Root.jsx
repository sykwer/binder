import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import onClickOutside from "react-onclickoutside"

import { openWindow, closeWindow } from "../store/actions"

class cpnt extends Component {
  handleClickOutside() {
    this.props.handleCloseWindow()
  }

  render() {
    const { handleOpenWindow } = this.props
    const { isWindowOpen } = this.props

    return (
      <div className="notification-icon-wrapper">
        <i
          className="fa fa-bell-o notification-icon cancel-focus-outline"
          aria-hidden="true"
          tagIndex="0"
          onClick={(e) => {
            e.stopPropagation()
            handleOpenWindow()
          }}
        />
        {
          isWindowOpen && (
            <div>
              <div
                className="notification-window-before cancel-focus-outline"
                role="button"
                tabIndex="0"
                onClick={(e) => { e.stopPropagation() }}
              />
              <div
                className="notification-window cancel-focus-outline"
                role="button"
                tabIndex="0"
                onClick={(e) => { e.stopPropagation() }}
              />
              <div
                className="notification-window-after cancel-focus-outline"
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
  handleCloseWindow: PropTypes.func.isRequired,
  handleOpenWindow: PropTypes.func.isRequired,
}

const wrappedCpnt = onClickOutside(cpnt)

const mapStateToProps = state => ({
  isWindowOpen: state.isWindowOpen,
})

const mapDispatchToProps = dispatch => ({
  handleCloseWindow: () => {
    dispatch(closeWindow())
  },
  handleOpenWindow: () => {
    dispatch(openWindow())
  },
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(wrappedCpnt)

export default Root
