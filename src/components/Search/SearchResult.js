import BookList from './../Book/BookList';

const SearchResult = ({books}) => {
    return (
        <div className="search-books-results">
            <BookList books={books}/>
        </div>
    );
}

export default SearchResult;