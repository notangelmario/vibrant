import { Avatar, Container, Grid } from '@material-ui/core'
import styles from '../styles/LoadingScreen.module.css'
import Image from 'next/image'
import React from 'react'


export default function LoadingScreen() {
    return (
        <Container sx={{backgroundColor: theme => theme.palette.secondary.main}}>
            <Grid
                container
                sx={{height: '100vh'}}
                alignItems='center'
                justifyContent='center'
                alignContent='center'
                textAlign='center'
            >
                <Avatar 
                    className={styles.avatar}
                    src='/android-chrome-256x256.png'
                    sx={{ width: theme => theme.spacing(20), height: theme => theme.spacing(20)}}
                />
            </Grid>
        </Container>
    )
}