import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Item from './item.js'

const ItemList = ({items, active}) => (
    <div>
        {items.toArray().map((item, index) => {
            return (
                <Item
                    key={index}
                    text={item.text}
                    number={item.number}
                    active={active}
                />
            )
        })}
    </div>
)

ItemList.propTypes = {
    items: ImmutablePropTypes.list.isRequired
  , active: PropTypes.bool.isRequired
}

export default ItemList
