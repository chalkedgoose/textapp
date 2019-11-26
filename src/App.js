import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Grommet, grommet, Box, Heading, Text } from 'grommet';

function App() {
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(ContentState.createFromText('Hello this is an example editor')));
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
        <Box margin="medium" border="all" width="large" height="medium" >
          <Editor editorState={editorState} onChange={setEditorState}  plugins={[hashtagPlugin]} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
