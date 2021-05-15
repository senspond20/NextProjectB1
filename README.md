# NextProjectB1

1. 테마 변경-

- 테마 상태값을 쿠키에 저장해 새로고침해도 반영되게 한다

2. MarkDown 으로 작성한 글을 html으로 정적 사이트 생성한다.
   

## 테마

```js
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // borderRadius: string;
        body: {
            fgColor: string;
            bgColor: string;
        },
        navigator : {
            a_color : string;
        },
        header : {},
        main : {},
        footer : {},
        button : {}
    }
}
```

디폴트 테마를 작성하고 상속받아서 테마들을 구현

+ 다크 테마
  
```js
import { DefaultTheme } from 'styled-components';

export const darkTheme : DefaultTheme ={
    body: {
        fgColor: '#fefefe',
        bgColor: '#333',
    },
    navigator : {
        a_color : 'yellow', 
    },
    header : {},
    main : {},
    footer : {},
    button : {}
}
```

+ 화이트 테마 

```js
import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const lightTheme : DefaultTheme ={
    body: {
        fgColor: '#333',
        bgColor: '#fefefe',
    },
    navigator : {
        a_color : 'blue' 
    },
    header : {},
    main : {},
    footer : {},
    button : {}
}
```

```js
import common from './common'
import {lightTheme} from './theme/lightTheme'
import {darkTheme} from './theme/darkTheme'

const ThemeType = {
    dark : 'dark',
    light : 'light',
    default : 'light'
}

export {
    ThemeType,
    common,
    darkTheme,
    lightTheme,
}
```

+ Layout 컴포넌트


```js


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
```

## 마크다운

```
npm install --save raw-loader
npm install --save react-markdown
```

+ next.config.js

```js
webpack: (config, options) => {
// Fixes npm packages that depend on `fs` module
    config.module.rules.push(
        {
            test : /\.md$/,
            use : "raw-loader"
        }
    )
    return config;
},
```

+ pages/mark.tsx

```js
import Layout from "@components/layouts";
import React from "react"; 
import ReactMarkdown from "react-markdown"; 
// import content from "../../ssg_content/test.md"; 
import content from "@contents/test.md"; 
const Mark = () => { 
    return ( 
    <Layout> 
        <ReactMarkdown children={content}/> 
    </Layout> ) 
};
export default Mark;
```