let bookLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function(){
//       return `"${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}"`;
//   }
// }

function Book() {
  this.init = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return `"${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}"`;
    }

    return this;
  }
}

function addBookToLibrary() {
  // do stuff here 
}

let book1 = Object.create(Book).init("Telecoms Fundamentals","N.E. Ramashia", 566, "True");
console.log(book1);

console.log("qwqwqw")