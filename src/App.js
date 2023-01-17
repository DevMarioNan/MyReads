import './App.css';
import Header from './components/Header.js';
import BookShelf from './components/BookShelf.js';
import SearchPage from './components/SearchPage';
import { useState,useEffect } from 'react';
import { Link, Route,Routes } from "react-router-dom";

import { getAll } from './BookAPI';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


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
  
        <Link to='/search'>
          <IconButton sx={{position:'fixed',bottom:20,right:20}}>
                    <AddCircleIcon sx={{fontSize:"3em",color:"green"}}/>
          </IconButton>
        </Link>
    </div>
  );
}

export default App;
