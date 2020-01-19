import React from 'react'
import TodoData from './data/TodoData'
import ToDoitem from './components/ToDoItem'
function App() {
  const Data = TodoData.map(data => <ToDoitem key={data.id} item={data} />)
  return (
   <div className="todo-list">
    {Data}
  </div>
  )
}
export default App