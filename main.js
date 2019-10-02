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
const tasks = []

const addTodo = () => {
    const inputValue = taskname.value
    tasks.push(inputValue)

}

const printTodos = () => {
    tasklist.innerHTML = ''
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task
        tasklist.appendChild(li)
        taskname.value = ''
    })
}


addTaskButton.addEventListener('click', () => {
    addTodo()
    printTodos()
})
