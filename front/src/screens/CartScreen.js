import React from 'react';

function CartScreen(props) {
    const productId = props.match.params.id;
    /*Search from the product screen  line : 38 */
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                :1;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO Cart : PRODUCTID: {productId} Qty: {qty}
            </p>
        </div>
    );
}

export default CartScreen;