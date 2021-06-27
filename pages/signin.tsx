import { Avatar, Container, Grid, Typography, Box, CardContent, Card, Icon, TextField, ListItemText, ListItem, ListItemIcon, Dialog, DialogTitle, Button, InputAdornment } from '@material-ui/core'
import Image from 'next/image'
import React from 'react';
import fb from '../config/fb'
import { ACTIONS, GlobalContext } from './_app';

declare global {
    interface Window { 
        recaptchaVerifier: any; 
        recaptchaWidgetId: any;
        confirmationResult: any
    }
}

export default function SignIn() {
    const [verification, setVerification] = React.useState(false)
    const phoneNumber = React.useRef('')
    const { state, dispatch } = React.useContext(GlobalContext)

    // TODO: scrap this fucking mess
    const setupRecaptcha = () => {
        window.recaptchaVerifier = new fb.auth.RecaptchaVerifier('recaptcha', {
            size: 'invisible',
            callback: function () {
            }
        });
    }

    const sendVerifyCode = (phoneNumber: string) => {
        setupRecaptcha()
        fb.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setVerification(true)
        }).catch((err) => {
            dispatch({ type: ACTIONS.SNACKBAR, payload: err.message })
            window.recaptchaVerifier.reset()
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
                        Vibrant is installed. You can now sign in using your phone number.
					</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={(e) => {
                        e.preventDefault(); 
                        sendVerifyCode(phoneNumber.current)
                    }}>
                        <div id="recaptcha"></div>
                        <TextField
                            variant='outlined'
                            fullWidth
                            label='Phone number'
                            color='secondary'
                            type='tel'
                            onChange={(e)=>phoneNumber.current = e.target.value}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Button 
                                        type='submit'
                                        variant='contained'
                                    >
                                        Send
                                    </Button>
                                </InputAdornment>
                            }}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom sx={{
                                verticalAlign: 'middle',
                                display: 'inline-flex'
                            }}>
                                <Icon sx={{marginRight: theme => theme.spacing(1)}}>info</Icon>{' '}
                                Why my phone number?
                            </Typography>
                            <Typography>
                                Your phone number is required to prevent fake account creation
                                as much as possible. It is also required to identify you and to make
                                sure you don't lose your account.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <VerificationPrompt verify={verification} setVerify={setVerification}/>
        </Container>
    )
}

function VerificationPrompt(props: any) {
    const{verify, setVerify} = props

    return (
        <Dialog 
            open={verify} 
            onClose={()=>setVerify(false)}
            fullWidth
            maxWidth='md'
        >
            <DialogTitle>Verification</DialogTitle>
        </Dialog>
    )
}