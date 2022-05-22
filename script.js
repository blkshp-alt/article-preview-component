

const shareBtn = document.querySelector('.share-btn');
const hideBtn = document.querySelector('.share-hide');
const toolTip = document.querySelector('.share-tooltip');

shareBtn.addEventListener("click", () =>{
  if (toolTip.classList !== 'close') {
    toolTip.classList.toggle('close');
  }
});

hideBtn.addEventListener("click", () =>{
  toolTip.classList.add('close');
})