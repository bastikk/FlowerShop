// function getCartItemLayout(product) {
//     return  `<div class="cart-item hflex hpadding-20 vpadding-10">
//                 <div class="cart-item-image" style="margin-right: 10px">
//                   <img src="${product.image}" alt="${product.title}" />
//                 </div>
//                 <div class="cart-item-details vflex full-width">
//                   <div class="cart-item-title text-truncate">${product.title}</div>
//                   <div class="cart-item-total hflex">
//                     <div class="cart-item-price">${window.formatToUserFriendlyPrice(product.price)} грн</div>
//                     <div class="cart-item-count full-flex hflex-end"><span>${window.formatToUserFriendlyPrice(product.price*product.count)} грн</span>(x${product.count})</div>
//                   </div>
//                 </div>
//               </div>`;
// }
//
// function getCountIndicatorLayout(count) {
//     return  `<div class="red-circle circle-small vflex-center display-rt" style="right: -3px">
//                 <span class="data-products-quantity">${count}</span>
//               </div>`;
// }
//
// function getCartItem(product) {
//     let layout = getCartItemLayout(product);
//
//     return window.oneElementStringToHTML(layout);
// }
//
// function getIndicator(count) {
//     let layout = getCountIndicatorLayout(count);
//
//     return window.oneElementStringToHTML(layout);
// }
//
// window.cartDrawer = function(cart) {
//     let cartDOM = document.getElementById("cart");
//
//     let cartItems = cartDOM.querySelector(".cartItems");
//     let indicator = cartDOM.querySelector(".countIndicator");
//     cartItems.innerHTML = "";
//     indicator.innerHTML = "";
//
//     let totalPrice = 0;
//     let totalCount = 0;
//     let products = Object.values(cart.products);
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];
//         let item = getCartItem(product);
//
//         cartItems.append(item);
//
//         totalCount += product.count;
//         totalPrice += product.count*product.price;
//     }
//
//     if (totalCount > 0) {
//         indicator.append(getIndicator(totalCount));
//     }
//
//     let _totalPrice = window.splitPrice(totalPrice);
//
//     cartDOM.querySelector(".itemsTotalCount").innerHTML = `${totalCount}`;
//     cartDOM.querySelector(".itemsTotalPrice").innerHTML = `${_totalPrice.full}<sup>${_totalPrice.fractional}</sup>`;
// }
//
// window.cartTableDrawer = function(cart) {
//     let cartProducts = document.querySelector(".cartProducts");
//     if (cartProducts == null)
//         return;
//     let cartProductsBody = cartProducts.querySelector("tbody");
//
//     cartProductsBody.innerHTML = "";
//
//     let products = Object.values(cart.products);
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];
//         let item = getTableProductRowLayout(product);
//
//         cartProductsBody.innerHTML += item;
//     }
// }
//
// function getTableProductRow(product) {
//     let layout = getTableProductRowLayout(product);
//
//     return window.oneElementStringToHTML(layout);
// }
//
// function getTableProductRowLayout(product) {
//     return      `<tr>
//                   <td class="hpadding-10 vpadding-10">
//                     <div class="hflex">
//                       <div class="cart-item-image" style="margin-right: 10px">
//                         <img src="${product.image}" alt="${product.title}" />
//                       </div>
//                       <div class="cart-product-title vflex-center">
//                         ${product.title}
//                       </div>
//                     </div>
//                   </td>
//                   <td class="hpadding-10 vpadding-10">
//                     ${window.formatToUserFriendlyPrice(product.price)} грн.
//                   </td>
//                   <td class="hpadding-10 vpadding-10">
//                     <div class="hflex-center">
//                       <div class="product-buy-area vpadding-10 hflex">
//                         <div class="btn-group" role="group" aria-label="Кількість">
//                           <div data-id="${product.id}" class="productDecrement hpadding-5 content-alignment-center left-rounded vflex-center">
//                             <i class="fas fa-minus"></i>
//                           </div>
//                           <input type="text" disabled class="productEditableCount product-quantity fs-sm content-alignment-center integerField" style="max-width: 50px" value="0" data-id="${product.id}" />
//                           <div data-id="${product.id}" class="productIncrement hpadding-5 content-alignment-center right-rounded vflex-center">
//                             <i class="fas fa-plus"></i>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td class="hpadding-10 vpadding-10">
//                     ${window.formatToUserFriendlyPrice(product.price*product.count)} грн.
//                   </td>
//                 </tr>`;
// }