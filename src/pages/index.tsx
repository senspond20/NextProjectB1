
import Image from 'next/image'
import React from 'react';
import Layouts from '@components/layouts';
import Link from 'next/link'
import dynamic from 'next/dynamic';
const CodeWithCodemirror = dynamic(import('../components/editor/Codemirror'), {ssr: false})
const text = `
// 자바스크립트 모드 
import React, { ReactNode, useEffect, useState, useCallback, useRef  } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { useCookies, withCookies } from 'react-cookie';
import { darkTheme, lightTheme , ThemeType} from '@components/layouts/styles'
import Link from 'next/link';

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

    const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        <ThemeProvider theme={themeStyle}>
            <GlobalStyle/>
            <Container>
                {/* ... */}
                <div><button onClick={ToggleTheme}>테마스위치</button></div>
            </Container>
        </ThemeProvider>
    )
}
export default withCookies(Layouts);
`

export default function Home() {
  return (
      <Layouts title={'Home'}>
          안녕하세요
          <div>오늘도 코딩을 해보세요</div>
          <hr />
          <CodeWithCodemirror value={text} />
      </Layouts>
  )
}
