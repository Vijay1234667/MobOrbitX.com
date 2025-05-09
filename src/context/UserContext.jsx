// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(prev => !prev);
    const closeSidebar = () => setSidebarOpen(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                const simplified = res.data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                }));
                setUsers(simplified);
                setLoading(false);
            } catch (err) {
                console.error('API Error:', err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, loading ,sidebarOpen, toggleSidebar, closeSidebar}}>
            {children}
        </UserContext.Provider>
    );
};
