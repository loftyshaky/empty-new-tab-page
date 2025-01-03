'use strict';

const set_title = () => {
  document.querySelector('title').textContent =
    chrome.i18n.getMessage('new_tab_title_text');
};

set_title();