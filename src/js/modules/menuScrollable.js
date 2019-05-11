let isMobile,
  SELECTED_CLASS = null,
  MENU_CLASS = null,
  array = [],
  $elements;

const updateArray = el => {
  array.push(el.dataset.target);
}

const updateMobileBreadcrumb = (menu, label) => {
  menu.siblings(".cybersolution-open-menu").find(".page-active").text(label);
}

const updateElementClass = label => {
  $elements.removeClass(SELECTED_CLASS);
  $(MENU_CLASS).find(`[data-target=${label}]`).addClass(SELECTED_CLASS);
}

const activeMenuOnScroll = () => {
  for (let i = 0; i <= $elements.length - 1; i++) {
    if ($(window).height() + $(window).scrollTop() > $(document).height() - 10) {
      updateArray($elements[i]);
    } else if ($(window).scrollTop() >= $("#" + $elements[i].dataset.target).offset().top - 100) {
      updateArray($elements[i]);
    }
  }
  updateElementClass(array[array.length - 1]);
  if (isMobile) updateMobileBreadcrumb($(MENU_CLASS), array[array.length - 1]);
  array = [];
}

const activeMenuOnClick = () => {
  $elements.each(function (el) {
    $(this).on("click", function () {
      $('html,body').animate({
        scrollTop: $("#" + $(this).data("target")).offset().top - 90
      }, "slow");
    })
  });
}


const menuScrollable = () => {
  isMobile = $(window).width() <= 480 ? "-mobile" : "";
  SELECTED_CLASS = "selected";
  MENU_CLASS = `.cybersolution-nav${isMobile}`,
  $elements = $(MENU_CLASS).find("li");
  activeMenuOnScroll();
  $(window).on("scroll", function () {
    activeMenuOnScroll();
  });
  activeMenuOnClick();
}

export default menuScrollable;