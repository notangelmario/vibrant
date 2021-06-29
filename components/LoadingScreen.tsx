import { Avatar, Box, Container, Dialog, Fade, Grid, Modal, Slide } from '@material-ui/core'
import styles from '../styles/LoadingScreen.module.css'
import React from 'react'


export default function LoadingScreen(props: any) {
	const { on } = props

	return (
		<Modal
			open={on}
			BackdropComponent={()=>(
				<Box sx={{
					backgroundColor: theme=>theme.palette.background.paper,
					width: '100vw',
					height: '100vh',
					position: 'absolute'
				}}/>
			)}
		>
			<Fade in={on} appear={false}>
				<Container>
					<Grid
						container
						sx={{height: '100vh', zIndex: 999}}
						alignItems='center'
						justifyContent='center'
						alignContent='center'
						textAlign='center'
					>
						<Avatar 
							className={styles.avatar}
							src='/assets/icon-silhouette-white.png'
							sx={{ width: theme => theme.spacing(20), height: theme => theme.spacing(20)}}
						/>
					</Grid>
				</Container>
			</Fade>
		</Modal>
	)
}