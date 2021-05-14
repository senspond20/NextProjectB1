import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // borderRadius: string;
        body: {
            fgColor: string;
            bgColor: string;
        },
        header : {},
        main : {},
        footer : {},
        button : {}
    }
}