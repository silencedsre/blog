import React from 'react';
import Navigation from "./navigation/Navigation";
import './App.css';
import { EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import {stateToHTML} from 'draft-js-export-html';


class App extends React.Component {

state = {
    selectedFile: null,
    editorState: EditorState.createEmpty(),
    content: [],
    contentState: {}
}
  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
}


    onButtonSubmit = (event) => {
        event.preventDefault();
         let html = stateToHTML(this.state.editorState.getCurrentContent());
      console.log(html)
        axios.defaults.xsrfHeaderName = "X-CSRFToken";
        axios.post('http://127.0.0.1:8000/api/blog/',
            {post: html},
        );
        window.location.reload();
    };


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/blog/')
                .then(response => {
                    console.log(response);
                    this.setState({
                        content: response.data
                    })

                });
        }

        createMarkup = (markup) => {
            return {__html: markup}
        }


    render() {
        const ckeditorList = this.state.content.map(content => {
            return (
                    <div key={content.id} className='container blog'>
                        <div className='blog-col' dangerouslySetInnerHTML={this.createMarkup(content.post)}></div>
                    </div>
                )
            })

        return (
            <div className="App">
                <Navigation/>

                {ckeditorList}

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
                    <br/>
                        <br/>
                    <button onClick={this.onButtonSubmit}>Submit</button>
            </div>
        )
    };

}


export default App;
