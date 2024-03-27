
let cartItems = [];
let total = 0;

function addItem(price) {
    cartItems.push(price);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    total = 0;
    cartItems.forEach( item => { total += item; } );
    document.getElementById('total').textContent = total + " D";
}