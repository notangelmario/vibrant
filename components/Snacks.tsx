import {Snackbar} from '@material-ui/core'
import React from 'react'
import { GlobalContext, ACTIONS } from '../pages/_app'

export default function Snacks() {
	const { state, dispatch } = React.useContext(GlobalContext)

	return (
		<Snackbar
			open={state.snackbar.open}
			message={state.snackbar.message}
			autoHideDuration={3000}
			onClose={()=>{dispatch({type: ACTIONS.SNACKBAR, payload: false})}}
			anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
		/>
	)
}