let myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    // this.sayName = function() {
    //   console.log(name)
    // }
  }

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const GoT = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')
const Harry = new Books('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')

function addBookToLibrary(book) {
    myLibrary.push(book)
}
addBookToLibrary(theHobbit)
addBookToLibrary(GoT)
addBookToLibrary(Harry)

console.log(myLibrary)

function showBooks () {
    for (books in myLibrary) {
        console.log(myLibrary[books])
        target = myLibrary[books]
        for (item in target) {
            console.log(target[item])
        }
    }
}
showBooks()
