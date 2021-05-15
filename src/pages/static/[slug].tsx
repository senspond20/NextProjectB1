import React from 'react'
import {NextPageContext} from "next";
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import { join } from 'path'

type Props = {
    slug?: string
    content : string,
    meta : string
}

function PostTemplate({slug, meta, content} : Props) {
     const metaHeader = Object.entries(meta);
    return (
        <div>
            {/* {meta} */}
            {metaHeader?.map((item, idx)=>(
                <div key= {idx}>
                    <span>{item[0]}</span> : 
                    <span>{item[1]}</span>
                </div>
            ))}
            <hr />
            <ReactMarkdown children={content}/>
        </div>
    )
}

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
   /* const head = contents.match(/([\s\S]+?)(\-{3})/g);
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
    */

    // 라이브러리 이용.
    const { data, content } = matter(contents)
    console.log(data)
    return { slug: slug, meta: data, content : content}
}

export default PostTemplate