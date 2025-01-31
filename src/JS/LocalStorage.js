import { toast } from "react-toastify";

const successToast = (text) => {
        toast.success(text, {
            position: 'top-center',
        });
    };

const warningToast = (text) => {
        toast.warn(text, {
            position: 'top-center',
        });
    };

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
        warningToast('This item is already exist');
        // already exist 
    }
    else {
        storedData.push(id);
        const storedDataStr = JSON.stringify(storedData);
        localStorage.setItem('cart', storedDataStr);
        successToast('Item is added To cart');
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
        warningToast('This item is already exist');
    }
    else {
        storedData.push(id);
        const storedDataStr = JSON.stringify(storedData);
        localStorage.setItem('wish-list', storedDataStr);
        successToast('This item added to Wishlist');
    }

}



export { getStoredCartList, addCartToLs, getStoredWishList, addWishListToLs ,successToast, warningToast}