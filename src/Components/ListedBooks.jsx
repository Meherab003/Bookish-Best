import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistBooks from "./WishlistBooks";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks, getStoredWishlistBooks } from "../Utility/localStorage";
import ReadBooks from "./ReadBooks";

const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([])
  
  useEffect(() => {
    const storedWishBookIds = getStoredWishlistBooks();
    const storedReadBookIds = getStoredReadBooks();
    if(books.length > 0){
        const booksWishlist = books.filter(book => storedWishBookIds.includes(book.id))
        const booksReadList = books.filter(book => storedReadBookIds.includes(book.id))
        setDisplayWishlistBooks(booksWishlist)
        setDisplayReadBooks(booksReadList)
    }
  }, [books])
  return (
    <div>
        <h2 className="font-bold text-3xl text-center lg:my-5">Books</h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab><span className='text-gray-700 font-bold'>Read Books</span></Tab>
          <Tab><span className='text-gray-700 font-bold'>Wishlist Books</span></Tab>
        </TabList>
        <TabPanel>
          <ReadBooks displayReadBooks={displayReadBooks}></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBooks displayWishlistBooks={displayWishlistBooks}></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
