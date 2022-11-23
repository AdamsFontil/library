let myLibrary = [];
len = myLibrary.length



function addBookToLibrary(book) {
    myLibrary.push(book)
}
const books = document.querySelector('.books')
const div = document.createElement('div')
const p = document.createElement('p')

function showBooks () {
        len = myLibrary.length
        target = myLibrary[len-1]
        const div = document.createElement('div')
        div.className = `info`;
        books.append(div)
        const button = document.createElement('button')
        for (item in target) {
            const p = document.createElement('p')
            div.append(p)
            p.innerText = (target[item])
            div.append(button)
            button.className = (`removeBtn`)
            button.innerText = ('Remove')
        }
        const removeBtns = document.querySelector(`.info`)
        if (removeBtns === null) {
          console.log('remove null')
        } else
        removeBtns.addEventListener('click', () => {
          console.log(number)
          console.log('removeBtns')
            })
}
function takeOut () {
  newNumber = number - 1
  myLibrary.splice(newNumber, 1)
}
// I want this to work for every remove button
const testing = document.querySelector('.testing')
testing.addEventListener('click', () => {
  console.log('testing')
  takeOut()
  number--
  console.log(number)
  console.log(myLibrary)
})



// remove()
function Books(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
  }

number = 0
  function addBook (title, author, pages, read ) {
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked ? document.querySelector('#read').value : 'Not Read';
    number++
    myLibrary.push({title, author, pages, read, number});

  }
  // const removeBtns = document.querySelector(`.info`);
  // removeBtns.addEventListener('click', () => {
  //   console.log('remove working')
  //   console.log(div)
  //   console.log(len)
  //   takeOut()

  //     })


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

function openTheForm() {
    document.getElementById("form").style.display = "block";
  }

function closeTheForm() {
    document.getElementById("form").style.display = "none";
  }
