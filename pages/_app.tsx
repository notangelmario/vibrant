import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

function Vibrant({ Component, pageProps }: AppProps) {
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
        	</Head>
        	<Component {...pageProps} />
    	</>
	)
}

export default Vibrant