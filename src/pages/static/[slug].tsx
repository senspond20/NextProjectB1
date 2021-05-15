import React from 'react'
import {GetStaticPaths, GetStaticProps, NextPageContext} from "next";
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import { join } from 'path'
import Layout from '@components/layouts';

type Props = {
    slug?: string
    content : string,
    meta : string
}

function PostTemplate({slug, meta, content} : Props) {
     const metaHeader = Object.entries(meta);
    return (
        <Layout>
            <h1>page : {slug}</h1>
            {metaHeader?.map((item, idx)=>(
                <div key= {idx}>
                    <span>{item[0]}</span> : 
                    <span>{item[1]}</span>
                </div>
            ))}
            <hr />
            <ReactMarkdown children={content}/>
        </Layout>
    )
}

/**
 * 추후 외부 config파일로 뺌
 */
const SSG_MARKDOWN_CONTENT_PATH_LIST = [
    'hello', 
    'test'
];

export const getStaticPaths : GetStaticPaths = async() => {
    let paths: { params: { slug: string; }; }[] = []

    const path = join(process.cwd(), 'ssg_content');
    console.log(path)
    const fs = require('fs');
    const list = await fs.readdirSync(path);

    list?.forEach((path: { toString: () => string; }) =>{
        
    
        if(path.toString().match('.md')){
            const p = path.toString().replace('\.md','');
            paths.push({ params : {slug : p}});
        }

   
    })

    // SSG_MARKDOWN_CONTENT_PATH_LIST?.forEach(path =>{
    //     paths.push({ params : {slug : path}});
    // })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps : GetStaticProps= async ({ params }) => {
    const slug  = params?.slug;
    let contents = '';
    try{
        const path = join(process.cwd(), 'ssg_content',`${slug}.md`)
        const fs = require('fs')
        if(fs.existsSync(path)) // 해당경로의 ${slug}.md 파일이 실제 존재하면 ?
            contents = await fs.readFileSync(path, 'utf8') // 가져오세요
    }catch(e){ }

    const { data, content } = matter(contents)
    console.log(data)
    return { 
        props : {
                slug: slug, 
                meta: data, 
                content : content
            }
    }
}

export default PostTemplate

/*
// 서버사이드에서 실행되버려서 로컬환경에서는 파일경로에 있어서 되지만 배포해서 올리면안된다
PostTemplate.getInitialProps   = async (context : NextPageContext) => {
    const { slug } = context.query
  
    // const realSlug = slug?.toString().replace(/\.md$/, '')
    let contents = '';
    try{
        
        const path = join(process.cwd(), 'ssg_content',`${slug}.md`)
        const fs = require('fs')
        fs.existsSync(path)
        contents = await fs.readFileSync(path, 'utf8')
    }catch(e){
        
    }
  
    // 정규표현식으로 헤더정보 추출하기
    const head = contents.match(/([\s\S]+?)(\-{3})/g);
    // console.log(head);

    const headmatcher = ["title","desc","date"];
    let regex =[];
    for(var i = 0 ; i<= headmatcher.length; i++){
    regex.push(new RegExp(`(${headmatcher[i]}.+):(.+?)`,'g'));
    }
    console.log('============================================================');
    const headlist = head?.toString()
                    .replace(regex[0],"")
                    .replace(regex[1],"")
                    .replace(regex[2],"")
                    .match(/[^\r\n\-{3}]+/g)
    console.log(headlist);
    

    // 라이브러리 이용.
    const { data, content } = matter(contents)
    console.log(data)
    return { slug: slug, meta: data, content : content}
}
*/
