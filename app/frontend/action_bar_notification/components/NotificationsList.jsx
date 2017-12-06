import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { List, AutoSizer } from "react-virtualized"

import { startFetch } from "../store/actions"

class cpnt extends React.Component {
  componentDidMount() {
    this.props.handleBottomReached()
  }

  render() {
    const { notifications, handleBottomReached } = this.props

    const rowRenderer = ({ index, style }) => {
      const notification = notifications[index]

      return (
        <p
          key={index}
          style={style}
        >
          {notification.id}
        </p>
      )
    }

    rowRenderer.propTypes = {
      index: PropTypes.number.isRequired,
      style: PropTypes.any, // eslint-disable-line
    }

    return (
      <AutoSizer>
        {
          ({ height, width }) => (
            <List
              className="notifications-list"
              width={width}
              height={height}
              rowRenderer={rowRenderer}
              rowCount={notifications.length}
              rowHeight={75}
              onRowsRendered={({ stopIndex }) => {
                if (stopIndex === notifications.length - 1) {
                  handleBottomReached()
                }
              }}
            />
          )
        }
      </AutoSizer>
    )
  }
}


cpnt.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  handleBottomReached: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  notifications: state.notifications,
})

const mapDispatchToProps = dispatch => ({
  handleBottomReached: () => {
    dispatch(startFetch())
  },
})

const NotificationsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default NotificationsList
