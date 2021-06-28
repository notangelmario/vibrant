import { Avatar, Container, Grid, Typography, Box, CardContent, Card, TextField, ListItemText, ListItem, ListItemIcon, Dialog, DialogTitle, Button, InputAdornment } from '@material-ui/core'
import Image from 'next/image'
import React from 'react';
import GoogleSignInButton from '../components/GoogleSignInButton';
import InfoIcon from '@material-ui/icons/InfoOutlined'
import fb from '../config/fb'
import { ACTIONS, GlobalContext } from './_app';
import { useRouter } from 'next/router';

declare global {
    interface Window { 
        recaptchaVerifier: any; 
        recaptchaWidgetId: any;
        confirmationResult: any
    }
}

export default function SignIn() {
	const { state, dispatch } = React.useContext(GlobalContext)
	const router = useRouter()

	const signInGoogle = () => {
		var provider = new fb.auth.GoogleAuthProvider();

		dispatch({type: ACTIONS.SET_LOADING, payload: true})
		fb.auth().signInWithPopup(provider).then(()=>{
			router.replace('/')
			dispatch({ type: ACTIONS.SET_LOADING, payload: false })
		}).catch((err)=>{
			dispatch({ type: ACTIONS.SNACKBAR, payload: err.message })
			dispatch({ type: ACTIONS.SET_LOADING, payload: false })
		})
	}

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
                        Good job!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>
                        Vibrant is installed. You can now sign in using your Google Account.
					</Typography>
				</Grid>
				<Grid item>
					<GoogleSignInButton onClick={() => signInGoogle()}/>
				</Grid>
				<Grid item>
					<Card sx={{borderColor: theme=>theme.palette.info.main, backgroundColor: theme=>theme.palette.info.dark}}>
						<CardContent>
							<Typography>
								<InfoIcon fontSize='inherit'/>{' '}After you sign in, your account will be submited for review
								and verified for invitation. If your account passes the 
								verification process, you are going to be granted full access
								to the library.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}