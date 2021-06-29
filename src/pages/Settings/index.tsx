import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button, ListItemText, ListItemIcon, ListItem, List, Paper, ListItemButton, Grow } from '@material-ui/core'
import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { GlobalContext } from '../../App'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import fb from '../../config/fb'

import AboutPage from './About'

export default function SettingsPage() {
	const { state, dispatch } = React.useContext(GlobalContext)
	const { path, url } = useRouteMatch()

	return (
		<>
			<Route exact path={path}>
				<Container>
					<Grid
						sx={{ padding: theme => `${theme.spacing(2)} 0` }}
						container
						direction='column'
						spacing={2}
					>
						<Grid item>
							<Typography variant='h2' sx={{ color: theme => theme.palette.primary.main }}>
								Settings
					</Typography>
						</Grid>
						<Grid item>
							<List component={Paper} variant='outlined'>
								{/* TODO: Add account settings */}
								<ListItemButton component={Link} to={`${url}/about`}>
									<ListItemIcon>
										<InfoIcon />
									</ListItemIcon>
									<ListItemText primary='About' />
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
			</Route>
			<Route path={`${path}/about`} component={AboutPage}/>
		</>
	)
}
