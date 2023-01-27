window.onload = function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("newBookBtn");
  const span = document.getElementsByClassName("close")[0];
  const submitBtn = document.getElementById("submitBtn");
  const books = document.querySelector("#books");
  const form = document.getElementById("myForm");
  const myLibrary = [];

  // clicking New Book button will show the modal window
  btn.onclick = function () {
    modal.style.display = "block";
    form.reset();
  };

  // clicking the X on the modal window closes it
  span.onclick = function () {
    modal.style.display = "none";
    form.reset();
  };

  // clicking out of the modal window closes it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      form.reset();
    }
  };

  // clicking submit will add the newBook div to the books on the bookshelf with the read and remove buttons
  submitBtn.onclick = function (event) {
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("newBook");
    books.appendChild(newBookDiv);

    const newBookInfo = document.createElement("div");
    newBookInfo.classList.add("bookInfo");
    newBookDiv.appendChild(newBookInfo);

    const strTitle = document.getElementById("title").value;
    const strAuthor = document.getElementById("author").value;
    const strPages = document.getElementById("pages").value;
    const strRead = document.getElementById("read").value;
    const strNotRead = document.getElementById("not_read").value;
    const addBook = new Book(
      strTitle,
      strAuthor,
      strPages,
      strRead,
      strNotRead
    );

    addBookToLibrary(addBook);
    console.log("Are we here instead?");

    const newBookBtn = document.createElement("div");
    newBookBtn.classList.add("bookBtn");
    newBookDiv.appendChild(newBookBtn);

    const readBtn = document.createElement("button");
    readBtn.classList.add("toggle_read");
    readBtn.textContent = "Read";
    newBookBtn.appendChild(readBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("toggle_remove");
    removeBtn.textContent = "Remove";
    newBookBtn.appendChild(removeBtn);

    modal.style.display = "none";
    form.reset();
    event.preventDefault();
  };

  function Book(title, author, pages, read, notRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.not_read = notRead;
    console.log("did we get into Book?" + title);
  }

  function addBookToLibrary(formResponse) {
    myLibrary.push(formResponse);
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);
      document.getElementsByClassName("bookInfo")[i].innerHTML =
        myLibrary[i].title +
        myLibrary[i].author +
        myLibrary[i].pages +
        myLibrary[i].read +
        myLibrary[i].notRead;
      console.log("are we inside the loop?");
    }
    console.log("did we get into addBook?");
  }
};
