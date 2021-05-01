const overlay = document.querySelector('.overlay');
const showForm = document.querySelector('.add-btn');
const closeForm = document.querySelector('.close');

const form = document.querySelector('#book-form');
const author = form.querySelector('#book-author');
const title = form.querySelector('#book-title');
const pages = form.querySelector('#pages');
const read = form.querySelector('#read-book');

const shelf = document.querySelector('.shelf');

const bookClasses = ['col-md-6', 'offset-md-3', 'text-center', 'bg-light', 'm-2', 'p-4', 'new-book'];
const readBtnClasses = ['btn', 'btn-outline-success', 'mb-3'];
const notReadClasses = ['btn', 'btn-outline-secondary', 'mb-3'];
const removeBtnClasses = ['btn', 'btn-warning', 'w-100'];

function close() {
  overlay.classList.remove('open');
}

showForm.addEventListener('click', () => overlay.classList.add('open'));
closeForm.addEventListener('click', close);