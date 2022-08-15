import ShelfChanger from './../Shelf/ShelfChanger';
const Book = ({ book }) => {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${book.imageLinks.thumbnail}`,
                    }}
                ></div>
                <ShelfChanger bookShelf={book.shelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map(author => <div className="book-authors" key={author}>{author}</div>)}
        </div>
    );
}

export default Book;