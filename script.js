'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); //bringing back class with classList.add property
  overlay.classList.add('hidden');
};

//querySelectorAll saves all the elements in a list that we can loop through
const btnsOpenModal = document.querySelectorAll('.show-modal');
//looping through list and showing the content of it
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//listening to the key press events with keydown, the function has parameter e which is the event
document.addEventListener('keydown', function (e) {
  //   console.log(e); // e is the event object
  //checking if modal contains 'hidden' class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
