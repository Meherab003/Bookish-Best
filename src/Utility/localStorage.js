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

const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('readList');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return[];
}

const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();
    const exist = storedReadBooks.find(bookId => bookId === id)
    if(!exist){
        storedReadBooks.push(id);
        localStorage.setItem('readList',JSON.stringify(storedReadBooks))
    }
}

export {saveWishlistBooks, saveReadBooks, getStoredWishlistBooks, getStoredReadBooks}