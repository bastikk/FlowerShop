document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel.carousel-slider");
    M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: true
    });

    const ranges = document.querySelectorAll("input[type=range]");
    M.Range.init(ranges);

    const selects = document.querySelectorAll(".beautifulSelect");
    M.FormSelect.init(selects, {});

    let range = document.getElementById("products-price-range");
    if (range != null) {
        noUiSlider.create(range, {
            start: [0, 1000],
            connect: true,
            step: 1,
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 1000
            },
            format: wNumb({
                decimals: 0,
                encoder: function(value) {
                    return Math.round(value);
                }
            })
        });
    }

    range.noUiSlider.on("update", function(values, handle) {
        const left = document.querySelector(`[data-range='${range.id}-left']`);
        const right = document.querySelector(`[data-range='${range.id}-right']`);
        left.innerHTML = Math.round(values[0]) + "";
        right.innerHTML = Math.round(values[1]) + "";

        // const left = Math.round(values[0]);
        // const right = Math.round(values[1]);
        // range.noUiSlider.set([left, right]);
    });
});