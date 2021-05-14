
import React, { ReactNode, useEffect, useState, useCallback, useRef  } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useCookies, withCookies } from 'react-cookie';
import SEO from './seo';
import GlobalStyle from '@components/layouts/styles/global';
import { darkTheme, lightTheme , ThemeType} from '@components/layouts/styles';
import Link from 'next/link';

/**
 * 스타일링 코드
 */
const Container = styled.div`
  .navigator{
        display:flex; 
        padding-bottom:10px;
        margin-bottom:10px;
        border-bottom: 1px solid ${({theme}) => theme.navigator.a};;
        div{
            margin: 0 15px;
            a{
                color : ${({theme}) => theme.navigator.a};
                cursor: pointer;
            }
        }
        
    }

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
    // 초기 테마값은 쿠키에 값이 있는지 체크하고 없으면 디폴트 테마로 (OR연산 단축평가)
    const initTheme = cookies.theme || ThemeType.default  
    const [theme, setTheme] = useState(initTheme);

    /**
     * theme 상태가 변경되면 쿠키도 변경
     */
    useEffect(() => {
        console.log(cookies.theme)
        setCookie('theme', theme)
     }, [theme]);

    /**
     * theme 상태를 변경한다.
     */
    const ToggleTheme = useCallback(
        () =>{
        (theme === ThemeType.dark) 
            ?    setTheme(ThemeType.light)
            :    setTheme(ThemeType.dark)
    }, [theme] )

    // theme 상태값에 따른 테마 스타일을 get
    const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        // <CookiesProvider cookies ={cookies.theme}>
        <ThemeProvider theme={themeStyle}>
            <GlobalStyle/>
            <Container>
                <SEO title = {title || ''}/>
                <header>
                    <h1>header</h1>
                    <div className={"navigator"}>
                        <div><Link href='/'><a>Home</a></Link></div>
                        <div><Link href='/test'><a>Test</a></Link></div>
                        <div><button onClick={ToggleTheme}>테마스위치</button></div>
                    </div>
                    {/* <input type='text' ref={theme} /> */}
                    <div >현재 테마 : <span style={{color:'red'}}>{theme}</span></div>
                   
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


