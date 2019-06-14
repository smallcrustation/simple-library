let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

const book1 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 456, true);
const book2 = new Book('Atlas Shrugged', 'Ayn Rand', 675, false);
const book3 = new Book('Teen Spirit', 'Kurt Cobain', 1, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function render(){
    let bookUl = '';
    for(let book in library){
        bookUl += `<li>${library[book].info()}</li>`;
    }

    document.getElementById("book-list").innerHTML = bookUl;
}

render();


