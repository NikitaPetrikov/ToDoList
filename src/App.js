import { useState } from "react"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"

function App() {
  const [todos, setTodos] = useState ([])

  const addTask = (userInput) => {     //добавление задач
    if(userInput) {
        const newItem = {
            id: Math.random().toString(36).substring(2,9),
            task: userInput,
            complete: false     //выполнена не выполнена
        }
        setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {      //удаление задач
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {     //готова не готова -
    setTodos(
        [...todos.map((todo) =>
             todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
        )
            ])
  }
  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {    //вывод
        return (
            <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;
