import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // borderRadius: string;
        body: {
            fgColor: string;
            bgColor: string;
        },
        navigator : {
            a : string;
        },
        header : {},
        main : {},
        footer : {},
        button : {}
    }
}