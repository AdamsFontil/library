let myLibrary = [];
len = myLibrary.length

const books = document.querySelector('.books')
const div = document.createElement('div')
const p = document.createElement('p')

function Book(title, author, pages, read,) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
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
            if (target[item] === 'Not Read' ) {
              value = 'Not Read'
              p.innerText = value
              const btn = document.createElement('button');
              btn.classList.add('unread')
              btn.id = (`testing${len}`)
              btn.textContent = p.textContent;
              p.parentNode.replaceChild(btn, p);
              btn.addEventListener('click',changeReadStatus)
            } else if (target[item] === 'Read' ) {
                value = 'Read'
                p.innerText = value
                const btn = document.createElement('button');
                btn.classList.add('read')
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
          number = button.class - 1
          section = `testing${button.class}`
          const target3 = document.getElementById(section)
          if (target.read === 'Read' ) {
            target.read = 'Not Read'
            myLibrary[number].read = 'Not Read'
            value = 'Not Read'
            target3.classList.replace('read', 'unread')
            target3.innerText = 'Not Read'
            console.log('works')
          }
          else if (target.read === 'Not Read' ) {
            target.read = 'Read'
            myLibrary[number].read = 'Read'
            value = 'Read'
            console.log(target3)
            target3.classList.replace('unread', 'read')
            target3.innerText = 'Read'
          }
        }

}







  function addBook (title, author, pages, read ) {
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked ? document.querySelector('#read').value : 'Not Read';
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }

// so that page has books on display
// for (i =0; i <12; i++) {
//   addBook()
//   showBooks()
//   closeTheForm()
//   console.log('added an empty book')
// }



const bookBtn = document.querySelector('.bookBtn')
bookBtn.addEventListener('click', () => {
    openTheForm()
})
const submit = document.querySelector('.submit')
submit.addEventListener('click', (event) => {
  console.log('submit')
  const errorMessage = document.querySelector('.errorMessage')
  let requiredInputs = document.querySelectorAll("input[required]");
    let isValid = true;
    for (let i = 0; i < requiredInputs.length; i++) {
      if (!requiredInputs[i].value) {
        isValid = false;
        console.log('check')
        // break;
      }
    }
    if (!isValid) {
      event.preventDefault();
      console.log('nocheck')


      errorMessage.textContent = "All required fields must be filled out.";
      errorMessage.style.color = "red";


    } else {
      errorMessage.textContent = ''
      addBook()
        closeTheForm()
        showBooks()
    }
})

function openTheForm() {
    document.getElementById("form").style.display = "block";
  }

function closeTheForm() {
    document.getElementById("form").style.display = "none";
  }

  // document.querySelector("form").addEventListener("submit", function(event) {
  //   let requiredInputs = document.querySelectorAll("input[required]");
  //   let isValid = true;
  //   for (let i = 0; i < requiredInputs.length; i++) {
  //     if (!requiredInputs[i].value) {
  //       isValid = false;
  //       break;
  //     }
  //   }
  //   if (!isValid) {
  //     event.preventDefault();
  //     alert("All required fields must be filled out.");
  //   }
  // });
