let myLibrary = [];
len = myLibrary.length



const books = document.querySelector('.books')
const div = document.createElement('div')
const p = document.createElement('p')

function showBooks () {
        len = myLibrary.length
        target = myLibrary[len-1]
        const div = document.createElement('div')
        div.id = `info ${len}`;
        books.append(div)
        const button = document.createElement('button')
        for (item in target) {
            const p = document.createElement('p')
            div.append(p)
            p.innerText = (target[item])
            div.append(button)
            button.id = (`removeBtn`)
            button.innerText = ('Remove')
        }
}


function takeOut () {
  newNumber = number - 1
  myLibrary.splice(newNumber, 1)
  section = `info ${newNumber}`
  const target2 = document.getElementById(`info ${number}`)
  target2.remove()
}
// I want this to work for every remove button
const testing = document.querySelector('.removeBtn')
testing.addEventListener('click', () => {
  console.log('testing')
  console.log(div)
  takeOut()
  number--
  // console.log(number)
  // console.log(myLibrary)

})

// testing how to remove divs
function removeTest () {
  console.log('remove test')
  const removeSection = document.querySelector('.takeOut')
  removeSection.remove();

}

removeTest()

// remove()
function Book(title, author, pages, read) {
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



// so that page has books on display
for (i =0; i <12; i++) {
  addBook()
  showBooks()
  closeTheForm()
  console.log('loopy')
}
