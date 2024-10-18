import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos, toggleComplete, deleteTodo } = useTodo();

    return (
        <div>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    );
};

export default TodoList;
