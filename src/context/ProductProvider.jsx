import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData(6);

    }, []);

    // for quantity decrease and increase when a item add to cart added
    const dicreaseQuantity = (id) => {
        const lessQuantity = products.map(item => {
            if (item.id === id) {
                const newItem = item;
                newItem.quantity = item.quantity - 1;
                return newItem
            }
            return item;
        });
        setProducts(lessQuantity)
    }
    const increaseQuantity = (id) => {
        const upsQuantity = products.map(item => {
            if (item.id === id) {
                const newItem = item;
                newItem.quantity = item.quantity + 1;
                return newItem
            }
            return item;
        });
        setProducts(upsQuantity);
    }

    const backQuantity = (id, amount) => {
        const updatedOriginalProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, quantity:item.quantity + amount};
            }
            return item;
        });
        setProducts(updatedOriginalProducts);
    }
    const backProductsQuantity = (id) => {
        const updatedOriginalProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, quantity:item.quantity};
            }
            return item;
        });
        setProducts(updatedOriginalProducts);
    }
    const fetchData = async (dataLimit) => {
        try {
            const response = await fetch('products.json');
            const data = await response.json();
            displayData(data, dataLimit);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const displayData = (data, dataLimit) => {
        const showAllButton = document.getElementById("see-more");
        if (dataLimit && data.length > 6) {
            data = data.slice(0, 6);
            showAllButton.classList.remove('hidden');
        } else {
            showAllButton.classList.add('hidden');
        }
        setProducts(data);
    }

    const callData = () => {
        fetchData(6)
    }

    // show all data
    const showAllData = () => {
        fetchData()
    }


    return (
        <ProductContext.Provider value={{ products, showAllData, dicreaseQuantity, increaseQuantity, backQuantity,backProductsQuantity}}>
            {children}
        </ProductContext.Provider>)
};

export default ProductProvider;