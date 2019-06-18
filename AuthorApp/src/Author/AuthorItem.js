import React from 'react'
const AuthorItem= ({ author }) => {
     return (  
        <div className="card" style={{width: '18rem'}}>
        <img src={author.imageUrl} className="card-img-top" alt="Imagen"/>
        <div className="card-body">
            <h5 className="card-title">{author.name}</h5>
            <p>Books</p>
            <ul>
                {author.books.map((book)=><li key={book}>{book}</li>)} 
            </ul>
            
        </div>
        </div>
     );
  }
  




  export default AuthorItem