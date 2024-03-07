// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {uniqueNo, title} = todoItem
  const onDelete = () => {
    deleteTodo(uniqueNo)
  }
  return (
    <div className="todo-item">
      <p className="todo">{title}</p>
      <button className="todo-delete-buton" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
