import { AppContext, AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie';
import { NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true);
  })
  const visibleStyle = {
    display: '',
    transition: 'display 3s',
  };
  const inVisibleStyle = {
    display: 'none',
    transition: 'display 3s',
  };
  return(
    <CookiesProvider>
       <span style={!isLoading ? inVisibleStyle : visibleStyle}>
       <Component {...pageProps} />
       </span>
      
    </CookiesProvider>
  )
}

// App.getInitialProps = async(ctx: NextPageContext) => {

//   const {req,res} = ctx;
//   console.log(req, res)
// }


export default App

