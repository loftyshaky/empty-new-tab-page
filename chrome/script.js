"use strict";

const dark_mode_media_query = window.matchMedia("(prefers-color-scheme: dark)");

const set_title = () => {
  document.querySelector("title").textContent =
    chrome.i18n.getMessage("new_tab_title_text");
};

const set_icon = () => {
  const icon_el = document.querySelector(".icon");
  const browser_is_in_dark_mode = dark_mode_media_query.matches;
  console.log(browser_is_in_dark_mode, 676767);
  if (browser_is_in_dark_mode) {
    icon_el.href = "new_tab_dark_mode.png";
  } else {
    icon_el.href = "new_tab.png";
  }
};

set_title();
set_icon();

dark_mode_media_query.addEventListener("change", set_icon);
