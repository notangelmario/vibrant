import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button, ListItemText, ListItemIcon, ListItem, List, Paper, ListItemButton } from '@material-ui/core'
import React from 'react'
import NextLink from 'next/link'
import { GlobalContext } from '../_app'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import fb from '../../config/fb'

export default function Settings() {
    const { state, dispatch } = React.useContext(GlobalContext)

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
                        Settings
					</Typography>
                </Grid>
                <Grid item>
                    <List component={Paper} variant='outlined'>
                        {/* TODO: Add account settings */}
                        <NextLink href='/settings/about'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon/>
                                </ListItemIcon>
                                <ListItemText primary='About'/>
                            </ListItemButton>
                        </NextLink>
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
