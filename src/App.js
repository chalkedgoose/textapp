import React from 'react';
import { Editor, EditorState } from 'draft-js';
import { Grommet, grommet, Box, Heading, Text } from 'grommet';

function App() {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  return (
    <Grommet theme={grommet} >
      <Box direction="column" justify="center" align="center" >
        <Heading>
          Text Editor Example.
          </Heading>
        <Text>
          Messing around with React Hooks and Draft.js a WSGI tool
          from Facebook Open Source.
          </Text>
        <Editor editorState={editorState} onChange={setEditorState} />
      </Box>
    </Grommet>
  );
}

export default App;
