import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import PostsList from "./PostsList"
import BottomFixedWindow from "./BottomFixedWindow"
import DeleteScreen from "./DeleteScreen"

const cpnt = ({
  isListMode,
  isDeleteMode,
  isAnyPostSelected,
}) => (
  <div>
    {
      isListMode && (
        <PostsList />
      )
    }
    {
      isAnyPostSelected && (
        <BottomFixedWindow />
      )
    }
    {
      isDeleteMode && (
        <DeleteScreen />
      )
    }
  </div>
)

cpnt.propTypes = {
  isListMode: PropTypes.bool.isRequired,
  isDeleteMode: PropTypes.bool.isRequired,
  isAnyPostSelected: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isListMode: state.screenMode === "LIST",
  isDeleteMode: state.screenMode === "DELETE",
  isAnyPostSelected: state.selectedPostUuids.length > 0,
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
