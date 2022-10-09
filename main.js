// Book class represent a book
console.log('hello');

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: handle UI tasks
class UI {
    static displayBooks() {
        const storedBooks = [{
            title: 'Book One', author: 'John Doe', isbn: '26387263'
        }, {
            title: 'Book Two', author: 'Jann Doe', isbn: '99923'
        }]
        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                             <td>${book.author}</td>
                             <td>${book.isbn}</td>
                              <td> <a class='btn btn-sm delete' href="#">X</a></td>`;
        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

    }
}

// Store class handle a storage

// Event display a book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    // validate
    if (title === '' && author === '' && isbn === '') {
        UI.showAlert('the value is empty', 'danger')
    } else {
        // initiate a book
        const book = new Book(title, title, isbn);
        // add book to UI
        UI.addBookToList(book);
        //clear fields
        UI.clearFields();
    }
    setTimeout(() =>
        document.querySelector('.alert').remove(), 2000);
})
// Event remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
})



