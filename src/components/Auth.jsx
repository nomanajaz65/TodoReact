import React, { useState } from 'react';

const Auth = ({ login }) => {
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username) {
            login(username);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username" 
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Auth;
