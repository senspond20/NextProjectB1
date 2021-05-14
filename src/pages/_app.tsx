import { AppContext, AppProps } from 'next/app'
import { Fragment } from 'react'
import { Cookies, CookiesProvider, useCookies } from 'react-cookie';
import cookieCutter from 'cookie-cutter'
// console.log(process.env.REACT_APP_SERVICE_VERSION)
//] import Cookies from "next-cookies";
// import nookies from 'nookies'
import { NextPageContext } from 'next';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return(
    <CookiesProvider>
        <Component {...pageProps} />
    </CookiesProvider>
  )
}

App.getInitialProps = async(ctx: NextPageContext) => {

  const {req,res} = ctx;

  let theme : string = '';
  console.log(req, res)
  if(req !== null && req !== undefined) {
    const cookies = new Cookies(ctx);
    theme = cookies.get('theme');
    console.log('서버에서 실행됬습니다.')
    console.log('SSR get Cookies Theme', theme)
  }else{
    console.log('클라이언트에서 실행됬습니다.')

  }
  return { theme }

}

// export async function getServerSideProps(ctx : any) {
//   const cookies = nookies.get(ctx)
//   console.log('II', cookies)
//   return { cookies }
// }
export default App

