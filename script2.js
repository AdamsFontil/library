let myLibrary = [];
number = 0

function Book(title, author, pages, read) {
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked ? document.querySelector('#read').value : 'Not Read';
    number++
}



const Got = new Book ('Game of Thrones', 'Martin', 230, true)
const LotR = new Book ('Lord of the Rings', 'Tolkien', 403, false)
const Potter = new Book ('Harry Potter', 'Rowling', 140, true)


function addBookToLibrary() {
    myLibrary.push(Got)
    myLibrary.push(LotR)
    myLibrary.push(Potter)


}


addBookToLibrary
