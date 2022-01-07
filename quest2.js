let img = document.querySelector('#the-killers-pic');
let skip = document.querySelector('#skip');
let back = document.querySelector('#spre');

skip.addEventListener('click', () => {
  img.src = 'images/green_day.jpg';
})
back.addEventListener('click', () => {
  img.src = 'images/linkin_park.jpg';
})
