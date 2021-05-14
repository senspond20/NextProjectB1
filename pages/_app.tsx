import { AppProps } from 'next/app'
import '@public/css/globals.css'

function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV)
  console.log(process.env.REACT_APP_SERVICE_VERSION)
  return <Component {...pageProps} />
}

export default App