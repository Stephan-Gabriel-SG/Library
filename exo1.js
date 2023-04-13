let myLibrary = [];
let formDialog = document.getElementById('formDialog');
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let page = document.getElementById('page').value;
    let read = document.getElementsByName('read')[0].checked;
    if (title && author && page && title.length<=100 && author.length<=100 && page<=10000) {
        let book = new Book(title,author,page,read);
        myLibrary.push(book);
        seeBook();
    }
}
function seeBook() {
    let livre = '';
    if (myLibrary.length == 0) {
        livre = "<h3 style=\"color:red;\"><i>There are currently no books</i></h3>";
    } else {
        for (let book of myLibrary) {
            livre += (`<div class='livre'>
        <label class='title'>${book.title}</label>
        <label>by ${book.author}</label>
        <label>${book.pages} pages</label>
        <button id='readStatus'class=${(book.read == true ? 'read' : 'noRead')} onclick='changeReadStatus(${myLibrary.indexOf(book)})'>${(book.read == true ? 'Read' : 'Not read')}</button>
        <button id='delete' onclick='deleteBook(${myLibrary.indexOf(book)})'>Delete</button>
        </div>`);
        }
    }
    if (document.getElementById('listBook').hidden == true) {
        document.getElementById('listBook').hidden = false;
    }
    document.getElementById('containeur').innerHTML = livre;
}

function seeForm() {
    freeField();
    formDialog.showModal();
}
function closeDialog() {
    formDialog.close();
}
function deleteBook(nb) {
    myLibrary.splice(nb, 1);
    seeBook();
}
function changeReadStatus(nb) {
    myLibrary[nb].read = (myLibrary[nb].read == true ? false : true);
    seeBook();
}
function freeField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementsByName('read')[0].checked = true;
}
