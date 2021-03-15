$(document).ready(function() {
    $(function() {
        let slider = $("[price-slider]");
        let minValue = slider.attr("range-min")*1;
        let maxValue = slider.attr("range-max")*1;
        $("#max-value").html(maxValue);
        $("#slider").slider({
            range: true,
            min: minValue,
            max: maxValue,
            values: [minValue, maxValue],
            slide: function(event, ui) {
                $("#min-value").html(ui.values[0]);
                $("#max-value").html(ui.values[1]);
            }
        });
    });
})