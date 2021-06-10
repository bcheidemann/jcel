import React, { useEffect } from 'react';
import { Editor, Sheet } from '@jcel/ui';

export function App() {
  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex' }}>
      <Sheet />
      <div style={{ width: 500, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <Editor />
        <button>Save</button>
      </div>
    </div>
  );
}

export default App;
