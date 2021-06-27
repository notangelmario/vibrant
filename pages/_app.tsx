import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Shadows } from '@material-ui/core/styles/shadows';
import { CssBaseline } from '@material-ui/core';
import { usePWAInstalled } from '../hooks/usePWAInstalled';
import { useRouter } from 'next/router'
import React from 'react';


const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#61c9a8'},
		secondary: { main: '#48acf0' }
	},
	shape: {
		borderRadius: 20
	},
	shadows: Array(25).fill("none") as Shadows,
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md'
			}
		},
		MuiCard: {
			defaultProps: {
				variant: 'outlined'
			}
		}
	}
});

function Vibrant({ Component, pageProps }: AppProps) {
	const pwaInstalled = usePWAInstalled()
	const router = useRouter()

	React.useMemo(()=>{
		if (process.browser) {
			if (!pwaInstalled && router.pathname !== '/install') router.push('/install')
		}
	}, [])

	return (
    	<>
        	<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#48acf0"/>
				<meta name="apple-mobile-web-app-title" content="Vibrant"/>
				<meta name="application-name" content="Vibrant"/>
				<meta name="msapplication-TileColor" content="#48acf0"/>
				<meta name="theme-color" content="#48acf0"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        	</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
        		<Component {...pageProps} />
			</ThemeProvider>
    	</>
	)
}

export default Vibrant