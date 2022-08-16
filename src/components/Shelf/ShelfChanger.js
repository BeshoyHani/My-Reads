import Shelf from "../../utils/ShelfEnum";

const ShelfChanger = ({ bookShelf, setShelf, changeShelf }) => {

    const updateShelf = (event) => {
        const { value } = event.target;
        setShelf(value);
        changeShelf(value);
    }
    
    return (
        <div className="book-shelf-changer">
            <select value={bookShelf} onChange={updateShelf}>
                <option value="" disabled>
                    Move to...
                </option>
                <option value={Shelf.Currently_Reading}>
                    Currently Reading
                </option>
                <option value={Shelf.Want_to_Read}>Want to Read</option>
                <option value={Shelf.Read}>Read</option>
                <option value={Shelf.None}>None</option>
            </select>
        </div>
    );
}

export default ShelfChanger;