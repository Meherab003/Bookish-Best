import ListedBookCard from "./ListedBookCard";

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

export default WishlistBooks;