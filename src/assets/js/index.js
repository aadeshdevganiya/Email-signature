
$('.about-slider').slick({
    dots: false,
    arrows: true, // MUST be true for custom arrows to work
    prevArrow: $('#prevArrow'),
    nextArrow: $('#nextArrow'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});



$('.user-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: $('#user-prevArrow'),
    nextArrow: $('#user-nextArrow'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});



document.addEventListener("DOMContentLoaded", function () {
    const tabIds = [
        "main",
        "social",
        "disclaimer",
        "banner",
        "style",
        "apps"
    ];

    tabIds.forEach(id => {
        const tab = document.getElementById("tab-" + id);
        const content = document.getElementById("content-" + id);

        tab.addEventListener("click", () => {
            // Reset all tabs
            tabIds.forEach(resetId => {
                const resetTab = document.getElementById("tab-" + resetId);
                const resetContent = document.getElementById("content-" + resetId);

                resetTab.classList.remove("text-orange-500", "font-semibold", "border-b-2", "border-orange-500", "pb-1");
                resetTab.classList.add("text-gray-400");

                resetContent.classList.add("hidden");
                resetContent.classList.remove("block");
            });

            // Activate current tab and content
            tab.classList.add("text-orange-500", "font-semibold", "border-b-2", "border-orange-500", "pb-1");
            tab.classList.remove("text-gray-400");

            content.classList.remove("hidden");
            content.classList.add("block");
        });
    });
});