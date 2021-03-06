import React from 'react';
import {Editor, EditorState,  RichUtils} from 'draft-js';

class DraftEditor extends React.Component{
    constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty(),};
    this.onChange = (editorState, event) => this.setState({editorState,});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

   handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

    _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
        <div>
         <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
        </div>
    );
  }
}

export default DraftEditor;