console.log("Welcome to my Library");
class MyLibrary {
    constructor(name, Author, Type) {
        this.name = name;
        this.Author = Author;
        this.Type = Type;

    }
    
    dis() {

        let table = document.getElementById('table');
        let html;
        let bn = localStorage.getItem("bookName");
        let Au = localStorage.getItem("Author");
        let ty = localStorage.getItem("Type");
        if (bn == null && Au == null && ty == null) {
            var bnArr = [];
            var AuArr = [];
            var tyArr = [];
        }
        else {
            var tyArr = JSON.parse(ty);
            var bnArr = JSON.parse(bn);
            var AuArr = JSON.parse(Au);
        }
        bnArr.forEach(function (element, index) {
            console.log(element);
            html += `<tr>
                    <td>${bnArr[index]}</td>
                    <td>${AuArr[index]}</td>
                    <td>${tyArr[index]}</td>
                    <td><button id="${index}" onclick="mylib.DeleteN(this.id)" class="btn btn-primary">Delete</button></td>
                </tr>`;
            index += 1;
        });
        table.innerHTML += html;

    }
    AddLS() {
        let bn = localStorage.getItem("bookName");
        let Au = localStorage.getItem("Author");
        let ty = localStorage.getItem("Type");
        if (bn == null && Au == null && ty == null) {
            var bnArr = [];
            var AuArr = [];
            var tyArr = [];
        }
        else {
            var tyArr = JSON.parse(ty);
            var bnArr = JSON.parse(bn);
            var AuArr = JSON.parse(Au);
        }
        bnArr.push(this.name);
        AuArr.push(this.Author);
        tyArr.push(this.Type);

        localStorage.setItem("bookName", JSON.stringify(bnArr));
        localStorage.setItem("Author", JSON.stringify(AuArr));
        localStorage.setItem("Type", JSON.stringify(tyArr));
    }
    DeleteN(index) {
        console.log("delete");
        let bn = localStorage.getItem("bookName");
        let Au = localStorage.getItem("Author");
        let ty = localStorage.getItem("Type");
        if (bn == null && Au == null && ty == null) {
            var bnArr = [];
            var AuArr = [];
            var tyArr = [];
        }
        else {
            var tyArr = JSON.parse(ty);
            var bnArr = JSON.parse(bn);
            var AuArr = JSON.parse(Au);
        }
        tyArr.splice(index, 1);
        bnArr.splice(index, 1);
        AuArr.splice(index, 1);
        localStorage.setItem("bookName", JSON.stringify(bnArr));
        localStorage.setItem("Author", JSON.stringify(AuArr));
        localStorage.setItem("Type", JSON.stringify(tyArr));
        location.reload();
    }
    clear() {
        form.reset();
    }
    check() {
        if ((this.name).length > 2 || (this.name).length > 2) {
            return true;
        }
        // window.alert("please check")
        return false;
    }
}


let AddBook = document.getElementById("Add");
let form = document.getElementById('myform');
let type;
mylib = new MyLibrary(bookName, Author, type);
mylib.dis();
form.addEventListener('submit', function (e) {
    // console.log(bookName);
    let bookName = document.getElementById('bookName');
    let Author = document.getElementById('Author');
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('Programming');
    let coocking = document.getElementById('coocking');
    bookName = document.getElementById('bookName').value;
    Author = document.getElementById('Author').value;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (coocking.checked) {
        type = coocking.value;
    }
    mylib = new MyLibrary(bookName, Author, type);
     console.log(mylib);
    if (mylib.check()) {
        
        mylib.AddLS();
        mylib.clear();
    }
    else{
        alert("my");
    }
    e.preventDefault();
    location.reload();
    // mylib.dis();
})
