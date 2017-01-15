export default class CartService {
  constructor() {
    this.subtotal = 0;
    this.cart = [];
  }

  addToCart(name, price, cameraId, image) {
    Materialize.toast(`${name} added to cart`, 6000, 'Orange');
    this.subtotal += parseInt(price);

    for (let i = 0; i < this.cart.length; i++) {
      if (name === this.cart[i].name) {
        const number = this.cart[i].quantity += 1;

        return number;
      }
    }

    this.cart.push({
      cameraId: cameraId,
      name: name,
      price: parseInt(price),
      image: image,
      quantity: 1
    });
  }

  removeFromCart(index) {
    for (let i = 0; i < this.cart[index].quantity; i++) {
      this.subtotal -= this.cart[index].price;
    }
    this.cart.splice(index, 1);
  }

  cartCount() {
    let total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].quantity;
    }

    return total;
  }

  increaseQuantity(index) {
    this.cart[index].quantity += 1;
    this.subtotal += this.cart[index].price;
  }

  decreaseQuantity(index) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
      this.subtotal -= this.cart[index].price;
    }
    else {
      this.removeFromCart(index);
    }
  }

}
