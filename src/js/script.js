
// Append new image components, then once they are in HTML set each component style
// to provide background images.
const grid = document.querySelector('#grid');
let gridInnerHtml = '';

for (let i = 0; i < images.length; i++) {

  if (!images[i].src || !images[i].alt) {
    console.error('invalid image data')
  }

  // span is for accessibility
  gridInnerHtml += `
    <div id="container${i}">
      <input type="checkbox" class="btn-check" id="btncheck${i}" autocomplete="off">
      <label class="btn" for="btncheck${i}" id="image${i}"></label>
      <span class="visually-hidden">${images[i].alt}</span>
    </div>
  `
}
grid.innerHTML = gridInnerHtml;

for (let i = 0; i < images.length; i++) {
  const currentImage = document.querySelector(`#image${i}`);

  currentImage.setAttribute("style", `
    background-image: url('${images[i].src}');
  `)
}
