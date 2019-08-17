import React from 'react';
import Navigation from "./navigation/Navigation";
import './App.css';
import { EditorState } from 'draft-js';
import DraftEditor from './editor/Editor';
// import { Editor } from '@tinymce/tinymce-react';

import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

class App extends React.Component {

state = {
    selectedFile: null,
     editorState: EditorState.createEmpty(),
}
  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,

    });
  }


    render() {
        return (
            <div className="App">
                <Navigation/>
                <div className='container blog'>
                    <div className='blog-col'>
                        <h3>Emptiness of the Self</h3>
                        <p>
                            The Buddha gave Rahula the teaching on the emptiness of the self in detail. He said,
                            “Rahula, among the five skandhas —body, feelings, perceptions, mental formations, and
                            consciousness—there is nothing that can be considered to be permanent and nothing that can
                            be called a ‘self.’

                            This body is not the self. This body is not something that belongs to the self either. The
                            self cannot be found in the body, and the body cannot be found in the self. </p>
                    </div>
                    <div className='blog-col'></div>
                    <div className='blog-col'></div>
                </div>

                <div>

                </div>
                    <Editor
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                            image: {
                                previewImage: false,
                                uploadCallback: (event)=>{
                                    console.log(event)
                                    const formData = new FormData()
                                    formData.append('image', event, event.name)
                                    console.log(formData)
                                    axios.post('http://127.0.0.1:8000/api/images/', formData)
                                        .then(res=>(console.log(res.data.image),{data:{link:res.data.image}}))
                                }
                            }
                        }}
                    />
            </div>
        )
    };

}


export default App;
