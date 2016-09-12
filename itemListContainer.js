import {connect} from 'react-redux'
import ItemList from './itemList.js'

const mapStateToProps = (state) => ({
    items: state.get('items')
  , active: state.get('active')
})

export default connect(mapStateToProps)(ItemList)
