import { Avatar, Container, Grid, Typography, Box, CardContent, Card, Icon } from '@material-ui/core'
import Image from 'next/image'

export default function Home() {
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
						Welcome to Vibrant!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>
						Vibrant is a music app bringing you the features that you miss from
						other music players.
					</Typography>
				</Grid>				
				<Grid item>
					<Typography>
						Vibrant at the moment is under construction. We are working 
						hard to make Vibrant available as soon as possible.
					</Typography>
				</Grid>
				<Grid item>
					<Card sx={{backgroundColor: theme => theme.palette.info.main}}>
						<CardContent>
							<Icon fontSize='medium'>info</Icon>{" "}
							While the app is under development, you can try it anyways.
							Remember that the Vibrant is under heavy development and is not
							stable at all. Vibrant is not really reliable at the current state.
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}
