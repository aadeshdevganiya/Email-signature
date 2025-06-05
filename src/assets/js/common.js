// header 
$(document).ready(function () {
  $('.burgerMenu').click(function () {
    const nav = $('#navMenu');
    nav.toggleClass('hidden');

    $(this).find('span').eq(0).toggleClass('rotate-45 translate-y-[8px]');
    $(this).find('span').eq(1).toggleClass('opacity-0');
    $(this).find('span').eq(2).toggleClass('rotate-135 translate-y-[-8px]');

    // Animate when menu opens
    if (!nav.hasClass('hidden')) {
      animateResponsiveNavItems();
    }
  });
});

// pricing-banner
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("billing-toggle");
  const indicator = document.getElementById("toggle-indicator");
  const monthlyLabel = document.getElementById("label-monthly");
  const annuallyLabel = document.getElementById("label-annually");

  let isMonthly = true;

  toggle.addEventListener("click", () => {
    isMonthly = !isMonthly;

    if (isMonthly) {
      indicator.classList.remove("translate-x-4", "sm:translate-x-7");
      monthlyLabel.classList.remove("text-gray-500");
      monthlyLabel.classList.add("text-black");
      annuallyLabel.classList.remove("text-black");
      annuallyLabel.classList.add("text-gray-500");
    } else {
      indicator.classList.add("translate-x-4", "sm:translate-x-7");
      monthlyLabel.classList.remove("text-black");
      monthlyLabel.classList.add("text-gray-500");
      annuallyLabel.classList.remove("text-gray-500");
      annuallyLabel.classList.add("text-black");
    }
  });
});

// accordiant
$(document).ready(function () {
  const first = $('[data-target="#accordion1"]');
  $('#accordion1').slideDown();
  first.find('img.toggle-icon').attr('src', 'assets/images/svg/minus.svg');

  $('[data-toggle="accordion"]').click(function () {
    const target = $(this).data('target');
    const icon = $(this).find('img.toggle-icon');
    const isOpen = $(target).is(':visible');

    $('.accordion-content').slideUp();
    $('.toggle-icon').attr('src', 'assets/images/svg/plus-white.svg');

    if (!isOpen) {
      $(target).slideDown();
      icon.attr('src', 'assets/images/svg/minus.svg');
    }
  });
});

// tablist 
document.querySelectorAll('[role="tab"]').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('[role="tab"]').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.add('hidden');
    });

    this.classList.add('active');
    this.setAttribute('aria-selected', 'true');

    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.remove('hidden');
  });
});

// Year Cout
document.getElementById('year').textContent = new Date().getFullYear();

