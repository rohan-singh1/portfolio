/**
 * To switch between dark mode and light mode
 */
function toggleNightMode() {
  const style = document.getElementById('style-link');

  if (style.getAttribute('href') == './src/style-light.css') {
    style.setAttribute('href', './src/style-dark.css');
  } else {
    style.setAttribute('href', './src/style-light.css');
  }

  const images = document.getElementsByTagName('img');
  for (const image of images) {
    const src = image.getAttribute('src');
    if (src.includes('img/light-mode')) {
      image.setAttribute('src', src.replace('/light-mode/', '/dark-mode/'));
    } else if (src.includes('img/dark-mode')) {
      image.setAttribute('src', src.replace('/dark-mode/', '/light-mode/'));
    }
  }
}

/**
 * To automatically detect dark/light mode and
 * implement the correct stylesheet accordingly
 */
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  toggleNightMode();
}

/**
 * To toggle the expanded/collapsed state of collapsible sections
 */
const collapsibleElements = document.getElementsByClassName('collapsible');
for (let i = 0; i < collapsibleElements.length; i++) {
  collapsibleElements[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

/**
 * To make the content adjust to updated size of
 * the collapsible sections on resizing the window
 */
window.addEventListener('resize', function (event) {
  const expandedElements = document.getElementsByClassName('section-content');
  for (let i = 0; i < expandedElements.length; i++) {
    if (expandedElements[i].style.maxHeight) {
      expandedElements[i].style.maxHeight =
        expandedElements[i].scrollHeight + 'px';
    }
  }
});
