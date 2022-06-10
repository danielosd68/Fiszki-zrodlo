const copyright = document.createElement('p');

let todayDate = new Date();
let year = todayDate.getFullYear();

copyright.innerHTML = `&copy; Copyright ${year} Chyliński Daniel`;
copyright.classList.add('copy');

document.querySelector('.container').appendChild(copyright);