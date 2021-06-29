import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button, ListItemText, ListItemIcon, ListItem, List, Paper, ListItemButton, Grow, Avatar } from '@material-ui/core'
import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { GlobalContext } from '../../App'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import fb from '../../config/fb'

import AboutPage from './About'

export default function SettingsPage() {
	const { path } = useRouteMatch()

	return (
		<Switch>
			<Route exact path={`${path}`} component={Main} />
			<Route path={`${path}/about`} component={AboutPage} />
		</Switch>
	)
}

function Main() {
	const { path, url } = useRouteMatch()

	return (
		<Container>
			<Grid
				container
				direction='column'
				spacing={2}
			>
				<Grid
					item
					container
					alignContent='center'
					alignItems='center'
					justifyContent='left'
					spacing={2}
					direction='row'
				>
					<Grid item>
						<Avatar
							src={fb.auth().currentUser?.photoURL as string}
							sx={{ 
								width: theme => theme.spacing(10), 
								height: theme => theme.spacing(10),
							}}
						/>
					</Grid>
					<Grid item>
						<Typography variant='h3' sx={{ color: theme => theme.palette.primary.main }}>
							{fb.auth().currentUser?.displayName}
						</Typography>
					</Grid>
				</Grid>
				<Grid item>
					<List component={Paper} variant='outlined'>
						{/* TODO: Add account settings */}
						<ListItemButton component={Link} to={`${url}/about`}>
							<ListItemIcon>
								<InfoIcon />
							</ListItemIcon>
							<ListItemText primary='About' secondary='Lots of info'/>
						</ListItemButton>
					</List>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='error'
						fullWidth
						onClick={() => fb.auth().signOut()}
					>
						Sign out
							</Button>
				</Grid>
			</Grid>
		</Container>
	)
}