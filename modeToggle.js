import React, {PropTypes} from 'react'

const ModeToggle = ({onClick}) => (
    <div>
        <button onClick={onClick}>Mode</button>
    </div>
)

ModeToggle.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModeToggle
