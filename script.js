let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
  const books = document.querySelector('.books');

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function showBooks() {
    books.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
      const div = document.createElement('div');
      div.id = `info${i}`;
      books.appendChild(div);
      const button = document.createElement('button');
      for (const item in myLibrary[i]) {
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerText = myLibrary[i][item];
        if (myLibrary[i][item] === 'Not Read') {
          const btn = document.createElement('button');
          btn.classList.add('unread');
          btn.id = `testing${i}`;
          btn.textContent = p.textContent;
          p.parentNode.replaceChild(btn, p);
          btn.addEventListener('click', () => changeReadStatus(i));
        } else if (myLibrary[i][item] === 'Read') {
          const btn = document.createElement('button');
          btn.classList.add('read');
          btn.id = `testing${i}`;
          btn.textContent = p.textContent;
          p.parentNode.replaceChild(btn, p);
          btn.addEventListener('click', () => changeReadStatus(i));
        }
      }
      button.classList.add(`${i}`);
      button.innerText = 'Remove';
      div.appendChild(button);
      button.addEventListener('click', () => takeOut(i));
    }
  }
  showBooks()

  function addBook(title, author, pages, read) {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = `${document.querySelector('#pages').value} pages`;
    read = document.querySelector('#read').checked ? document.querySelector('#read').value : 'Not Read';

    // Check if title already exists in library
    const titleExists = myLibrary.some(book => book.title === title);

    if (titleExists) {
      alert('This book is already in the library so it was not added.');
      return; // Stop execution if title already exists
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }


  function takeOut(i) {
    myLibrary.splice(i, 1);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    showBooks();
  }

  function changeReadStatus(i) {
    if (myLibrary[i].read === 'Read') {
      myLibrary[i].read = 'Not Read';
    } else if (myLibrary[i].read === 'Not Read') {
      myLibrary[i].read = 'Read';
    }
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    showBooks();
  }

  // Load myLibrary from local storage, if it exists
  const storedLibrary = localStorage.getItem('myLibrary');
  if (storedLibrary) {
    myLibrary = JSON.parse(storedLibrary);
  }

  const bookBtn = document.querySelector('.bookBtn');
  bookBtn.addEventListener('click', () => openTheForm());

  const submit = document.querySelector('.submit');
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const requiredInputs = document.querySelectorAll('input[required]');
    const isValid = Array.from(requiredInputs).every(input => input.value);
    const errorMessage = document.querySelector('.errorMessage');

    if (!isValid) {
      errorMessage.textContent = 'All required fields must be filled out.';
      errorMessage.style.color = 'red';
    } else {
      errorMessage.textContent = '';
      addBook();
      closeTheForm();
      showBooks();
      const inputFields = document.querySelectorAll('input');
      Array.from(inputFields).forEach(input => input.value = '');
    }
  });

  function openTheForm() {
    document.getElementById('form').style.display = 'block';
  }


function closeTheForm() {
  document.getElementById("form").style.display = "none";
}
