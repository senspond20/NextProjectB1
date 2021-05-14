import React, { useState } from 'react';
import { darkTheme, lightTheme , ThemeType} from '@components/layouts/styles';
import { useCookies } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
const ThemeChanger = () =>{
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
    return (
        <div>
             <div>현재 테마 : {theme}</div>
            <button onClick={ToggleTheme}>테마스위치</button>

        </div>

    )   
}
export default ThemeChanger;