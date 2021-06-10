import React from 'react';
import SimpleEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-coy.css';

/* eslint-disable-next-line */
export interface EditorProps {}

export function Editor(props: EditorProps) {

  const [value, setValue] = React.useState<string>(`// Inset code here`);

  return (
    <SimpleEditor
      value={value}
      onValueChange={setValue}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        flex: 1,
      }}
    />
  );
}

export default Editor;
