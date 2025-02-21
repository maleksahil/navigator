import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('userlogin'));
        if (login) {
            navigate('/addpost');
        }
    }, [navigate]);

    const handlesubmit = (event) => {
        event.preventDefault();
        let login = users.find(val => val.email === email && val.password === password);
        if (login) {
            localStorage.setItem('userlogin', JSON.stringify(login));
            toast.success('Login successfully');
            setTimeout(() => {
                navigate('/addpost');
            }, 2000);
        } else {
            toast.error('Invalid Email or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Login</h1>
                <form onSubmit={handlesubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <Link
                        to="/register"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Don't have an account? Register here
                    </Link>
                </div>
            </div>
            <ToastContainer
                autoClose={1000}
                position="top-center"
            />
        </div>
    );
};

export default Login;