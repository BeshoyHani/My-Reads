import SearchResult from "./SearchResult";
import * as bookAPI from '../../config/BooksAPI';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const SearchBar = ({bookShelves, updateShelf }) => {

    const [query, setQuery] = useState('');
    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleInput = (event) => {
        const { value } = event.target;
        setQuery(value);
        searchForBook(value);
    }
    const searchForBook = async (query, maxResults = 30) => {
        if (query === '') {
            setSearchedBooks([]);
            return;
        }
        const books = await bookAPI.search(query, maxResults);
        books.error ? setSearchedBooks([]) : setSearchedBooks(books);
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        value={query}
                        onChange={handleInput}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            {
                query !== '' && searchedBooks.length === 0 ?
                    <h3 className="no-search-results">No Results matched !</h3>
                    : <SearchResult books={searchedBooks} updateShelf={updateShelf} bookShelves={bookShelves} />
            }
        </div>
    );
}
export default SearchBar;