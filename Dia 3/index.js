function createBook(title, author, pages, year) {
  //factory
  const book = {
    bookTitle: title,
    author: author,
    bookPages: pages,
    bookYear: year,
    printBook: function () {
      console.log("printing...");
    },
  };
  return book;
}

function CreateBook(title, author, pages, year) {
  //constructor

  this.bookTitle = title;
  this.author = author;
  this.ookPages = pages;
  this.bookYear = year;
}

const book1 = createBook("Atomic Habits", "James Clear", 306, 2018);
const book2 = new CrpeateBook(
  "Think and grow rich",
  "Napolean Ceasar",
  450,
  2010
);

console.log(book1);
console.log(book2);
