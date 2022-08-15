import BookList from "../Book/BookList";

const Shelf = ({ shelfName, books }) => {
    return (
        <div className="list-books-content">
            <div>
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{shelfName}</h2>
                        <div className="bookshelf-books">
                            <BookList books={books} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shelf;