import React, {PropTypes} from 'react'

const Item = ({text, number, active}) => (
    active ? (
        <div>
            Active: {text} - {number}
        </div>
    ) : (
        <div>
            Inactive: {text} - {number}
        </div>
    )
)

Item.propTypes = {
    text: PropTypes.string.isRequired
  , number: PropTypes.number.isRequired
  , active: PropTypes.bool.isRequired
}

export default Item
