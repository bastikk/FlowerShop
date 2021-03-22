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