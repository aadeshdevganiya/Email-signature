//  sidebar
$(document).ready(function () {
    const $sidebar = $('#sidebar');
    const $openBtn = $('#openSidebar');
    const $closeBtn = $('#closeSidebar');

    $openBtn.on('click', function () {
        $sidebar.removeClass('-translate-x-full');
        $('body').addClass('sidebar-open');
    });

    $closeBtn.on('click', function () {
        $sidebar.addClass('-translate-x-full');
        $('body').removeClass('sidebar-open');
    });

    $(document).on('click', function (e) {
        if (
            !$sidebar.is(e.target) &&
            $sidebar.has(e.target).length === 0 &&
            !$openBtn.is(e.target) &&
            $openBtn.has(e.target).length === 0 &&
            !$sidebar.hasClass('-translate-x-full')
        ) {
            $sidebar.addClass('-translate-x-full');
            $('body').removeClass('sidebar-open');
        }
    });
});


// Bell & User Dropdown Hover
$(document).ready(function () {
    $('#userToggle').hover(
        function () {
            $('#userDropdown').stop(true, true).fadeIn(150);
            $('#notifDropdown').fadeOut(100);
            $('.arrow-icon').addClass('rotate-180');
        },
        function () {
            $('#userDropdown').stop(true, true).fadeOut(150);
            $('.arrow-icon').removeClass('rotate-180');
        }
    );
});

// tablist 
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

    activateTab("main");

    tabIds.forEach(id => {
        const tab = document.getElementById("tab-" + id);
        if (tab) {
            tab.addEventListener("click", () => activateTab(id));
        }
    });

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

// editmenu
$('.dashbord-editmenu').click(function () {
    $(this).next('.dashbord-edititems').slideToggle();
});
$('.profile-menu').click(function () {
    $(this).children('.profile-items').slideToggle();
});
$(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.dashbord-editmenu, .profile-menu') && !$(target).parents().is('.dashbord-editmenu, .profile-menu')) { $('.dashbord-edititems, .profile-items').slideUp(); }
});

// table 
$(document).ready(function () {
    $('#myTable').DataTable({
        responsive: true,
        ordering: false
    });
});

// dropdown dashbard
function initDropdown(dropdownId) {
    const button = document.getElementById(`dropdownButton${dropdownId}`);
    const menu = document.getElementById(`dropdownMenu${dropdownId}`);
    const label = document.getElementById(`dropdownLabel${dropdownId}`);
    const arrow = document.getElementById(`arrow${dropdownId}`);

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    });

    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            label.textContent = item.textContent;
            menu.classList.add('hidden');
            arrow.classList.remove('rotate-180');
        });
    });

    // Optional: close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!document.getElementById(`dropdown${dropdownId}`).contains(e.target)) {
            menu.classList.add('hidden');
            arrow.classList.remove('rotate-180');
        }
    });
}

// Initialize both dropdowns
initDropdown(1);
initDropdown(2);


