const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist');
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks);
    }
    return [];
} 

const saveWishlistBooks = id =>{
    const storedWishlistBooks = getStoredWishlistBooks();
    const exist = storedWishlistBooks.find(bookId => bookId === id)
    if(!exist){
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistBooks))
    }
}

export {saveWishlistBooks, getStoredWishlistBooks}