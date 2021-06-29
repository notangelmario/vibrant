import {IconButton, Slide, Snackbar} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React from 'react'
import { GlobalContext, ACTIONS } from '../pages/_app'
import CloseIcon from '@material-ui/icons/Close';

export default function Snacks() {
	const { state, dispatch } = React.useContext(GlobalContext)

	return (
		<Snackbar
			open={state.snackbar.open}
			message={state.snackbar.message}
			TransitionComponent={SlideTransition}
			autoHideDuration={5000}
			action={
				<IconButton size='small' color='inherit' onClick={() => dispatch({ type: ACTIONS.SNACKBAR, payload: false })}>
					<CloseIcon/>
				</IconButton>
			}
			onClose={()=>{dispatch({type: ACTIONS.SNACKBAR, payload: false})}}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		/>
	)
}

function SlideTransition(props: TransitionProps) {
	return <Slide {...props} direction="down" />;
}