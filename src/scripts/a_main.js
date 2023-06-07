let isModal = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() || md.tablet();
const isOnlyMobile = md.mobile();

function containsClass(className, event) {
  if (event.classList.contains(className))
    event.classList.remove(className);
  else {
    clearClass(className);
    event.classList.add(className);
  }
}

function copyClipBoard() {
  navigator.clipboard.writeText("3DAYSFREE");
}
  
function clearClass(className) {
  for (let i of document.querySelectorAll(`.${className}`))
    i.classList.remove(className);
}

