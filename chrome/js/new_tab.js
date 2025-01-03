'use strict';

const dark_theme_media_query = window.matchMedia(
  '(prefers-color-scheme: light)'
);
const icon_sizes = [16, 24, 32, 48, 64, 128];

const set_title = () => {
  document.querySelector('title').textContent =
    chrome.i18n.getMessage('new_tab_title_text');
};

const set_icon = () => {
  const icon_els = document.querySelectorAll('.icon');

  icon_sizes.forEach((icon_size, i) => {
    const icon_el = icon_els[i];
    const theme = dark_theme_media_query.matches ? 'light' : 'dark';

    icon_el.href = `../icons/icon_${theme + icon_size}.png`;
  });
};

set_title();
set_icon();

dark_theme_media_query.addEventListener('change', set_icon);
