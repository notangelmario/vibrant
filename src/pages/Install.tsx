import { Avatar, Container, Grid, Typography, Box, CardContent, Card, Icon, ButtonBase, CardActionArea, Fade, Grow, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { useAddToHomescreenPrompt } from '../hooks/useAdd2HS'

export default function Install() {
	const [prompt, promptToInstall] = useAddToHomescreenPrompt()
	const history = useHistory()

	React.useEffect(()=>{
		prompt?.userChoice.then((choice)=>{
			if (choice.outcome === 'accepted') history.replace('/signin')
		})
	}, [prompt?.userChoice])

	return (
		<Container>
			<Grid
				sx={{ padding: theme => `${theme.spacing(2)} 0` }}
				container
				direction='column'
				spacing={2}
			>
				<Grid item>
					<Typography variant='h2' sx={{ color: theme => theme.palette.primary.main }}>
                        Welcome to Vibrant!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>
                        Vibrant is a private music app bringing you the features that you miss from
                        other music players.
					</Typography>
				</Grid>
				<Grid item>
					<Button
						fullWidth 
						variant='contained'
						size='large'
						onClick={()=>promptToInstall()}
						disabled={!prompt}
					>
                        Install
					</Button>
				</Grid>
				{ !prompt && 
					<Grid item>
						<Typography variant='caption' color='ActiveCaption'>
							* Vibrant is not yet available on your device
						</Typography>
					</Grid>
				}
				<Grid item>
					<Card sx={{ backgroundColor: theme => theme.palette.error.main }}>
						<CardContent>
							<Typography>
								<Icon>warning</Icon>{" "}
                                    Vibrant is a private, invite-only platform. Making an account is
                                    possible, but accessing Vibrant&apos;s music library is not. Contacting
                                    is not advised as it is useless. If you are not invited, then you are
                                    most probably not wanted on the platform.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}