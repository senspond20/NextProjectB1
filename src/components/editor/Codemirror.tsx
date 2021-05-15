import React, { Component } from 'react'
// import {IUnControlledCodeMirror, UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror, { IReactCodemirror } from '@uiw/react-codemirror';
// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';

// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/lib/codemirror.css'

// import 'codemirror/theme/default.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/theme/base16-dark.css'
// import 'codemirror/theme/ayu-dark.css'
// import 'codemirror/theme/monokai.css';
// import 'codemirror/keymap/sublime';
// const theme = 'monokai'; // material


const CodeView = (props: 
    JSX.IntrinsicAttributes 
    & JSX.IntrinsicClassAttributes<CodeMirror> 
    & Pick<Readonly<IReactCodemirror> 
    & Readonly<{ children?: React.ReactNode; }>, "children"> 
    & Partial<Pick<Readonly<IReactCodemirror> 
    & Readonly<{ children?: React.ReactNode; }>, 
    keyof IReactCodemirror>> & Partial<Pick<IReactCodemirror, never>>) => {
    return(
        <div>
        <CodeMirror
        {...props}
        value={props.value}
        options={{
            theme: 'default', 
            mode: 'jsx',
            tabSize: 3,
            keyMap: 'sublime',
            lineNumbers : true,
            autoCursor : true,
          }}
        onChange={() => null } 
      />
      </div>
    )
}
 
export default CodeView;