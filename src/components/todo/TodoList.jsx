import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch()
  // consume
  // const { todoList } = useSelector((state) => state.todo);
  const todoList = useSelector((state) => state.todo.todoList)
  const handleClearList = () => {
    dispatch(clearTodo())
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="btn btn-danger">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
