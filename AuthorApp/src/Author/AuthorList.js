import React from 'react'
import AuthorItem from './AuthorItem';
import { Link } from 'react-router-dom';
    const AuthorList = ({ authors }) => {
      return (
        <div>
          <center><h1>Authors List</h1></center> 
          <p><Link to="/add">Add an author</Link></p>
          <div className="row">
          {authors.map((author) => (       
              <div className="col-sm-3">
                 <AuthorItem  author={author} key={author.id} /> 
              </div>
          ))}
          </div>
        </div>
      )
    };

    export default AuthorList