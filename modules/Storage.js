export const getBook = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
};

export const addBook = (newBook) => {
  const books = getBook();
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
};

export const removeBook = (title) => {
  const books = getBook();
  const index = books.findIndex((book) => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
};
