let newUlElems = '';

for (let i = 0; i < images.length; i++) {
  // some validation would be a good idea if we were using an API
  if (!images[i].src || !images[i].alt) {
    throw new Error('invalid image')
  }

  // create html strings
  newUlElems += (`
    <li class="list-group-item"> 
      <img class="image-from-library" src="${images[i].src}" alt="${images[i].alt}" />
    </li>
    `)
};

const listGroupElem = document.querySelector('.list-group');

listGroupElem.innerHTML = newUlElems;
