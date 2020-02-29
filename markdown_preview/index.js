import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked"



marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }
  render() {
    return (
      <div>
        <div >
          <Toolbar 
             
            onClick={this.handleEditorMaximize}
            text="Editor"/>
          <Editor markdown={this.state.markdown} 
            onChange={this.handleChange} />
        </div>
        <div className="converter">
        </div>
        <div >
          <Toolbar
            
            onClick={this.handlePreviewMaximize}
            text="Previewer"/>
          <Preview  markdown={this.state.markdown}/>
        </div>
      </div>
    )
  }
};

const Toolbar = (props) => {
    return (
      <div>
          
        {props.text}
        <i onClick={props.onClick}></i>
      </div>
   )
}

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"/>
    )
}

const Preview = (props) => {
  return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
    )
}

const placeholder = 
`# 


`

ReactDOM.render(<App />, document.getElementById('root'));

