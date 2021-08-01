// import './cart-drawer'
//
// (function() {
//
//     const DEFAULT_CART = {
//         products: {}
//     }
//
//     Array.prototype.syncForEach = function(callback) {
//         for (let i = 0; i < this.length; i++) {
//             callback(this[i]);
//         }
//     }
//
//     let Cart = (function() {
//
//         let subscribers = [];
//
//         function Cart() {
//             this.initCart();
//
//             this.notify();
//
//             this.addSubscriber(saveCartToLS);
//         }
//
//         function saveCartToLS(cart) {
//             window.localStorage.setItem("cart", JSON.stringify(cart));
//         }
//
//         Cart.prototype.initCart = function() {
//             this.cart = JSON.parse(window.getFromLS("cart", JSON.stringify(DEFAULT_CART)));
//         }
//
//         Cart.prototype.clear = function() {
//             this.cart = DEFAULT_CART;
//             this.notify();
//         }
//
//         Cart.prototype.getProducts = function() {
//             return this.cart.products;
//         }
//
//         Cart.prototype.addProduct = function(product) {
//             product.count *= 1;
//             product.price *= 1;
//             this.initCart();
//             this.cart.products[product.id] = product;
//             this.notify();
//         }
//
//         Cart.prototype.addSubscriber = function(subscriber) {
//             subscribers.push(subscriber);
//             this.notify();
//         }
//
//         Cart.prototype.notify = function() {
//             subscribers.syncForEach(subscriber => subscriber(this.cart));
//         }
//
//         Cart.prototype.getProduct = function(id) {
//             this.initCart();
//             let product = this.cart.products[id];
//             if (typeof product === "undefined") {
//                 return null;
//             }
//             return product;
//         }
//
//         Cart.prototype.changeProductCount = function(id, newCount) {
//             this.initCart();
//             if (newCount <= 0) {
//                 delete this.cart.products[id];
//             } else {
//                 if (typeof this.cart.products === "undefined") {
//                     this.cart.products[id] = {
//                         id: id,
//                         title: "",
//                         image: "",
//                         count: 0,
//                         price: 0
//                     };
//                 }
//                 this.cart.products[id].count = newCount;
//             }
//             this.notify();
//         }
//
//         return Cart;
//
//     })();
//
//     window.getCartProducts = function() {
//         let cart = new Cart();
//         return cart.getProducts();
//     }
//
//     window.clearCart = function() {
//         let cart = new Cart();
//         cart.clear();
//     }
//
//     let cart = new Cart();
//
//     cart.addSubscriber(window.cartDrawer);
//     cart.addSubscriber(window.cartTableDrawer);
//
//     cart.addSubscriber(cart => {
//         let totalPrice = 0;
//         let products = Object.values(cart.products);
//         for (let i = 0; i < products.length; i++) {
//             totalPrice += products[i].count*products[i].price;
//         }
//
//         let confirmButton = document.getElementById("confirm");
//         if (confirmButton != null) {
//             if (totalPrice > 0) {
//                 confirmButton.disabled = false;
//             } else {
//                 confirmButton.disabled = true;
//             }
//         }
//
//         Object.values(document.querySelectorAll(".cartTotalPrice")).syncForEach(item => {
//             item.innerHTML = window.formatToUserFriendlyPrice(totalPrice);
//         });
//
//         Object.values(document.querySelectorAll(".productEditableCount")).syncForEach(item => {
//             let id = item.getAttribute("data-id");
//             let product = cart.products[id];
//             let count = 0
//             if (product != null) {
//                 count = product.count;
//             }
//             item.value = count*1;
//         });
//     });
//
//     Object.values(document.querySelectorAll(".productEditableCount")).syncForEach(item => {
//         let id = item.getAttribute("data-id");
//
//         item.addEventListener("input", function() {
//             let count = this.value*1;
//             let product = cart.getProduct(id);
//             if (product == null) {
//                 cart.addProduct(getProductData(id));
//             }
//             cart.changeProductCount(id, count);
//         });
//     });
//
//     document.addEventListener("click", function(event) {
//         let element = event.target;
//         if (element.closest(".productIncrement") != null) {
//             element = element.closest(".productIncrement");
//             let id = element.getAttribute("data-id");
//             changeProductCountByOne(id, +1);
//         } else if (element.closest(".productDecrement") != null) {
//             element = element.closest(".productDecrement");
//             let id = element.getAttribute("data-id");
//             changeProductCountByOne(id, -1);
//         }
//     });
//
//     function changeProductCountByOne(id, value) {
//         let product = cart.getProduct(id);
//         if (product == null) {
//             product = getProductData(id);
//             cart.addProduct(product);
//         }
//         product.count += value;
//         cart.changeProductCount(product.id, product.count);
//     }
//
//     function getProductData(id) {
//         let title = document.querySelector(".productTitle[data-id='" + id + "']").innerText;
//         let price = document.querySelector(".productPrice[data-id='" + id + "']").getAttribute("data-price");
//         let image = document.querySelector(".productImage[data-id='" + id + "']").getAttribute("src");
//         return {
//             id: id,
//             title: title,
//             image: image,
//             count: 0,
//             price: price
//         };
//     }
//
// })();