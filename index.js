const leftArr = document.querySelector('.fa-chevron-left');
const rightArr = document.querySelector('.fa-chevron-right');
const counter = document.getElementById('counter');
let count = 0;
counter.innerText = count; 

leftArr.addEventListener('click', slideLeftDecr);
rightArr.addEventListener('click', slideRightIncr);

function slideLeftDecr() {
  if (count > 0) {
    counter.classList.add('slideLeft');
    setTimeout(() => {
      count--;
      counter.innerText = count; 
      counter.classList.remove('slideLeft');
    }, 600);
  } else {
    counter.innerText = count; 
  }
}

function slideRightIncr() {
    counter.classList.add('slideRight');
    setTimeout(() => {
      count++;
      counter.innerText = count; 
      counter.classList.remove('slideRight');
    }, 600);
}


