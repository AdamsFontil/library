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
value = 'Read'

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
            if (target[item] === 'Not Read' ) {
              value = 'Not Read'
              p.innerText = value
              const btn = document.createElement('button');
              btn.id = (`testing${len}`)
              btn.textContent = p.textContent;
              p.parentNode.replaceChild(btn, p);
              btn.addEventListener('click',changeReadStatus)
            }
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
        }
        function changeReadStatus () {
          // if (target.read === 'Read' ) {
          //   target.read = 'Not Read'
          //   value = 'Not Read'
          //   console.log('works')
          // }
          // else if (target.read === 'Not Read' ) {
          //   target.read = 'Read'
          //   console.log('works2')
          // }
          // console.log(newBook)
          number = button.class - 1
          myLibrary[number].read = 'Read'
          target.read = 'Read'
          // console.log(target)
          // console.log(target.number)
          // console.log(target.read)
          // console.log(number)
          console.log(div)
          value = 'Read'
          section = `testing${button.class}`
          const target3 = document.getElementById(section)
          console.log(target3)
          target3.innerText = 'testing'






          // console.log('change')
          // target.read = 'Read'
          // console.log(target.read)
          // console.log(target)
          // p.innerText = 'Read'
          // console.log(myLibrary)




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
for (i =0; i <12; i++) {
  addBook()
  showBooks()
  closeTheForm()
  console.log('loopy')
}



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
