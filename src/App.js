import "./App.css";
import { useEffect, useState } from "react";
import * as bookAPI from "./config/BooksAPI";
import SearchBar from "./components/Search/SearchBar";
import ShelfEnum from './utils/ShelfEnum';
import Shelf from './components/Shelf/Shelf';

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
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
      console.log(shelf)
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
      {showSearchPage ? (
        <SearchBar showSearchPage={showSearchPage} setShowSearchPage={setShowSearchPage}
          bookShelves={books} updateShelf={updateShelf} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelf shelfName={'Currently Reading'}
            books={books.filter(book => book.shelf === ShelfEnum.Currently_Reading)} updateShelf={updateShelf} />
          <Shelf shelfName={'Want to Read'}
            books={books.filter(book => book.shelf === ShelfEnum.Want_to_Read)} updateShelf={updateShelf} />
          <Shelf shelfName={'Read'}
            books={books.filter(book => book.shelf === ShelfEnum.Read)} updateShelf={updateShelf} />
          <div className="open-search">
            <a onClick={() => setShowSearchPage(!showSearchPage)} href='#'>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
