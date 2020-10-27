import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const LikeCount = ({ numberOfLikes }) => (
  <div className="LikeCount">
    {numberOfLikes !== 0 ? (
      <>
        <Icon name="heart" />
        {numberOfLikes}
      </>
    ) : null}
  </div>
)

LikeCount.propTypes = {
  numberOfLikes: PropTypes.number,
}

LikeCount.defaultProps = {
  numberOfLikes: 0,
}
export default LikeCount
