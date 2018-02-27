var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const itemName = item
 const itemPrice = Math.floor(Math.random() * Math.floor(100));
 var inCart = {}
 inCart = { [itemName]: itemPrice}
 cart.push(inCart)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++ ){
      var namedItem = Object[i]
      var pricedItem = cart[i]
      console.log(`In your cart, you have ${namedItem} at $${pricedItem}.`)
    }
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
