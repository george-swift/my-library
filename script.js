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

let myLibrary = [];
let addedBook;

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function toggleRead(e) {
  if (e.target.textContent.includes('Yes')) {
    e.target.classList.remove(...readBtnClasses);
    e.target.classList.add(...notReadClasses);
    e.target.textContent = 'Not Read Yet';
  } else {
    e.target.classList.remove(...notReadClasses);
    e.target.classList.add(...readBtnClasses);
    e.target.textContent = 'Read: Yes';
  }
}

function display(book) {
  const bookContainer = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookContainer.classList.add(...bookClasses);
  shelf.appendChild(bookContainer);

  removeBtn.classList.add(...removeBtnClasses);
  removeBtn.setAttribute('type', 'button');
  removeBtn.textContent = 'Remove book';

  Object.entries(book).forEach(([key, value]) => {
    const idx = myLibrary.indexOf(book);
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    if (key === 'title') {
      h4.textContent = value;
    } else if (key === 'author') {
      h5.textContent = `by ${value}`;
      h5.classList.add('mb3');
    } else if (key === 'pages') {
      p.textContent = `No. of pages: ${value}`;
    } else if (key === 'read') {
      if (value) {
        readBtn.classList.add(...readBtnClasses);
        readBtn.textContent = 'Read: Yes';
      } else {
        readBtn.classList.add(...notReadClasses);
        readBtn.textContent = 'Not read yet';
      }
    }
    readBtn.setAttribute('type', 'button');
    bookContainer.append(h4, h5, p, readBtn);
    removeBtn.setAttribute('data-idx', `${idx}`);
  });

  bookContainer.appendChild(removeBtn);
  readBtn.addEventListener('click', toggleRead);

  removeBtn.addEventListener('click', (e) => {
    myLibrary.splice(e.target.dataset.idx, 1);
    bookContainer.remove();
  });
}

function addBookToLibrary(e) {
  e.preventDefault();

  addedBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked,
  );

  myLibrary.push(addedBook);
  display(addedBook);
  form.reset();
  close();
}

function close() {
  overlay.classList.remove('open');
}

showForm.addEventListener('click', () => overlay.classList.add('open'));
closeForm.addEventListener('click', close);

form.addEventListener('submit', addBookToLibrary);