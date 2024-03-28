import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BooksCard = ({ book }) => {
  const { id, bookName, author, image, rating, tags, category } = book;
  return (
    <Link to={`/books/${id}`} className="flex flex-col gap-2 border rounded-3xl pt-4">
      <img className="lg:w-64 rounded-3xl mx-auto" src={image} alt="" />
      <div className="flex flex-col gap-3 p-2 lg:p-5">
        <div className="flex gap-1 lg:gap-2">
          {tags.map((tag, idx) => (
            <p
              className="lg:font-medium text-[#23BE0A] bg-[#23BE0A0D] p-2 rounded-xl"
              key={idx}
            >
              {tag}
            </p>
          ))}
        </div>
        <h3 className="primary-font text-2xl font-bold">{bookName}</h3>
        <p className="lg:font-medium text-[#131313CC]">By: {author}</p>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="lg:font-medium text-[#131313CC]">{category}</p>
          <p className="flex items-center gap-1 lg:font-medium text-[#131313CC]">
            {rating}{" "}
            <span>
              <FaRegStar />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
BooksCard.propTypes = {
    book: PropTypes.object,
}

export default BooksCard;
