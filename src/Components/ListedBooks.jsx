import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishlistBooks from "./WishlistBooks";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistBooks } from "../Utility/localStorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);
  
  useEffect(() => {
    const storedWishBookIds = getStoredWishlistBooks();
    if(books.length > 0){
        const booksWishlist = books.filter(book => storedWishBookIds.includes(book.id))
        setDisplayWishlistBooks(booksWishlist)
    }
  }, [])
  return (
    <div>
      <h2>Listed Books</h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel>
          <WishlistBooks displayWishlistBooks={displayWishlistBooks}></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
