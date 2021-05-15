---
title: 안녕하십니까? 여러분
date: 2021/05/11
desc : 테스트 글
---


# Hello World !

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
}
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
권한인증
https://jeonghwan-kim.github.io/dev/2020/03/20/role-based-react-router.html