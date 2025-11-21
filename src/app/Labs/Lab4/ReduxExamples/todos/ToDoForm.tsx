import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReduces";
import { RootState } from "../../store";

export default function TodoForm() {
    const { todo } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center py-2" style={{ borderBottom: "1px solid #dee2e6" }}>
            <FormControl
                value={todo.title}   
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                className="me-2 flex-grow-1"          // Flex-grow to fill remaining space
            />
            <div className="d-flex gap-2">
                <Button
                    onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"
                    className="btn btn-warning"
                >
                    Update
                </Button>
                <Button
                    onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="btn btn-success"
                >
                    Add
                </Button>
            </div>
        </ListGroupItem>
    );
}
