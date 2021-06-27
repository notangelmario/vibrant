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
						Good job!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>
						Vibrant is now installed. You can now sign in.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	)
}
