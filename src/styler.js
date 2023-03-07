function toggleNightMode() {
  const style = document.getElementById('style-link');

  if (style.getAttribute('href') == 'src/style-light.css') {
    style.setAttribute('href', 'src/style-dark.css');
  } else {
    style.setAttribute('href', 'src/style-light.css');
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
