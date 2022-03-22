const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote('el'));

function addNewNote(text = ''){
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    document.body.appendChild(noteEl);
    const editBtn = document.querySelector('.edit');
    const deleteBtn = document.querySelector('.delete');
    const main = document.querySelector('.main');
    const textArea = document.querySelector('.textarea');

    

    deleteBtn.addEventListener('click', () => {
        noteEl.remove();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    
}