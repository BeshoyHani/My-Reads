import ShelfEnum from '../../utils/ShelfEnum';
import BookList from './../Book/BookList';

const SearchResult = ({ books, updateShelf, bookShelves }) => {
    const getBookWithShelf = () => {
        return books.map(book => {
            const shelfedBook = bookShelves.find(b => b.id === book.id);
            if (shelfedBook === undefined) {
                book.shelf = ShelfEnum.None;
                return book;
            } else {
                return shelfedBook;
            }
        })
    }
    return (
        <div className="search-books-results">
            <BookList books={getBookWithShelf()} updateShelf={updateShelf} />
        </div>
    );
}

export default SearchResult;