let myLibrary = [];
len = myLibrary.length

const books = document.querySelector('.books')
const div = document.createElement('div')
const p = document.createElement('p')

function Book(title, author, pages, read,) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.number = number
}

// Book.prototype.sayName = function () {
//   this.sayName = function() {
//     console.log(this.name)
//   }
// }

function showBooks () {
        len = myLibrary.length
        target = myLibrary[len-1]
        const div = document.createElement('div')
        div.id = `info${len}`;
        books.append(div)
        const button = document.createElement('button')
        for (item in target) {
            const p = document.createElement('p')
            div.append(p)
            p.innerText = (target[item])
            div.append(button)
            button.class = (`${len}`)
            button.innerText = ('Remove')
            button.addEventListener('click',takeOut)
        }
        function takeOut () {
          number = button.class
          myLibrary.splice(number, 1)
          section = `info${number}`
          const target2 = document.getElementById(section)
          target2.remove()
          // console.log(button.class)
          // console.log(div.id)
          // console.log({section})
          // console.log({target2})


        }

}



number = 0
  function addBook (title, author, pages, read ) {
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked ? document.querySelector('#read').value : 'Not Read';
    number++
    let newBook = new Book(title, author, pages, read, number);
    myLibrary.push(newBook);
  }




// so that page has books on display
// for (i =0; i <12; i++) {
//   addBook()
//   showBooks()
//   closeTheForm()
//   console.log('loopy')
// }



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
