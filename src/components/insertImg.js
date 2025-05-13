function insertImg(arg1, arg2, arg3, arg4,arg5,arg6) {
  // arg1 is the parent div - arg2 is the source
  // arg3 is the alt text - arg4 is the class
  // arg5 is the width - arg6 is the height
  const img = document.createElement('img');
  img.setAttribute('src', arg2);
  img.setAttribute('alt', arg3);
  img.setAttribute('width', arg5);
  img.setAttribute('height', arg6);
  img.classList.add(arg4);
  arg1.appendChild(img);
}

export { insertImg };
