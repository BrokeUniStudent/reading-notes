import './App.css';
import notesData from "./data/notesData.js";
import Book from './components/Book.js';
import booksData from "./data/booksData.js"
import { AddBook } from './components/AddBook';
import { useState } from 'react/cjs/react.development';
import { ChapterList } from './components/ChapterList';

function App() {

  const [books, setbooks] = useState(booksData);

  const addBook = (book) => {
      setbooks((prev) => ([...prev, book]));
  }

  const handleClick = (e) => {
    document.getElementById("side").style = {display:"block"};
  }

  return (
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
              <p className="navbar-brand">Reading Notes</p>
          </div>
          <div>
              <ul className="nav navbar-nav">
                <button type="button" className="btn btn-default navbar-btn" onClick={handleClick}>
                  Extend your library
                </button>
              </ul>
          </div>
        </div>
      </nav>
      <div id="content">
        {books.map((info, id) => <Book key={id} info={info} />)}
      </div>
      <div className="side" style={{display:'none'}} id="side">
        <AddBook addBook={addBook}/>
      </div>
    </div>
  );
}

export default App;
