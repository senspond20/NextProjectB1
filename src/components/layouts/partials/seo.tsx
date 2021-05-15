import Head from 'next/head'
import * as Path from "path";
import {GetStaticProps} from "next";

type Props ={
  title? : string
  description? : string
}

const SEO = (props : Props)=>(
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description"  content={props.description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)


export default SEO;

// export const getStaticProps : GetStaticProps= async () => {
//     console.log(Path.join(process.cwd(),'./config.json'))
//     // @ts-ignore
//     // const fs = require('fs');
//     // const siteData = await fs.readFileSync(Path.join(process.cwd(),'./config.json'))
//     const siteData = await  require('../../../../config.json')
//
//     console.log(siteData)
//     return {
//         props: {
//             title: siteData.default.title,
//             description: siteData.default.description,
//         },
//     };
// }