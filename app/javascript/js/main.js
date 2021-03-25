(function() {
    Array.prototype.syncForEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }

    let selects = Object.values(document.querySelectorAll(".beautiful-select-wrapper"));

    selects.syncForEach(select => {
        if (select == null) {
            return;
        }

        select.addEventListener('click', function() {
            this.querySelector('.beautiful-select').classList.toggle('open');
        });

        for (const option of select.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.beautiful-select').querySelector('.beautiful-select-trigger span').textContent = this.textContent;
                }
            })
        };
    });

    window.addEventListener('click', function(e) {
        const selects = document.querySelectorAll('.beautiful-select');
        for (let i = 0; i < selects.length; i++) {
            if (!selects[i]?.contains(e.target)) {
                selects[i].classList.remove('open');
            }
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
    document.addEventListener("input", function(event) {
        if (event.target.closest(".integerField") != null) {
            event.target.value = window.formatToNumber(event.target.number);
        }
    });
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
