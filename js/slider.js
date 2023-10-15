const toggleBtn = document.querySelector('.toggle-button');
const toggleBtnIcon = document.querySelector('.toggle-button i');
const dropDown = document.querySelector('.dropdown-mobile');

toggleBtn.onclick = function () {
dropDown.classList.toggle('open');
};