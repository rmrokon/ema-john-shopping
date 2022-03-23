const calculateCart = (props) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal = 0;
    props.forEach(productOnCart => {
        totalPrice += productOnCart.price;
        totalShipping += productOnCart.price * 0.02;
        tax += productOnCart.price * 0.05;
        grandTotal = totalPrice + totalShipping + tax;
    })
    return {
        selecetedItems: props.length,
        totalPrice: totalPrice,
        totalShipping: totalShipping,
        tax: tax,
        grandTotal: grandTotal
    }
}

export { calculateCart }