import { AppBar, IconButton, Toolbar, Container, Avatar } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useLocation, Link } from 'react-router-dom'
import fb from '../config/fb'

export default function TopNav(props: any) {
	const history = useHistory()
	const location = useLocation()

	return (
		<>
			<AppBar sx={{background: 'transparent'}}>
				<Container disableGutters>
					<Toolbar sx={{ background: 'transparent' }}>
						{ location.pathname !== '/' &&
							<IconButton component={Link} to={`/${location.pathname.split('/')[location.pathname.split('/').length - 2]}`} edge='start'>
                            	<ArrowBackIosIcon/>
                            </IconButton>
						}
						<div style={{width: '100%'}}></div>
						{ location.pathname.split('/')[1] !== 'settings' && 
							<IconButton component={Link} to='/settings' edge='end'>
							<Avatar 
								src={fb.auth().currentUser?.photoURL as string} 
							/>
							</IconButton>
						}
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar sx={{ background: 'transparent' }}/>
		</>
	)
}