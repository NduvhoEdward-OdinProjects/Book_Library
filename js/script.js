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
console.log(newBookButton);

newBookButton.addEventListener('click', () => {
  const title = prompt('Enter book title:');
  const author = prompt('Enter book author:');
  const pages = prompt('Enter number of pages:');
  const read = confirm('Has the book been read?');

  if (title && author && pages) {
    addBookToLibrary(title, author, pages, read);
    displayBooks();
  }
});

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
