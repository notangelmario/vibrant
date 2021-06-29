import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button, ListItemText, ListItemIcon, ListItem, List, Paper, Grow } from '@material-ui/core'
import React from 'react'
import { GlobalContext } from '../../App'

export default function AboutPage() {
	const { state, dispatch } = React.useContext(GlobalContext)

	return (
		<Container>
			<Grid
				container
				direction='column'
				spacing={2}
			>
				<Grid item>
					<Typography variant='h2' sx={{ color: theme => theme.palette.primary.main }}>
						About
					</Typography>
				</Grid>
				<Grid item>
					<List component={Paper} variant='outlined'>
						<ListItem divider>
							<ListItemText primary='App version' secondary={state.appVersion}/>
						</ListItem>
						<ListItem divider>
							<ListItemText primary='User Agent' secondary={window.navigator.userAgent} />
						</ListItem>
						<ListItem>
							<ListItemText primary='Platform' secondary={window.navigator.platform} />
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Container>
	)
}