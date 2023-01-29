window.onload = function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("newBookBtn");
  const span = document.getElementsByClassName("close")[0];
  const submitBtn = document.getElementById("submitBtn");
  const books = document.querySelector("#books");
  const form = document.getElementById("myForm");
  let myLibrary = [];

  // Book object constructor
  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // Add each form submission book to the library array
  function addBookToLibrary() {
    books.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      // Book div created aka Grandparent Div
      const newBookDiv = document.createElement("div");
      newBookDiv.classList.add("newBook");
      books.appendChild(newBookDiv);

      // 1st Parent Div
      const newBookInfo = document.createElement("div");
      newBookInfo.classList.add("bookInfo");
      newBookDiv.appendChild(newBookInfo);

      // Children of 1st Parent Div
      const newBookTitle = document.createElement("div");
      newBookTitle.classList.add("bookTitle");
      newBookInfo.appendChild(newBookTitle);

      const newBookAuthor = document.createElement("div");
      newBookAuthor.classList.add("bookAuthor");
      newBookInfo.appendChild(newBookAuthor);

      const newBookPages = document.createElement("div");
      newBookPages.classList.add("bookPages");
      newBookInfo.appendChild(newBookPages);

      // 2nd Parent Div
      const newBookBtn = document.createElement("div");
      newBookBtn.classList.add("bookBtn");
      newBookDiv.appendChild(newBookBtn);

      // Children of 2nd Parent Div
      const readBtn = document.createElement("button");
      readBtn.classList.add("toggle_read");
      readBtn.textContent = "Read";
      newBookBtn.appendChild(readBtn);

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("toggle_remove");
      removeBtn.textContent = "Remove";
      newBookBtn.appendChild(removeBtn);

      // Button onclick functions:
      readBtn.onclick = function (clickEvent) {
        const buttonText = clickEvent.target.innerHTML;
        if (buttonText === "Read") {
          clickEvent.target.innerHTML = "Not Read";
        } else if (buttonText === "Not Read") {
          clickEvent.target.innerHTML = "Read";
        }
      };

      removeBtn.onclick = function (removeEvent) {
        const removeIt =
          removeEvent.target.parentElement.parentElement.firstChild.firstChild
            .innerHTML;
        myLibrary = myLibrary.filter((book) => book.title !== removeIt);
        addBookToLibrary();
      };

      // Changing innerHTML of the above div's
      document.getElementsByClassName("bookTitle")[i].innerHTML =
        myLibrary[i].title;
      document.getElementsByClassName("bookAuthor")[i].innerHTML =
        "by " + myLibrary[i].author;
      document.getElementsByClassName("bookPages")[i].innerHTML =
        myLibrary[i].pages + "pages";
      document.getElementsByClassName("toggle_read")[i].innerHTML =
        myLibrary[i].read;
    }
  }

  // Modal functions
  btn.onclick = function () {
    modal.style.display = "block";
    form.reset();
  };

  span.onclick = function () {
    modal.style.display = "none";
    form.reset();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      form.reset();
    }
  };

  // Clicking submit on the form triggers the following:
  submitBtn.onclick = function (event) {
    const strTitle = document.getElementById("title").value;
    const strAuthor = document.getElementById("author").value;
    const strPages = document.getElementById("pages").value;
    const strRead = document.querySelector('input[name="read"]:checked').value;
    const addBook = new Book(strTitle, strAuthor, strPages, strRead);

    myLibrary.push(addBook);

    addBookToLibrary();

    modal.style.display = "none";
    form.reset();
    event.preventDefault();
  };
};
