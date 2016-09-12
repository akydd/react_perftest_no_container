import Immutable from 'immutable'

let listItems = Array.from(new Array(5000), (val, index) => {
    return {
        text: 'test'
      , number: index
    }
})

let initialState = Immutable.fromJS({
	items: Immutable.List(listItems)
  , active: false
})

export default function reducer(state = initialState, action) {
	switch (action.type) {
        case 'toggle': {
            let currentState = state.get('active')
            return state.set('active', !currentState)
        }
		default: {
			return state
		}
	}
}
