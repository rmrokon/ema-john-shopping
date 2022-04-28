import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        console.log('This is stored cart', storedCart);
        const savedCart = [];
        const test = { test: "this is test" };

        const keys = Object.keys(storedCart);
        console.log(keys);

        fetch("http://localhost:5000/productById", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(test)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }

                setCart(savedCart);
                console.log('This is cart', cart);
            })


    }, [])

    return [cart, setCart];
}

export default useCart;