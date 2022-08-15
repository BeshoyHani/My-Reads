import "./App.css";
import { useEffect, useState } from "react";
import * as bookAPI from "./config/BooksAPI";
import SearchBar from "./components/Search/SearchBar";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      let all_books = await bookAPI.getAll();
      setBooks(all_books);
    })();
  }, []);

  const updateShelf = async (book, shelf) => {
    try {
      await bookAPI.update(book, shelf);
      book.shelf = shelf;
      let newBooks = books.filter(b => b.id !== book.id);
      newBooks.push(book);
      setBooks(newBooks);
    } catch (error) {
      console.log(error);
    }
  }
  return (
      <div className="app">
    <Routes>
        <Route exact path="/search" element={
          <SearchBar bookShelves={books} updateShelf={updateShelf}/>
        }>
        </Route>
        <Route exact path="/" element={
          <Home books={books} updateShelf={updateShelf}/>
        }></Route>
    </Routes>
      </div>
  );
}

export default App;
