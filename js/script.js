var dataBase = 0; // Idicador se o usuario ja populou o banco de dados anteriormente (coming soon)

const inputTask = document.getElementById('inputAddTask');
const btnAdd = document.getElementById('btnAddTask');
const btnEdit = document.getElementById('btnEditTask');
const btnRmv = document.getElementById('btnRemoveTask');
const taskList = document.getElementById('taskList');

inputTask.addEventListener('keypress', (e) => {
    
    if(e.keyCode == 13){
        if(inputTask.value != "" && inputTask.value != " "){

            let task = {
                name: inputTask.value,
                id: genId(),
            }
            //Adicionar a tarefa ao html
            addTask(task);
        }
    }
});

btnAdd.addEventListener('click', (e) => {
    
    if(inputTask.value != "" && inputTask.value != " "){

        let task = {
            name: inputTask.value,
            id: genId(),
        }
        //Adicionar a tarefa ao html
        addTask(task);
    }
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
    li.id = task.id;

    let title = document.createElement("h4");
    title.classList.add("title-task");
    title.innerHTML = task.name;

    let buttonArea = document.createElement("div");
    buttonArea.classList.add("button-area");
    
    //Template para o js criar o botao de editar tarefa
    let buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button-edit-task");
    // buttonEdit.setAttribute("id", "btnEditTask");
    // buttonEdit.setAttribute("onclick", 'edit('+ task +')');
    buttonEdit.addEventListener("click", () => {edit(task)});
    buttonEdit.innerHTML = `<i class="fa-solid fa-pen"></i>`;

    //Template para o js criar o botao de remover tarefa
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("button-remove-task");
    // buttonRemove.setAttribute("id", "btnRemoveTask");
    buttonRemove.setAttribute("onclick", 'remove('+task.id+')');
    buttonRemove.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    buttonArea.appendChild(buttonEdit);
    buttonArea.appendChild(buttonRemove);

    li.appendChild(title);
    li.appendChild(buttonArea);

    return li;
}

function edit(task){
    if(window.confirm('Tem certeza que deseja alterar tarefa:  \"' + task.name + '\" ?') == true){
        let li = document.getElementById(''+ task.id + '');
        let h4 = li.childNodes[0];
    
        task.name = prompt('Alterar tarefa:  \"' + task.name + '\"');
        h4.innerHTML = task.name;
        // console.log(li.children);
     
    }
   
}

function remove(idTask){
    console.log(idTask);

    let confirm = window.confirm('Tem certeza que deseja excluir?');

    if(confirm == true){
        let li = document.getElementById(''+ idTask + '');
        
        if(li){ // Se o li for retornado
            taskList.removeChild(li);
        }
    }
}



// Algoritmo que cria uma tarefa de exemplo quando o usuario entra no site

function setupEx(){
    
    let taskEx = {
        name: "Fazer uma aplicação de todo list com html, css, js puro",
        id: 0,
    };
    //Adicionar a tarefa ao html
    addTask(taskEx);
};
// Verifica se e a primeira vez que o usuario entra no site (banco de dados zerado)
if(dataBase == 0){
    
    setupEx();
}
    