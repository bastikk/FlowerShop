document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel.carousel-slider");
    M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: true
    });
});