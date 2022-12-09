let myLibrary = [];
number = 0

function Book(title, author, pages, read, number) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    number++
}





const Got = new Book ('Game of Thrones', 'Martin', 230, true,number++)
const LotR = new Book ('Lord of the Rings', 'Tolkien', 403, false)
const Potter = new Book ('Harry Potter', 'Rowling', 140, true)


function addBookToLibrary() {
 myLibrary.push({});
}
