import React from "react";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todos);

    return (
        <div
            id="wd-todo-list-redux"
            className="p-3 border rounded"
            style={{ maxWidth: "800px", margin: "0 auto" }}
        >
            <h2>Todo List</h2>
            <div className="d-flex flex-column gap-2">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
            <hr />
        </div>
    );
}
