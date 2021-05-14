
import SEO from '@components/layouts/seo';
import React, { ReactNode, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useCookies } from 'react-cookie';
import GlobalStyle from '@components/layouts/styles/global';
import { darkTheme, lightTheme , ThemeType} from '@components/layouts/styles';

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
const Layouts = ({title, children} : Props) =>{
    /**
     * 테마 상태값
     */
    const [theme, setTheme] = useState(ThemeType.default);
    
    /**
     * 테마를 변경한다.
     */
    const ToggleTheme = () =>{
        (theme === ThemeType.dark) 
            ? setTheme(ThemeType.light) 
            : setTheme(ThemeType.dark)
      
    }
    console.log(theme)
    const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        <ThemeProvider theme={themeStyle}>
            <GlobalStyle/>
            <Container>
                <SEO title = {title || ''}/>
                <header>
                    <h1>header</h1>
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
    )
}

export default Layouts;