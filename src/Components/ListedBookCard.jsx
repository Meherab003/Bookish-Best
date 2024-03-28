import { Link } from "react-router-dom";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const ListedBookCard = ({ book }) => {
  const {
    id,
    image,
    bookName,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    category,
  } = book;
  return (
    <div className="flex flex-col lg:flex-row border rounded-3xl">
      <div className="p-3">
        <img className="lg:w-56 bg-[#1313130D] rounded-3xl" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-5 p-3 flex-1">
        <h3 className="text-2xl font-bold primary-font">{bookName}</h3>
        <p className="text-[#131313CC]">By: {author}</p>
        <div className="flex gap-5">
          <div className="flex gap-5">
            <p className="font-bold">Tag</p>
            <div className="flex gap-5">
            {tags.map((tag, idx) => (
              <p className="text-[#23BE0A] font-bold" key={idx}>#{tag}</p>
            ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#13131399]">
          <SlCalender />
            <p>Year of Publishing {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-5 text-[#13131399] border-b pb-2">
          <div className="flex items-center gap-2">
            <MdOutlinePeopleAlt />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2 text-[#13131399]">
            <FaRegFileAlt />
            <p>Page {totalPages}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="bg-[#328EFF26] text-[#328EFF] w-36 text-center rounded-3xl p-1">
            Category: {category}
          </p>
          <p className="bg-[#FFAC3326] text-[#FFAC33] w-28 text-center rounded-3xl p-1">
            Rating: {rating}
          </p>
          <Link
            className="btn btn-sm rounded-3xl bg-[#23BE0A] text-white"
            to={`/books/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
