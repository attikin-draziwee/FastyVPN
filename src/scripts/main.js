let isModal = false;

function copyClipBoard() {
  navigator.clipboard.writeText("3DAYSFREE");
}
  
function clearClass(className) {
  for (let i of document.querySelectorAll(`.${className}`))
    i.classList.remove(className);
}