const getStoredCartList = () => {
    const storedDataStr = localStorage.getItem('cart');
    if (storedDataStr) {
        const data = JSON.parse(storedDataStr);
        return data;
    }
    else {
        return [];
    }
}

const addCartToLs = (id) => {
    const storedData = getStoredCartList();

    if (storedData.includes(id)) {
        alert('this book is already exist')
    }
    else {
        storedData.push(id);
        const storedDataStr = JSON.stringify(storedData);
        localStorage.setItem('cart', storedDataStr);
        alert('this book is added to ls')
    }
}

// Wishlist 
const getStoredWishList = () => {
    const storedDataStr = localStorage.getItem('wish-list');
    if (storedDataStr) {
        const data = JSON.parse(storedDataStr);
        return data;
    }
    else {
        return [];
    }
}

const addWishListToLs = (id) => {
    const storedData = getStoredWishList();

    if (storedData.includes(id)) {
        alert('this book is already exist')
    }
    else {
        storedData.push(id);
        const storedDataStr = JSON.stringify(storedData);
        localStorage.setItem('wish-list', storedDataStr);
        alert('this book is added to ls')
    }
}



export { getStoredCartList, addCartToLs, getStoredWishList, addWishListToLs }