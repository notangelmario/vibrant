import { AppBar, IconButton, Toolbar, Container} from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useLocation } from 'react-router-dom'

export default function TopNav(props: any) {
	const history = useHistory()
	const location = useLocation()

	return (
		<>
			<AppBar sx={{background: 'transparent'}}>
				<Container disableGutters>
					<Toolbar sx={{ background: 'transparent' }}>
						{ location.pathname.split('/')[2] &&
							<IconButton onClick={() => history.goBack()}>
                            	<ArrowBackIosIcon/>
                            </IconButton>
						}
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar variant='dense' sx={{ background: 'transparent' }}/>
		</>
	)
}