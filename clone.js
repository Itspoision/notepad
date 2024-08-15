const addbutton = document.querySelector('#add');
const updatelsdata = () => {
    const textareadata = document.querySelectorAll('textarea'); //query selector stores data in the form of object array
    const notes = []; //array is used to fetch individual notes/element for storing.
    textareadata.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);
    //setting data in local storage
    localStorage.setItem('notes', JSON.stringify(notes)); //json is used to convert array to string

}
const addnewnote = (text = '') => {  //text word is a parameter used for editing and deleting note.
    const note = document.createElement('div'); // createelement to used to add elements dynamically, div is added in this case
    note.classList.add('note'); // classlist.add for adding classs
    const htmldata = `<div class="operation">  
    <button title="dffa" class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button title="sa" class="delete"><i class="fa-solid fa-delete-left"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea ${text ? "hidden" : ""} title="sd" id="" cols="40" rows="8"></textarea>`; //string literal is used for adding html content to the script
    note.insertAdjacentHTML('afterbegin', htmldata);  //alternative for innerhtml 
    //getting the references of every note added
    const getedit = note.querySelector('.edit');
    const getdel = note.querySelector('.delete');
    const getmain = note.querySelector('.main');
    const gettextarea = note.querySelector('textarea');
    //deleleting the note
    getdel.addEventListener('click', () => {
        note.remove();
    })
    //toogle using edit icon
    getedit.addEventListener('click', () => {
        getmain.classList.toggle('hidden');  //hidden is a class so classlist is used.
        gettextarea.classList.toggle('hidden');
    })
    //text will be shown in main div after editing 
    gettextarea.addEventListener('change', (event) => {
        const value = event.target.value;
        getmain.innerHTML = value;
        updatelsdata(); //for storing data 
    })
    document.body.appendChild(note); //append is used to add smthng we are adding note dialog here.
}
//getting back data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));//string convert into original format
if (notes) { notes.forEach((note) => addnewnote(note)) };
addbutton.addEventListener('click', () => addnewnote()) //on clicking "add note" fat arrow function will be invoked.