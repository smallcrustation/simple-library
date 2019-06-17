let form = document.getElementById("add-book-btn");

// ################------ Books ------################
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

function render(){
    let bookUl = '';
    for(let book in library){
        bookUl += `<li>${library[book].info()}</li>`;
    }

    document.getElementById("book-list").innerHTML = bookUl;
}

// ################------ Display add books/form ------################
// shows the form to add a book and hide add book button
function addBookForm(){
    let form = `
    <form id="add-book-form">
    <div>
        <label>Title:</label>
        <input type="text" name="title" id="title" required />
    </div>
    <div>
        <label>Author:</label>
        <input type="text" name="author" id="author" required />
    </div>
    <div>
        <label>Pages:</label>
        <input type="text" name="pages" id="pages" required />
    </div>
    <div>
        <label>Read:</label>
        <input type="checkbox" name="read" id="read" />
    </div>
    <input type="submit" id="add-book-btn" value="add"> <button onclick="hideForm()">nvm</button>
</form>`

    //document.getElementById("controls").style.visibility = "hidden";
    document.getElementById("controls").innerHTML = form;
}

function hideForm(){
    let controls = '<button onclick="addBookForm()">Add Book</button>';

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

//form.onsubmit = addBookToLibrary(new Book(form.name.value));
//form.onsubmit = console.log(form.title.value);
console.log(render());
render();


