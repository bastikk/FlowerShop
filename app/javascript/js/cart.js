import './cart-drawer'

(function() {

    Array.prototype.syncForEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }

    let Cart = (function() {

        let subscribers = [];

        function Cart() {
            this.cart = JSON.parse(window.getFromLS("cart", JSON.stringify({
                products: {}
            })));

            this.notify();

            this.addSubscriber(saveCartToLS);
        }

        function saveCartToLS(cart) {
            window.localStorage.setItem("cart", JSON.stringify(cart));
        }

        Cart.prototype.addProduct = function(product) {
            product.count *= 1;
            product.price *= 1;
            this.cart.products[product.id] = product;
            this.notify();
        }

        Cart.prototype.addSubscriber = function(subscriber) {
            subscribers.push(subscriber);
            this.notify();
        }

        Cart.prototype.notify = function() {
            subscribers.syncForEach(subscriber => subscriber(this.cart));
        }

        Cart.prototype.getProduct = function(id) {
            let product = this.cart.products[id];
            if (typeof product === "undefined") {
                return null;
            }
            return product;
        }

        Cart.prototype.changeProductCount = function(id, newCount) {
            if (newCount <= 0) {
                delete this.cart.products[id];
            } else {
                if (typeof this.cart.products === "undefined") {
                    this.cart.products[id] = {
                        id: id,
                        title: "",
                        image: "",
                        count: 0,
                        price: 0
                    };
                }
                this.cart.products[id].count = newCount;
            }
            this.notify();
        }

        return Cart;

    })();

    let cart = new Cart();

    cart.addSubscriber(window.cartDrawer);

    Object.values(document.querySelectorAll(".productEditableCount")).syncForEach(item => {
        let id = item.getAttribute("data-id");
        cart.addSubscriber(cart => {
            let product = cart.products[id];
            let count = 0
            if (product != null) {
                count = product.count;
            }
            item.value = count*1;
        });

        item.addEventListener("input", function() {
            let count = this.value*1;
            let product = cart.getProduct(id);
            if (product == null) {
                cart.addProduct(getProductData(id));
            }
            cart.changeProductCount(id, count);
        });
    });

    Object.values(document.querySelectorAll(".productIncrement")).syncForEach(item => {
        let id = item.getAttribute("data-id");
        item.addEventListener("click", function() {
            changeProductCountByOne(id, +1);
        });
    });

    Object.values(document.querySelectorAll(".productDecrement")).syncForEach(item => {
        let id = item.getAttribute("data-id");
        item.addEventListener("click", function() {
            changeProductCountByOne(id, -1);
        });
    });

    function changeProductCountByOne(id, value) {
        let product = cart.getProduct(id);
        if (product == null) {
            product = getProductData(id);
            cart.addProduct(product);
        }
        product.count += value;
        cart.changeProductCount(product.id, product.count);
    }

    function getProductData(id) {
        let title = document.querySelector(".productTitle[data-id='" + id + "']").innerText;
        let price = document.querySelector(".productPrice[data-id='" + id + "']").getAttribute("data-price");
        let image = document.querySelector(".productImage[data-id='" + id + "']").getAttribute("src");
        return {
            id: id,
            title: title,
            image: image,
            count: 0,
            price: price
        };
    }

})();