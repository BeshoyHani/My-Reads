import ShelfEnum from '../../utils/ShelfEnum';
import Shelf from '../Shelf/Shelf';
import { Link } from 'react-router-dom';

const Home = ({ books, updateShelf }) => {

    const getBooksOfShelf = (ShelfName) => {
        return books.filter(book => book.shelf === ShelfName);
    }
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Shelf shelfName={'Currently Reading'}
                books={getBooksOfShelf(ShelfEnum.Currently_Reading)} updateShelf={updateShelf} />
            <Shelf shelfName={'Want to Read'}
                books={getBooksOfShelf(ShelfEnum.Want_to_Read)} updateShelf={updateShelf} />
            <Shelf shelfName={'Read'}
                books={getBooksOfShelf(ShelfEnum.Read)} updateShelf={updateShelf} />

            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    );
}
export default Home;