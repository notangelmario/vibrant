import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Shadows } from '@material-ui/core/styles/shadows';
import { CssBaseline, Fade } from '@material-ui/core';
import { usePWAInstalled } from './hooks/usePWAInstalled';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import React from 'react';
import Snacks from './components/Snacks';
import fb from './config/fb';
import { useAddToHomescreenPrompt } from './hooks/useAdd2HS';
import LoadingScreen from './components/LoadingScreen';
import TopNav from './components/TopNav';

import HomePage from './pages/Home'
import SignInPage from './pages/SignIn';
import SettingsPage from './pages/Settings'
import InstallPage from './pages/Install'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#61c9a8' },
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
  _SET_USER: '_set_user',
  SET_LOADING: 'set_loading'
}

function reducer(state: any, action: any) {
  switch (action.type) {
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
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
  }
}

const initialState = {
  snackbar: {
    open: false,
    message: ''
  },
  user: null,
  loading: true,
  appVersion: 'v0.2.0'
}

export const GlobalContext = React.createContext({} as any)

export default function Vibrant() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const pwaInstalled = usePWAInstalled()
  const [] = useAddToHomescreenPrompt()
  const history = useHistory()
  const location = useLocation()
  const [pageReady, setPageReady] = React.useState(true)


  React.useMemo(() => {
    if (!pwaInstalled && location.pathname !== '/install') history.replace('/install')
    if (pwaInstalled && location.pathname === '/install') history.replace('/')

    fb.auth().onAuthStateChanged((user: any) => {
      if (user) {
        dispatch({ type: ACTIONS._SET_USER, payload: user })
      } else {
        if (pwaInstalled) history.replace('/signin')
        dispatch({ type: ACTIONS._SET_USER, payload: null })
      }
      dispatch({ type: ACTIONS.SET_LOADING, payload: false })
    })

  }, [])

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingScreen on={state.loading} />
        <TopNav />
        <Switch>
          <Route component={HomePage} exact path='/' />
          <Route component={SettingsPage} path='/settings'/>
          <Route component={SignInPage} path='/signin' />
          <Route component={InstallPage} path='/install' />
        </Switch>
        <Snacks />
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}