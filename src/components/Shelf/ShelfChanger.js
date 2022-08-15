import Shelf from "../../utils/ShelfEnum";

const ShelfChanger = ({bookShelf}) => {
    return (
        <div className="book-shelf-changer">
            <select>
                <option value="none" disabled>
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