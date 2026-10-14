const eNEW_TASK_INPUT = document.querySelector('#newTaskInput');
const eTASK_LIST = document.querySelector('#taskList');
const eSUBMIT_TASK_BTN = document.querySelector('#submitTaskBtn');

class Task{
    constructor(data){
        this.id = crypto.randomUUID();
        this.data = data;
    }
    #getTask(){
        return {
            id: this.id,
            data: this.data,
        }
    }
}

const createTask = (e) => {
    e.preventDefault();
    const task = new Task(eNEW_TASK_INPUT.value.trim())
    console.log(task)
}

eSUBMIT_TASK_BTN.addEventListener('click', createTask)