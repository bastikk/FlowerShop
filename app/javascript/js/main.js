import "./helper-functions"

(function() {
    let select = document.querySelector(".beautiful-select-wrapper");
    if (select == null) {
        return;
    }

    document.querySelector('.beautiful-select-wrapper').addEventListener('click', function() {
        this.querySelector('.beautiful-select').classList.toggle('open');
    });

    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.beautiful-select').querySelector('.beautiful-select-trigger span').textContent = this.textContent;
            }
        })
    };

    window.addEventListener('click', function(e) {
        const select = document.querySelector('.beautiful-select')
        if (!select?.contains(e.target)) {
            select.classList.remove('open');
        }
    });

})();

(function() {
    let triggers = document.querySelectorAll(".view-mode-trigger");

    document.querySelectorAll(".view-mode-trigger").forEach(trigger => {
        trigger.addEventListener("click", function() {
            for (let i = 0; i < triggers.length; i++) {
                triggers[i].classList.remove("active");
            }
            this.classList.add("active");
        });
    });
})();

(function() {
    let integerFields = document.querySelectorAll(".integerField");

    for (let i = 0; i < integerFields.length; i++) {
        let field = integerFields[i];
        window.validElementValueToInteger(field);
    }
})();

let categories = document.querySelectorAll(".data-category");

for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    category.addEventListener("click", function() {
        let selectedCategory = document.querySelector(".data-category.selected");
        selectedCategory?.classList.remove("selected");

        this.classList.add("selected");
    });
}

$('#recipeCarousel').carousel({
    interval: 10000
})

$('.multi-carousel.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$("[data-multi-slide='prev']").on("click", function() {
    $("#adsCarousel").carousel("prev");
});

$("[data-multi-slide='next']").on("click", function() {
    $("#adsCarousel").carousel("next");
});
