let myLibrary = [];

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const GoT = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const Harry = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')

function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log(book)
}
// addBookToLibrary(theHobbit)
// addBookToLibrary(GoT)
// addBookToLibrary(Harry)

const books = document.querySelector('.books')
const div = document.createElement('div')
const p = document.createElement('p')

function showBooks () {
        len = myLibrary.length
        console.log(len)
        console.log(myLibrary[len-1])
        target = myLibrary[len-1]
        const div = document.createElement('div')
        div.className = 'info'
        books.append(div)
        for (item in target) {
            console.log(target[item])
            const p = document.createElement('p')
            div.append(p)
            p.innerText = (target[item])
        }

}

function Books(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
  }



  function addBook (title, author, pages ) {
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    myLibrary.push({title, author, pages})

  }
  console.log(myLibrary)


const bookBtn = document.querySelector('.bookBtn')
bookBtn.addEventListener('click', () => {
    openTheForm()
})
const submit = document.querySelector('.submit')
submit.addEventListener('click', () => {
    addBook()
    closeTheForm()
    showBooks()
})

console.log(myLibrary)
//   closeTheForm()
//   openTheForm()


function openTheForm() {
    document.getElementById("form").style.display = "block";
  }

  function closeTheForm() {
    document.getElementById("form").style.display = "none";
  }
