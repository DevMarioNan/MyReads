import './App.css';
import Header from './components/Header.js';
import BookShelf from './components/BookShelf.js';
import { useState,useEffect } from 'react';
import { getAll } from './BookAPI';


function App() {
  const [books,setBooks] = useState([]);
  const [swap,setSwapper] = useState(true);
  const forceUpdate = () =>{setSwapper(!swap)}

  useEffect(()=>{
    let mounted = true
    getAll().then((data)=>{
      if(mounted){
        setBooks(data);
        
      }
    })
    return () => mounted=false;
  },[])

  
  return (
    <div className="App">
      <Header title="MyReads"/>
      <BookShelf title="Currently Reading" books={books.filter((book)=>book.shelf === 'currentlyReading')} setBooks={setBooks} allBooks={books} forceUpdate={forceUpdate}/>
      <BookShelf title="Want To Read" books={books.filter((book)=>book.shelf === "wantToRead")} setBooks={setBooks} allBooks={books} forceUpdate={forceUpdate}/>
      <BookShelf title="Read" books={books.filter((book)=>book.shelf === "read")} setBooks={setBooks}  allBooks={books} forceUpdate={forceUpdate}/>
    </div>
  );
}

export default App;
