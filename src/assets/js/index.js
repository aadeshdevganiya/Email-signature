
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
    const tabIds = ["main", "social", "disclaimer", "banner", "style", "apps"];

    function activateTab(id) {
        tabIds.forEach(tid => {
            const tab = document.getElementById("tab-" + tid);
            const content = document.getElementById("content-" + tid);

            if (tid === id) {
                tab.classList.add("text-orange-500", "font-semibold", "border-b-2", "border-orange-500", "pb-5");
                tab.classList.remove("text-gray-400");

                content.classList.remove("hidden");
                content.classList.add("block");
            } else {
                tab.classList.remove("text-orange-500", "font-semibold", "border-b-2", "border-orange-500", "pb-5");
                tab.classList.add("text-gray-400");

                content.classList.add("hidden");
                content.classList.remove("block");
            }
        });
    }

    // Initialize default tab
    activateTab("main");

    // Tab click handlers
    tabIds.forEach(id => {
        const tab = document.getElementById("tab-" + id);
        if (tab) {
            tab.addEventListener("click", () => activateTab(id));
        }
    });

    // Handle PREV and NEXT
    document.querySelectorAll(".nav-prev").forEach(btn => {
        btn.addEventListener("click", () => {
            const currentContent = btn.closest("div[id^='content-']");
            const currentId = currentContent.id.replace("content-", "");
            const currentIndex = tabIds.indexOf(currentId);

            if (currentIndex > 0) {
                const prevId = tabIds[currentIndex - 1];
                activateTab(prevId);
            }
        });
    });

    document.querySelectorAll(".nav-next").forEach(btn => {
        btn.addEventListener("click", () => {
            const currentContent = btn.closest("div[id^='content-']");
            const currentId = currentContent.id.replace("content-", "");
            const currentIndex = tabIds.indexOf(currentId);

            if (currentIndex < tabIds.length - 1) {
                const nextId = tabIds[currentIndex + 1];
                activateTab(nextId);
            }
        });
    });
});

