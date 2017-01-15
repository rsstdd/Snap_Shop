class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  subtotal() {
    return this.cartSvc.subtotal;
  }

  addToCart(name, price, cameraId, cameraImg) {
    this.cartSvc.addToCart(name, price, cameraId);
  }

  removeFromCart(index) {
    this.cartSvc.removeFromCart(index);
  }

  cart() {
    return this.cartSvc.cart;
  }

  cartCount() {
    return this.cartSvc.cartCount();
  }

  increaseQuantity(index) {
    this.cartSvc.increaseQuantity(index);
  }

  decreaseQuantity(index) {
    this.cartSvc.decreaseQuantity(index);
  }
}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
