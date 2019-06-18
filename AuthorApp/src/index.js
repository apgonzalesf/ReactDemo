import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route } from 'react-router-dom'
import './index.css';
import './bootstrap.min.css';
import AuthorList from './Author/AuthorList';
import AddAuthorForm from './Author/AddAuthorForm';
import * as serviceWorker from './serviceWorker'; 
   

class App extends Component {
  
  render() {
      return (
        <AuthorList  authors={this.state.authors} />
        )
  }

  state = {
    authors: []
  };

  componentDidMount() {
      fetch('http://localhost:4000/items')
          .then(res => res.json())
          .then((data) => {
              this.setState({ authors: data })
          })
          .catch(console.log)
  }
   
}

 


function AuthorWrapper(){
  return <AddAuthorForm onAddAuthor={(author) => {
    fetch('http://localhost:4000/items', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(author), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }} ></AddAuthorForm>
}

 
function render(){
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/add" component={AuthorWrapper}></Route>
      </React.Fragment>
    </BrowserRouter>    
  , document.getElementById('root'));
  }
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
