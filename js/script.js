const inputTask = document.getElementById('inputAddTask');
const btnAdd = document.getElementById('btnAddTask');
const btnEdit = document.getElementById('btnEditTask');
const btnRmv = document.getElementById('btnRemoveTask');
const taskList = document.getElementById('taskList');

inputTask.addEventListener('keypress', (e) => {
    
    if(e.keyCode == 13){
        let task = {
            name: inputTask.value,
            id: genId(),
        }
        //Adicionar a tarefa ao html
        addTask(task);
    }
});

btnAdd.addEventListener('click', (e) => {
    
    let task = {
        name: inputTask.value,
        id: genId(),
    }
    //Adicionar a tarefa ao html
    addTask(task);
});


function genId(){
    return Math.floor(Math.random() * 3000);
};

function addTask(task){

    let li = createTagLi(task);
    taskList.appendChild(li);
    inputTask.value = "";
};

function createTagLi(task){
    let li = document.createElement("li");
    li.classList.add("card-task");

    let title = document.createElement("h4");
    title.classList.add("title-task");
    title.innerHTML = task.name;

    let buttonArea = document.createElement("div");
    buttonArea.classList.add("button-area");
    
    //Template para o js criar o botao de editar tarefa
    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button-edit-task");
    buttonEdit.setAttribute("id", "btnEditTask");
    buttonEdit.innerHTML = `<i class="fa-solid fa-pen"></i>`;

    //Template para o js criar o botao de remover tarefa
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("button-remove-task");
    buttonRemove.setAttribute("id", "btnRemoveTask");
    buttonRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonArea.appendChild(buttonEdit);
    buttonArea.appendChild(buttonRemove);

    li.appendChild(title);
    li.appendChild(buttonArea);

    return li;
}