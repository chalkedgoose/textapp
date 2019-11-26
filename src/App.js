import React from 'react';
import { Editor, EditorState, ContentState, convertToRaw } from 'draft-js';
import Showdown from 'showdown';
import 'draft-js/dist/Draft.css';
import { Grommet, grommet, Box, Heading, Text, Button, FormField, TextInput } from 'grommet';

function App() {
  const converter = new Showdown.Converter();
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(ContentState.createFromText('### Hello this is an example editor')));

  const convertToUsable = () => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    return blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
  }

  return (
    <Grommet full theme={grommet} >
      <Box direction="column" justify="center" align="center" >
        <Heading>
          Custom Markdown Editor Example.
          </Heading>
        <Text>
          Messing around with React Hooks and Draft.js a WSGI tool
          from Facebook Open Source.
          </Text>
        <Box align="center" justify="center" pad="medium" fill="horizontal" className="editors-holder" >
          <Box className="leftside" >
            <Box margin="medium" border="all" width="large" height="medium" >
              <Editor editorState={editorState} onChange={setEditorState} />
            </Box>
          </Box>
          <Box className="rightside" >
            <Box margin="medium" border="all" width="large" height="medium" >
              <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(convertToUsable()) }} >
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
