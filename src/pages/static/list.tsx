import Layout from '@components/layouts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { join } from 'path';
import React from 'react';
import styled from 'styled-components';

type Props = {
    data : Item[]
}
type Item = {
    id : string
    title : string
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select:none;
  font-size: 1.5em;
  ul > li {
    max-width: 450px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
    background-color: #ededed;
    border-radius: 4px;
    border-bottom: 1px solid #eee;
  }

  ul > li:hover {
    background-color: #9dc9f3;
  }
`
type List = {
    list : String[]
}
function rdx(o:any){
    return o.toString().replace("\.md","");
}
function listFilter(list : Array<String>){
    const rList = list.filter((item =>{
        return item.match('\.md');
    }));
    return rList;
}
const SSGContentList = ({list} : List) =>{
    const rList = listFilter(list);
    console.log(rList)

    return(
        <Layout>
            <Container>
            <h1>MarkDown SSG Contents</h1>
            <ul>
                {rList.map((item,idx)=>(
                    <Link href={rdx(item)}><li key={idx}>{rdx(item)}</li></Link>
                ))}
            </ul>
            </Container>
        </Layout>
    )

}
export const getStaticProps : GetStaticProps= async ({ params }) => {
    console.log(params)
    
    try {
        const path = join(process.cwd(), 'ssg_content');
        console.log(path)
        const fs = require('fs');
        const list = await fs.readdirSync(path);
   
        return { props: { list } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
export default SSGContentList;