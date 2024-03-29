import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBooks, saveWishlistBooks } from "../Utility/localStorage";

const BookDetails = () => {
  const handleReadBooks = () => {
    saveReadBooks(idInt) 
  };
  const handleWishlist = () => {
    saveWishlistBooks(idInt)
  };
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = JSON.parse(id);
  const book = books.find((book) => book.id === idInt);
  const {
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
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 lg:px-8 lg:py-4">
      <div className="lg:p-14 bg-[#1313130D] rounded-3xl]">
        <img className="lg:w-[500px]" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-3 px-2">
        <div className="flex flex-col gap-2 border-b pb-2 border-[#13131326">
          <h3 className="text-2xl lg:text-4xl font-bold primary-font">
            {bookName}
          </h3>
          <p className="text-[#131313CC] font-medium">By: {author}</p>
        </div>
        <p className="text-[#131313CC] font-medium border-b pb-2 border-[#13131326">
          {category}
        </p>
        <div className="flex flex-col gap-4 border-b pb-2 border-[#13131326">
          <p className="lg:w-[500px] text-[#131313CC] font-medium text-sm lg:text-[16px]">
            <span className="text-black font-bold">Review: </span> {review}
          </p>
          <p className="text-black font-bold flex gap-2 items-center">
            Tags:
            {tags.map((tag, idx) => (
              <span
                className="font-medium text-[#23BE0A] bg-[#23BE0A0D] mx-1 lg:mx-3 rounded-3xl px-2 lg:px-4 py-2"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
        <table className="text-[#131313CC] font-medium text-sm lg:text-[16px]">
          <tbody>
            <tr>
              <td className="pr-10">Number of Pages: </td>
              <td className="text-black font-semibold">{totalPages}</td>
            </tr>
            <tr>
              <td>Publisher: </td>
              <td className="text-black font-semibold">{publisher}</td>
            </tr>
            <tr>
              <td>Year of Publishing: </td>
              <td className="text-black font-semibold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating: </td>
              <td className="text-black font-semibold">{rating}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-5 mt-3">
          <Link
            onClick={() => handleReadBooks(idInt)}
            className="btn btn-ghost border border-[#1313134D] font-bold w-20"
          >
            Read
          </Link>
          <Link
            onClick={() => handleWishlist(idInt)}
            className="btn bg-[#50B1C9] font-bold text-white w-20"
          >
            Wishlist
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
