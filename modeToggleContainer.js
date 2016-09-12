import {connect} from 'react-redux'
import {toggle} from './actions.js'

import ModeToggle from './modeToggle.js'

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(toggle())
})

export default connect(null, mapDispatchToProps)(ModeToggle)
