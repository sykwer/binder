import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import PostsList from "./PostsList"
import BottomFixedWindow from "./BottomFixedWindow"
import BottomObserver from "./BottomObserver"

const cpnt = ({ isBottomWindowDisplayed }) => (
  <div>
    <PostsList />
    {
      isBottomWindowDisplayed && (
        <BottomFixedWindow />
      )
    }
    <BottomObserver />
  </div>
)

cpnt.propTypes = {
  isBottomWindowDisplayed: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isBottomWindowDisplayed: state.selectedPostUuids.length > 0,
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
