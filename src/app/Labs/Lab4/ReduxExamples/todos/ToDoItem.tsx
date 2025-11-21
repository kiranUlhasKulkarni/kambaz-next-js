import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReduces";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid #dee2e6" }}>
            <span>{todo.title}</span>
            <div>
                <Button
                    onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                    className="btn btn-primary ms-2"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                    className="btn btn-danger ms-2"
                >
                    Delete
                </Button>
            </div>
        </ListGroupItem>
    );
}
