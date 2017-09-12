import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ image, name }) => (
  <div className="profile-main-right">
    <img src={image} alt={name} />
  </div>
)

cpnt.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  image: state.image,
  name: state.displayedName,
})

const Image = connect(
  mapStateToProps,
)(cpnt)

export default Image
