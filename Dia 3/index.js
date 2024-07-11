const book = {
  bookTitle: "Atomic Habits",
  author: "James Clear",
  bookPages: 306,
  bookYear: 2018,
  bookChapters: {
    chap1: "Fundamentals",
    chap2: "The 1% Rule",
  },
  printBook: function () {
    console.log("printing...");
  },
};

book.printBook();
