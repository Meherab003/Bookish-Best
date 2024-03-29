import ListedBookCard from "./ListedBookCard";
import PropTypes from 'prop-types';

const WishlistBooks = ({displayWishlistBooks}) => {
    // console.log(displayWishlistBooks)
    return (
        <div className="flex flex-col gap-3">
            {
                displayWishlistBooks.map(book => <ListedBookCard key={book.id} book={book}></ListedBookCard>)
            }
        </div>
    );
};

WishlistBooks.propTypes = {
    displayWishlistBooks: PropTypes.array,
}

export default WishlistBooks;