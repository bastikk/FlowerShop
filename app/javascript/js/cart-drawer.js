function getCartItemLayout(product) {
    let price = window.splitPrice(product.price);
    let totalProductPrice = window.splitPrice(product.price*product.count);
    return  `<div class="cart-item hflex hpadding-20 vpadding-10">
                <div class="cart-item-image" style="margin-right: 10px">
                  <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="cart-item-details vflex full-width">
                  <div class="cart-item-title text-truncate">${product.title}</div>
                  <div class="cart-item-total hflex">
                    <div class="cart-item-price">${price.full}<sup>${price.fractional}</sup> грн</div>
                    <div class="cart-item-count full-flex hflex-end"><span>${totalProductPrice.full}<sup>${totalProductPrice.fractional}</sup> грн</span>(x${product.count})</div>
                  </div>
                </div>
              </div>`;
}

function getCountIndicatorLayout(count) {
    return  `<div class="red-circle circle-small vflex-center display-rt" style="right: -3px">
                <span class="data-products-quantity">${count}</span>
              </div>`;
}

function getCartItem(product) {
    let layout = getCartItemLayout(product);

    return window.oneElementStringToHTML(layout);
}

function getIndicator(count) {
    let layout = getCountIndicatorLayout(count);

    return window.oneElementStringToHTML(layout);
}

window.cartDrawer = function(cart) {
    let cartDOM = document.getElementById("cart");

    let cartItems = cartDOM.querySelector(".cartItems");
    let indicator = cartDOM.querySelector(".countIndicator");
    cartItems.innerHTML = "";
    indicator.innerHTML = "";

    let totalPrice = 0;
    let totalCount = 0;
    let products = Object.values(cart.products);
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let item = getCartItem(product);

        cartItems.append(item);

        totalCount += product.count;
        totalPrice += product.count*product.price;
    }

    if (totalCount > 0) {
        indicator.append(getIndicator(totalCount));
    }

    let _totalPrice = window.splitPrice(totalPrice);

    cartDOM.querySelector(".itemsTotalCount").innerHTML = `${totalCount}`;
    cartDOM.querySelector(".itemsTotalPrice").innerHTML = `${_totalPrice.full}<sup>${_totalPrice.fractional}</sup>`;
}