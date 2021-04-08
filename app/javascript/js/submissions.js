let form = document.querySelector(".confirmOrder");
if (typeof form !== "undefined" && form != null) {
    document.querySelector(".confirmOrder").onsubmit = function() {
        let form = document.querySelector(".confirmOrder");
        let data = new FormData(form);
        let json = Object.fromEntries(data);

        let jsonProducts = getCartProducts();
        let products = [];

        for (let id in jsonProducts) {
            products.push({
                id: id,
                count: jsonProducts[id].count
            });
        }

        Object.assign(json, {products: products});

        sendOrderData(json);

        return false;
    };
}

function sendOrderData(data) {
    fetch("/orders", {
        method: "post",
        body: JSON.stringify(data)
    }).then(response => {
        clearCart();
        console.log(response);
    });
}