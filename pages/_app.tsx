import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Shadows } from '@material-ui/core/styles/shadows';
import { CssBaseline, Fade } from '@material-ui/core';
import { usePWAInstalled } from '../hooks/usePWAInstalled';
import { useRouter } from 'next/router'
import React from 'react';
import Snacks from '../components/Snacks';
import fb from '../config/fb';
import { useAddToHomescreenPrompt } from '../hooks/useAdd2HS';
import LoadingScreen from '../components/LoadingScreen';


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
		},
		MuiIcon: {
			defaultProps: {
				baseClassName: 'material-icons-outlined',
			},
		},

	}
});

export const ACTIONS = {
	SNACKBAR: 'snackbar',
	_SET_USER: '_set_user'
}

function reducer(state: any, action: any) {
	switch(action.type) {
	case ACTIONS.SNACKBAR:
		return {
			...state, 
			snackbar: {
				open: !!action.payload,
				message: action.payload ? action.payload : state.snackbar.message
			}
		}
	case ACTIONS._SET_USER:
		return {
			...state,
			user: action.payload
		}
	}
}

const initialState = {
	snackbar: {
		open: false,
		message: ''	
	},
	user: null
}

export const GlobalContext = React.createContext({} as any)

function Vibrant({ Component, pageProps }: AppProps) {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const pwaInstalled = usePWAInstalled()
	const [ready, setReady] = React.useState(false)
	const [] = useAddToHomescreenPrompt()
	const router = useRouter()

	React.useMemo(()=>{
		if (process.browser) {
			if (!pwaInstalled && router.pathname !== '/install') router.replace('/install')
			if (pwaInstalled && router.pathname === '/install') router.replace('/')
		}

		fb.auth().onAuthStateChanged((user)=>{
			if (user) {
				dispatch({type: ACTIONS._SET_USER, payload: user})
			} else {
				dispatch({ type: ACTIONS._SET_USER, payload: {} })
				if (pwaInstalled) router.replace('/signin')
			}
			setReady(true)
		})

	}, [])

	return (
    	<GlobalContext.Provider value={{state, dispatch}}>
        	<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/manifest.json"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#48acf0"/>
				<meta name="apple-mobile-web-app-title" content="Vibrant"/>
				<meta name="application-name" content="Vibrant"/>
				<title>Vibrant</title>
				<meta name="msapplication-TileColor" content="#48acf0"/>
				<meta name="theme-color" content="#48acf0"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        	</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<LoadingScreen on={!ready}/>
				<Component {...pageProps} />
				<Snacks/>
			</ThemeProvider>
    	</GlobalContext.Provider>
	)
}

export default Vibrant