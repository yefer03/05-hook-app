


import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodos, handleNewTodo, handleNDeleteTodo, handleToggleTodo } = useTodos();

    //
    //todos.filter( todos => !todos.done ).length

    return (
        <>
            <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodos }</small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleNDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>

            </div>
        </>
    );
};
