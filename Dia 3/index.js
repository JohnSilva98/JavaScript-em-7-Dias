function createBook(title, author, pages, year) {
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

const book1 = createBook("Atomic Habits", "James Clear", 306, 2018);
const book2 = createBook("Think and grow rich", "Napolean Ceasar", 450, 2010);
console.log(book1);
console.log(book2);
