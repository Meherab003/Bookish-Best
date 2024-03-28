import BooksCard from "./BooksCard";
import PropTypes from 'prop-types';

const BooksSection = ({ books }) => {
  console.log(books);
  return (
    <div className="mb-10">
      <h2 className="primary-font text-3xl lg:text-5xl font-bold text-center my-5 lg:my-10">
        Books
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7">
        {books.map((book) => (
          <BooksCard key={book.id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

BooksSection.propTypes = {
    books: PropTypes.array
}
export default BooksSection;
