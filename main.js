// ################------ Books ------################
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages`//, ${this.read ? 'read' : 'not read'}`;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function render() {
    let bookUl = '';
    for (let book in library) {
        bookUl += `
        <li>
            ${library[book].info()}, <button class="read-button" value=${book}>${library[book].read ? 'read' : 'not read'}</button>
            <button class="delete-book" value="${book}"></button>
        </li>`;
    }

    document.getElementById("book-list").innerHTML = bookUl;

    // --- listen for a delete book event ---
    // list like thing of all elements with class 'delete-book'
    const delBookElements = document.getElementsByClassName("delete-book");
    const readBookElements = document.getElementsByClassName("read-button");

    // add even listeners for delete-book and read-button
    for (let i=0; i<delBookElements.length; i++){
        delBookElements[i].addEventListener('click', (e) =>{
            library.splice(e.target.value, 1);
            render();
        })
        readBookElements[i].addEventListener('click', (e) =>{
            const tempBook = library[e.target.value];
            tempBook.read = !tempBook.read;
            render();
        })
    }

}

// ################------ Display add books btn/form ------################
// shows the form to add a book and hide add book button
function addBookForm() {
    let formHtml = `
    <form id="add-book-form">
    <div>
        <label>Title:
            <input type="text" name="title" id="title" required />
        </label>
    </div>
    <div>
        <label>Author:
            <input type="text" name="author" id="author" required />
        </label>
    </div>
    <div>
        <label>Pages:
            <input type="text" name="pages" id="pages" required />
        </label>
    </div>
    <div>
        <label>Read:
            <input type="checkbox" name="read" id="read"/>
            <span class="checkbox"></span>
        </label>
    </div>
    <input type="submit" id="add-book-btn" value="add"> <button onclick="hideForm()">nvm</button>
</form>`

    document.getElementById("controls").innerHTML = formHtml;

    // --- setup listener for submit of form ---
    const form = document.getElementById("add-book-form");
    form.addEventListener("submit", function (e) {
        // prevent default form submit action
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('added' + formData.get('author'));
        // add book to library list
        addBookToLibrary(new Book(formData.get('title'), formData.get('author'), formData.get('pages'), formData.get('read')));

        // hide form
        hideForm();

        // render list
        render();

    });

}

function hideForm() {
    let controls = '<button onclick="addBookForm()">Add Book</button>';
    console.log('form closed');
    document.getElementById("controls").innerHTML = controls;
}



// ################------ add default books ------################
const book1 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 456, true);
const book2 = new Book('Atlas Shrugged', 'Ayn Rand', 675, false);
const book3 = new Book('Teen Spirit', 'Kurt Cobain', 1, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// ##### Run functions #####

render();


