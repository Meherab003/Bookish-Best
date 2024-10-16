import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistBooks from "./WishlistBooks";
import { useLoaderData } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import {
  getStoredReadBooks,
  getStoredWishlistBooks,
} from "../Utility/localStorage";
import ReadBooks from "./ReadBooks";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  const handleBookSortBy = filter => {
    if(filter === 'page'){
      const pageSortedWish = [...displayWishlistBooks].sort((a,b) => a.totalPages < b.totalPages ? 1 : -1)
      const pageSortedRead = [...displayReadBooks].sort((a,b) => a.totalPages < b.totalPages ? 1 : -1)
      setDisplayWishlistBooks(pageSortedWish)
      setDisplayReadBooks(pageSortedRead)
    }
    else if(filter === 'rating'){
      const ratingSortedWish = [...displayWishlistBooks].sort((a,b) => a.rating < b.rating? 1 : -1)
      const ratingSortedRead = [...displayReadBooks].sort((a,b) => a.rating < b.rating? 1 : -1)
      setDisplayWishlistBooks(ratingSortedWish)
      setDisplayReadBooks(ratingSortedRead)
    }
    else if(filter === 'year'){
      const yearSortedWish = [...displayWishlistBooks].sort((a,b) => a.yearOfPublishing < b.yearOfPublishing ? 1 : -1)
      const yearSortedRead = [...displayReadBooks].sort((a,b) => a.yearOfPublishing < b.yearOfPublishing ? 1 : -1)
      setDisplayWishlistBooks(yearSortedWish)
      setDisplayReadBooks(yearSortedRead)
    }
  }

  useEffect(() => {
    const storedWishBookIds = getStoredWishlistBooks();
    const storedReadBookIds = getStoredReadBooks();
    if (books.length > 0) {
      const booksWishlist = books.filter((book) =>
        storedWishBookIds.includes(book.id)
      );
      const booksReadList = books.filter((book) =>
        storedReadBookIds.includes(book.id)
      );
      setDisplayWishlistBooks(booksWishlist);
      setDisplayReadBooks(booksReadList);
    }
  }, [books]);
  return (
    <div>
      <Helmet>
        <title>BookishBest | Listed Books</title>
      </Helmet>
      <div className="text-center my-5 bg-[#1313130D] p-3 lg:p-5 rounded-xl">
      <h2 className="font-bold text-3xl text-[#131313]">Books</h2>
      </div>
      {/* /dropdown */}
      <div className="flex items-center justify-center my-3"> 
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white font-semibold px-5">
            Sort By <span><FaChevronDown /></span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleBookSortBy('rating')}>
              <a>Sort By Rating</a>
            </li>
            <li onClick={() => handleBookSortBy('page')}>
              <a>Sort By Pages</a>
            </li>
            <li onClick={() => handleBookSortBy('year')}>
              <a>Sort By Year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <span className="text-gray-700 font-bold">Read Books</span>
          </Tab>
          <Tab>
            <span className="text-gray-700 font-bold">Wishlist Books</span>
          </Tab>
        </TabList>
        <TabPanel>
          <ReadBooks displayReadBooks={displayReadBooks}></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBooks
            displayWishlistBooks={displayWishlistBooks}
          ></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
