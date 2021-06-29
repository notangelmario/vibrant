import React from "react";
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import { useHistory, useLocation } from "react-router-dom";



export default function BottomNav() {
	const history = useHistory()
	const location = useLocation()

	return (
		<AppBar 
			position='fixed'
			color='primary'
			sx={{
				top: 'auto',
				bottom: 0
			}}
		>
			<BottomNavigation
				value={location.pathname.split('/')[1]}
				onChange={(event, newValue) => {
					history.push('/' + newValue)
				}}
			>
				<BottomNavigationAction value='' label='Home' icon={<HomeIcon />} />
				<BottomNavigationAction value='settings' label='Settings' icon={<SettingsIcon />} />
			</BottomNavigation>
		</AppBar>
	)
}