import { 
	GET_MENU,
	GET_MENU_FULFILLED,
	GET_MENU_FAILED,
	NAV_RESET, 
	TAB_CHANGED,
} from './MenuConstants'

import InitialState from './MenuInitial'
const initialState = new InitialState()

export default function menuState(state = initialState, action) {
	switch (action.type) {
	
		case GET_MENU: {
			return nextState = state.set('fetching', true)
		}
		
		case GET_MENU_FULFILLED: {
			return state.set('fetching', false)
						.set('routes', routes)
		} 

		case TAB_CHANGED:
			return state.set('currentTab', action.tabKey)
		case NAV_RESET:
			return state.set('index', action.index)
						.set('routes', action.routes)
						
		default:
			return state
	}
}
