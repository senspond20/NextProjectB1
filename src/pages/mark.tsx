import Layout from "@components/layouts";
import React from "react"; 
import ReactMarkdown from "react-markdown"; 
// import content from "../../ssg_content/test.md";

// @ts-ignore
import content from "@contents/test.md";
const Mark = () => { 
    return ( 
    <Layout> 
        <ReactMarkdown children={content}/>
    </Layout> ) 
};
export default Mark;