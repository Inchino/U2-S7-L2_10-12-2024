class Person {
    constructor(_name, _surname) {
        this.name = _name;
        this.surname = _surname;
    }
}

const personName = document.getElementById('personName');
const personSurname = document.getElementById('personSurname');
const Name = document.getElementById('Name');
const Surname = document.getElementById('Surname');
let name = personName.value;
let surname = personSurname.value;
let newPerson;
const newPersons = [];

addPerson.addEventListener('click', function(e) {
    e.preventDefault();
    name = personName.value;
    surname = personSurname.value;
    createObject(name, surname);
});

deletePerson.addEventListener('click', function(e) {
    e.preventDefault();
    name = personName.value;
    surname = personSurname.value;
    deletePrint();
    deleteObject();
});

function createObject(name, surname) {
    newPerson = new Person(name, surname);
    newPersons.push(newPerson);
    console.log(newPersons);
    localStorage.setItem("Nome", name);
    localStorage.setItem("Cognome", surname);
    printPersons();
    document.getElementById('createPerson').reset();
}

function deleteObject(name, surname){
    newPersons.pop(newPerson);
    localStorage.removeItem("Nome", name);
    localStorage.removeItem("Cognome", surname);
}

function printPersons() {
    Name.innerText = localStorage.getItem("Nome");
    Surname.innerText = localStorage.getItem("Cognome");

    personsList.innerHTML = '';
    for (let i = 0; i < newPersons.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = `${newPersons[i].name} ${newPersons[i].surname}`;
        personsList.appendChild(newLi);
    }
}

function deletePrint(){
    Name.innerText = "";
    Surname.innerText = "";

    for (let i = 0; i < newPersons.length; i++) {
        personsList.removeChild(newPersons[i].value);
    }
}