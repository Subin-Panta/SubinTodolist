import React from 'react'
import TodoData from './data/TodoData'
import ToDoitem from './components/ToDoItem'
//import { render } from '@testing-library/react'
class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      todos: TodoData   
    }
  }
  render(){
  const Data = this.state.todos.map(data => <ToDoitem key={data.id} item={data} />)
  return (
   <div className="todo-list">
    {Data}
  </div>
  )
  }
}
export default App