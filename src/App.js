import './App.css';
import Header from './components/Header.js';
import BookShelf from './components/BookShelf.js';
import { useState,useEffect } from 'react';
import { getAll } from './BookAPI';


function App() {
  const [books,setBooks] = useState([]);
  const [flipper,setFlipper] = useState(false)
  const forceUpdate = () => setFlipper(!flipper);

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
      <BookShelf title="Currently Reading" books={books}/>
      <BookShelf title="Want To Read" books={books}/>
      <BookShelf title="Read" books={books}/>
    </div>
  );
}

export default App;
