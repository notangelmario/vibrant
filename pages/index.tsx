import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button } from '@material-ui/core'
import React from 'react'
import {useRouter} from 'next/router'
import { GlobalContext } from './_app'
import fb from '../config/fb'


export default function Home() {
	const {state, dispatch} = React.useContext(GlobalContext)
	
	return (
		<Container>
			<Grid
				sx={{padding: theme => `${theme.spacing(2)} 0`}}
				container
				direction='column'
				spacing={2}
			>
				<Grid item>
					<Typography variant='h2' sx={{color: theme=>theme.palette.primary.main}}>
						Good job!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>
						Vibrant is now installed. You can now sign in.
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant='contained'
						color='error'
						onClick={()=>fb.auth().signOut()}
					>
						Sign out
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}
