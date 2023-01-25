window.onload = function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("newBookBtn");
  const span = document.getElementsByClassName("close")[0];
  const submitBtn = document.getElementById("submitBtn");
  const books = document.querySelector("#books");

  // clicking New Book button will show the modal window
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // clicking the X on the modal window closes it
  span.onclick = function () {
    modal.style.display = "none";
  };

  // clicking out of the modal window closes it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // clicking submit will add the newBook div to the books on the bookshelf with the read and remove buttons
  submitBtn.onclick = function (event) {
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("newBook");
    const text = document.createTextNode("test text");
    newBookDiv.appendChild(text);

    books.appendChild(newBookDiv);
    modal.style.display = "none";

    const readBtn = document.createElement("button");
    readBtn.classList.add("toggle_read");
    readBtn.textContent = "Read";
    const buttons = document.querySelector(".buttons");
    buttons.appendChild(readBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("toggle_remove");
    removeBtn.textContent = "Remove";
    buttons.appendChild(removeBtn);
    event.preventDefault();
  };

  // my library array where books will be stores
  const myLibrary = [];

  // function to add new books to the array
  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // example book being added to the array
  const addBook = new Book("Autobiography", "Self", "200", "Read");
  // console.log(addBook.title, addBook.author, addBook.pages, addBook.read);

  // Write a function that loops through the array and displays each book on the page.
  function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);
    }
  }
};
