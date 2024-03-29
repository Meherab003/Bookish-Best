import PropTypes from 'prop-types';
import ListedBookCard from './ListedBookCard';

const ReadBooks = ({displayReadBooks}) => {
    return (
        <div className="flex flex-col gap-3">
            {
                displayReadBooks.map(book => <ListedBookCard key={book.id} book={book}></ListedBookCard>)
            }
        </div>
    );
};

ReadBooks.propTypes = {
    displayReadBooks: PropTypes.array,
}

export default ReadBooks;