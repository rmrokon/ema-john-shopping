import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, pageSize])

    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }

    const handleOnPage = (number) => {
        setPage(number);
    }

    const handlePageSize = (e) => {
        setPageSize(e.target.value);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product =>
                        <Card key={product._id} product={product} handleAddToCart={handleAddToCart}></Card>
                    )
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button key={number} className={page === number ? 'selected' : ''} onClick={() => handleOnPage(number)}>{number + 1}</button>)
                    }
                    {pageSize}
                    <select name="" id="" onChange={handlePageSize}>
                        <option value="10" defaultValue={10}>10</option>
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>

            <div className="cart-container">
                <OrderSummary cart={cart}>
                    <button className='clear-cart-btn'>Clear Cart</button>
                    <Link to='/orders'>
                        <button className='review-order-btn'>Review Order</button>
                    </Link>
                </OrderSummary>

            </div>
        </div>
    );
};

export default Shop;