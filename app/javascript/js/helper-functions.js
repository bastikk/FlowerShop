window.formatToNumber = function(number) {
    number += '';
    number = number.replace(/[^0-9]/g, "");
    return number*1;
}

window.validElementValueToInteger = function(element) {
    element.addEventListener("input", function() {
        let value = this.value;
        this.value = window.formatToNumber(value);
    });
}

window.getFromLS = function(name, defaultValue) {
    let item = window.localStorage.getItem(name);
    if (item == null) {
        return defaultValue;
    }
    return item;
}
window.splitPrice = function(price) {
    price = price.toFixed(2);
    let parts = price.split(".");
    return {
        full: parts[0],
        fractional: parts[1]
    };
}

window.oneElementStringToHTML = function(str) {
    let parser = new DOMParser();
    return parser.parseFromString(str, "text/html").body.firstElementChild;
}