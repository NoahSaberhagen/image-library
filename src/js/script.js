// Append new image components, then once they are in HTML set each component style
// to provide background images.
const grid = document.querySelector('#grid');
let gridInnerHtml = '';

const icon = `
  <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-m9simb" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CropFreeIcon">
    <path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m2 10H3v4c0 1.1.9 2 2 2h4v-2H5zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2">
    </path>
  </svg>`

for (let i = 0; i < images.length; i++) {

  if (!images[i].src || !images[i].alt) {
    console.error('invalid image data')
  }

  // span is for accessibility
  gridInnerHtml += `
    <div id="container${i}">
      ${icon}
      <input type="checkbox" class="btn-check" id="btncheck${i}" autocomplete="off">
      <label class="btn" for="btncheck${i}" id="image${i}"></label>
      <span class="visually-hidden">${images[i].alt}</span>
    </div>
  `
};

grid.innerHTML = gridInnerHtml;

for (let i = 0; i < images.length; i++) {
  const currentImage = document.querySelector(`#image${i}`);

  currentImage.setAttribute("style", `
    background-image: url('${images[i].src}');
  `)
};
