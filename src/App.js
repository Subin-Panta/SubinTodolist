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
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(id){
  this.setState(prevState => {
    const newtodos = prevState.todos.map (todo =>{ 
       if(todo.id===id)
      {
       todo.completed=!todo.completed
      }
      return todo
    }
      )
    return newtodos
    })
}

  render(){
  const Data = this.state.todos.map(data => <ToDoitem key={data.id} item={data} handleChange={this.handleChange}  />)
  return (
   <div className="todo-list">
    {Data}
  </div>
  )
  }
}
export default App