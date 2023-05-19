/* WHEN I CLICK THE WORK BTNS IT WILL CHANGE THE WORK DESC */
var uBTN = document.getElementById('uBTN');
var werpDesc = document.getElementById('werpDesc');

function changeDesc() {
    werpDesc.classList.toggle('changed');
}

uBTN.addEventListener('click', changeDesc)