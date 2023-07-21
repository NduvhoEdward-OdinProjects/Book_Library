let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleElement = document.createElement('span');
    titleElement.textContent = `Title: ${book.title}`;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement('span');
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement('span');
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pagesElement);


    const readElement = document.createElement('span');
    readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    bookCard.appendChild(readElement);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('data-index', index);
    bookCard.appendChild(removeButton);

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = 'Toggle Read';
    toggleReadButton.classList.add('toggle-read-button');
    toggleReadButton.setAttribute('data-index', index);
    bookCard.appendChild(toggleReadButton);

    bookContainer.appendChild(bookCard);
  });
}


function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

const newBookButton = document.querySelector('.new-book-button');
document.getElementById('book-container').addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('remove-button')) {
    const index = parseInt(target.getAttribute('data-index'));
    removeBook(index);
  } else if (target.classList.contains('toggle-read-button')) {
    const index = parseInt(target.getAttribute('data-index'));
    toggleReadStatus(index);
  }
});

// Manually add some books for demonstration purposes
addBookToLibrary('Book 1', 'Author 1', 300, true);
addBookToLibrary('Book 2', 'Author 2', 250, false);
addBookToLibrary('Book 3', 'Author 3', 400, true);

// Display the books
displayBooks();


// Form Modal
const modalContainer = document.getElementById('add-modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const addBookForm = document.getElementById('add-book-form');
const bookContainer = document.getElementById('book-container');

openModalButton.addEventListener('click', function () {
  modalContainer.classList.add('show-modal');
  bookContainer.classList.add('blur');
});

closeModalButton.addEventListener('click', function () {
modalContainer.classList.remove('show-modal')
});

addBookForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;

  if (title && author && !isNaN(pages)) {
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    addBookForm.reset(); // Clear form fields after submission
    modalContainer.style.display = 'none'; // Hide the modal after adding the book
  }
});