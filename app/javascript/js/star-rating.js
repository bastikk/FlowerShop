(function() {
    let ratingForm = document.querySelector(".star-rating");
    if (ratingForm == null) {
        return;
    }
    let targetSelector = ratingForm.getAttribute("rating-target");
    let target = document.querySelector(targetSelector);
    let empty = ratingForm.querySelector("i.empty");
    let cancelButton = ratingForm.querySelector(".clearSelected");

    let stars = ratingForm.querySelectorAll(".stars i");

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.addEventListener("click", function() {
            cancelSelected();
            this.classList.add("selected");
            target.value = i;
        });
    }

    cancelButton.addEventListener("click", function() {
        cancelSelected();
        empty.classList.add("selected");
        target.value = 0;
    });

    function cancelSelected() {
        let selected = ratingForm.querySelector(".stars i.selected");
        selected.classList.remove("selected");
    }
})();