import { AppBar, IconButton, Toolbar, Container} from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useRouter} from 'next/router'

export default function TopNav(props: any) {
	const router = useRouter()

	return (
		<>
			<AppBar sx={{background: 'transparent'}}>
				<Container disableGutters>
					<Toolbar sx={{ background: 'transparent' }}>
						{ router.pathname.split('/')[2] &&
                            <IconButton onClick={()=>router.back()}>
                            	<ArrowBackIosIcon/>
                            </IconButton>
						}
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar variant='dense' sx={{ background: 'transparent' }}/>
		</>
	)
}