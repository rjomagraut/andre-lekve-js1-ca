const about = document.querySelector('.about');

function updateDivText() {
  const changeToBanana = document.querySelector('.about').innerText;
  const changeWords = changeToBanana
    .replace(/the/g, 'banana')
    .replace(/The/g, 'Banana');
  document.querySelector('.about').innerText = changeWords;
}

setTimeout(updateDivText, 3000);
