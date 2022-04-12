import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product =>
                        <Card key={product.id} product={product} handleAddToCart={handleAddToCart}></Card>
                    )
                }
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