import React, { useState } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Auth from './components/Auth';
import './index.css';

const App = () => {
    const [username, setUsername] = useState('');

    const login = (user) => {
        setUsername(user);
    };

    return (
        <TodoProvider>
            <div className="app">
                <h1>Todo App</h1>
                {username ? (
                    <>
                        <h2>Welcome, {username}!</h2>
                        <TodoForm />
                        <TodoList />
                    </>
                ) : (
                    <Auth login={login} />
                )}
            </div>
        </TodoProvider>
    );
};

export default App;
