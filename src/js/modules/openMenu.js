const NAV = ".cybersolution-nav-mobile",
  NAV_LINK = `${NAV} li`,
  TRIGGERS = ".cybersolution-open-menu, .cybersolution-close-menu",
  OVERLAY = ".cybersolution-nav-mobile__overlay",
  CLICKABLE_ELEMENTS = `${TRIGGERS}, ${NAV_LINK}, ${OVERLAY}`,
  OPEN_CLASS = "open";

const toggleClass = () => {
  $(NAV).toggleClass(OPEN_CLASS);
}

const openMenu = () => {
  $(CLICKABLE_ELEMENTS).on("click", toggleClass);
}

export default openMenu;