const buttonElm = document.getElementById('button-order');

setTimeout(() => {
  buttonElm.disabled = false;
  buttonElm.textContent = 'Objednat';
}, 8000);

buttonElm.addEventListener('click', () => {
  buttonElm.textContent = 'Objednáno';
});
