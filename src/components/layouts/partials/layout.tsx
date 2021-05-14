
import React, { ReactNode, useEffect, useState, useCallback, useRef  } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Cookies, CookiesProvider, useCookies, withCookies } from 'react-cookie';
// import cookie from 'react-cookies'
import SEO from './seo';
import GlobalStyle from '@components/layouts/styles/global';
import { darkTheme, lightTheme , ThemeType} from '@components/layouts/styles';
// import { NextPageContext } from 'next';
// import cookies from 'next-cookies';


import cookieCutter from 'cookie-cutter'
import { NextPageContext } from 'next';
/**
 * 스타일링 코드
 */
const Container = styled.div`

`;

type Props = {
    children?: ReactNode
    title?: string
};

/**
 * 레이아웃 
 * @param Props 
 * @returns 
 */
function Layouts ({title, children} : Props){
    /**
     * 테마 상태값
     */
    const [cookies,setCookie, removeCookie] = useCookies(['theme']);
    const initTheme = cookies.theme || ThemeType.default 
    const [theme, setTheme] = useState(initTheme);

    useEffect(() => {
        console.log(cookies.theme)
        setCookie('theme', theme)
     }, [theme]);

    /**
     * 테마를 변경한다.
     */
    const ToggleTheme = useCallback(
        () =>{
        (theme === ThemeType.dark) 
            ?    setTheme(ThemeType.light)
            :    setTheme(ThemeType.dark)
    }, [theme] )

    // const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        // <CookiesProvider cookies ={cookies.theme}>
        <ThemeProvider theme={theme === ThemeType.dark ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <Container>
                <SEO title = {title || ''}/>
                <header>
                    <h1>header</h1>
                    {/* <input type='text' ref={theme} /> */}
                    <div>현재 테마 : {theme}</div>
                    <button onClick={ToggleTheme}>테마스위치</button>
                </header>
                <section>
                    <main>
                        {children}
                    </main>
                </section>
                <footer>
                    <h2>Footer</h2>
                </footer>
            </Container>
        </ThemeProvider>
        // </CookiesProvider>
    )
}


export default withCookies(Layouts);


