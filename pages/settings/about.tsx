import { Container, Grid, Typography, Box, CardContent, Card, Icon, Button, ListItemText, ListItemIcon, ListItem, List, Paper } from '@material-ui/core'
import React from 'react'
const platform = require('platform')
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
                        About
					</Typography>
                </Grid>
                <Grid item>
                    <List component={Paper} variant='outlined'>
                        <ListItem divider>
                            <ListItemText primary='App version' secondary={state.appVersion}/>
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary='Browser name' secondary={process.browser && window.navigator.userAgent} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='Platform' secondary={process.browser && window.navigator.platform} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}