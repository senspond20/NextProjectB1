import { AppProps } from 'next/app'
import { Fragment } from 'react'

// console.log(process.env.REACT_APP_SERVICE_VERSION)

function App({ Component, pageProps }: AppProps) {

  return(
        <Component {...pageProps} />
  )
}

export default App

