import { 
	GET_MENU,
	GET_MENU_FULFILLED,
	GET_MENU_FAILED,
	NAV_RESET, 
	TAB_CHANGED,
} from './MenuConstants'

export function getMenu() {
	return dispatch => {
		dispatch({ type: GET_MENU, })

		

		dispatch({ type: GET_MENU_FULFILLED, payload})
	}
}