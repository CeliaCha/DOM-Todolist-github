/* @TODO :
- Permettre à l'utilisateur d'ajouter une tâche
- Permettre à l'utilisateur de supprimer une tâche
- Permettre à l'utilisateur de marquer une tâche comme faite/à faire (dans les deux sens)
- Permettre à l'utilisateur de trier les tâches faites et à faire
- Permettre à l'utilisateur de rechercher une tâche par chaîne de caractères
- Bonus : ajouter du LocalStorage pour conserver les données dans le navigateur.
*/
const taskname = document.getElementById('taskName')
const addTaskButton = document.getElementById('addTaskButton')
const tasklist = document.getElementById('tasklist')
let tasks = []

const addTodo = () => {
  const todoObject = {}
  todoObject.id = Date.now()
  todoObject.name = taskname.value
  tasks.push(todoObject)
}

const printTodos = () => {
  tasklist.innerHTML = ''
  tasks.forEach(task => {
    const li = document.createElement('li')
    const deleteBtn = document.createElement('button')
    const textSpan = document.createElement('span')
    textSpan.innerText = task.name
    deleteBtn.innerText = 'Supprimer'
    deleteBtn.id = task.id
    li.appendChild(textSpan)
    li.appendChild(deleteBtn)
    tasklist.appendChild(li)
    taskname.value = ''

    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter(el => el.id !== task.id)
      printTodos()
    })
  })
}

addTaskButton.addEventListener('click', () => {
  addTodo()
  printTodos()
})
