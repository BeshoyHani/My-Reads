import ShelfChanger from './../Shelf/ShelfChanger';
import { useState } from 'react';

const Book = ({ book, updateShelf }) => {

    const [shelf, setShelf] = useState(book.shelf);
    const changeShelf = (newShelf) => {
        updateShelf(book, newShelf);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${book?.imageLinks?.thumbnail}`,
                    }}
                ></div>
                <ShelfChanger bookShelf={shelf} setShelf={setShelf} changeShelf={changeShelf} />
            </div>
            <div className="book-title">{book?.title}</div>
            {book.authors?.map(author => <div className="book-authors" key={author}>{author}</div>)}
        </div>
    );
}

export default Book;