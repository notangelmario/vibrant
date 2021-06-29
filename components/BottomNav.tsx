import React from "react";
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import { useRouter } from "next/router";



export default function BottomNav() {
	const router = useRouter()

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
				value={router.pathname.split('/')[1]}
				onChange={(event, newValue) => {
					router.push('/' + newValue)
				}}
			>
				<BottomNavigationAction value='' label='Home' icon={<HomeIcon />} />
				<BottomNavigationAction value='settings' label='Settings' icon={<SettingsIcon />} />
			</BottomNavigation>
		</AppBar>
	)
}