import { AppContext, AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie';
import { NextPageContext } from 'next';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return(
    <CookiesProvider>
        <Component {...pageProps} />
    </CookiesProvider>
  )
}

// App.getInitialProps = async(ctx: NextPageContext) => {

//   const {req,res} = ctx;
//   console.log(req, res)
// }


export default App

