import BookList from "../Book/BookList";

const Shelf = ({ shelfName, books, updateShelf }) => {
    return (
        <div className="list-books-content">
            <div>
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelfName}</h2>
                        <div className="bookshelf-books">
                            <BookList books={books} updateShelf={updateShelf} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shelf;