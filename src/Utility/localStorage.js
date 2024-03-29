import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredWishlistBooks = () => {
  const storedWishlistBooks = localStorage.getItem("wishlist");
  if (storedWishlistBooks) {
    return JSON.parse(storedWishlistBooks);
  }
  return [];
};

const saveWishlistBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const exist = storedReadBooks.find((bookId) => bookId === id);
  if (!exist) {
    const storedWishlistBooks = getStoredWishlistBooks();
    const exist = storedWishlistBooks.find((bookId) => bookId === id);
    if (exist) {
      toast.error("Already added in 'Wishlist Books' page");
    } else {
      storedWishlistBooks.push(id);
      localStorage.setItem("wishlist", JSON.stringify(storedWishlistBooks));
      toast.success("Book added in 'Wishlist Books' page");
    }
  } else {
    toast.error("Already added in 'Read Books' page");
  }
};

const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem("readList");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveReadBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const exist = storedReadBooks.find((bookId) => bookId === id);
  if (!exist) {
    storedReadBooks.push(id);
    localStorage.setItem("readList", JSON.stringify(storedReadBooks));
    toast.success("Book added in 'Read Books' page");
  } else {
    toast.error("Already added in 'Read Books' page");
  }
};

export {
  saveWishlistBooks,
  saveReadBooks,
  getStoredWishlistBooks,
  getStoredReadBooks,
};
