import React, { Component } from 'react'
import {IUnControlledCodeMirror, UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

export default (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<CodeMirror> & Readonly<IUnControlledCodeMirror> & Readonly<{ children?: React.ReactNode }>) => (
  <div>
    <CodeMirror
      {...props}
      value={props.value}
      options={{
          theme: 'material', 
          mode: 'javascript', 
          lineNumbers : true,
          autoCursor : true,
        
        }}
      onChange={() => null} 
    />
  </div>
)