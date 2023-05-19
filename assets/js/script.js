/* WHEN I CLICK THE WORK BTNS IT WILL CHANGE THE WORK DESC */

// UNIVERSITY OF TORONTO BUTTON
var uBTN = document.getElementById('uBTN');
var werpDesc = document.getElementById('werpDesc');
var werpDescH1 = document.getElementById('werpDescH1');
var werpDescP = document.getElementById('werpDescP');
var werpDescH2 = document.getElementById('werpDescH2');
var werpDescH3 = document.getElementById('werpDescH3');
var werpDescH4 = document.getElementById('werpDescH4');

function changeDesc() {
    werpDesc.classList.toggle('changed');
}

uBTN.addEventListener('click', changeDesc)

// FANSHAWE COLLEGE BUTTON
var fBTN = document.getElementById('fBTN');

function changeDesc1() {
    
    // werpDescH1
    const fContent = 
    ' Computer Programming and Analysis <span class="one"> @ Fanshawe College </span> '

    // werpDescP
    const pContent =
    ''

    //werpDescH1
    werpDescH1.textContent = fContent;
    werpDescH1.innerHTML = fContent;
    werpDesc.classList.toggle('changed');

    return werpDesc;
}

fBTN.addEventListener('click', changeDesc1)

function changeText() {
  const myDiv = document.getElementById('myDiv');
  const newContent = 'This is the new text.';
  myDiv.textContent = newContent;
}