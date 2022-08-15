import SearchResult from "./SearchResult";
import * as bookAPI from '../../config/BooksAPI';
import { useState } from 'react';
const SearchBar = ({ showSearchPage, setShowSearchPage, books }) => {

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
                <a
                    className="close-search"
                    onClick={() => setShowSearchPage(!showSearchPage)}

                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        value={query}
                        onChange={handleInput}
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            {console.log('length: ', searchedBooks.length)}
            {
                query !== '' && searchedBooks.length ===0 ?
                 <h3 className="no-search-results">No Results matched !</h3>
                  :  <SearchResult books={searchedBooks} />
            }
        </div>
    );
}
export default SearchBar;