import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addpost = () => {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('post')) || []);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('userlogin'));
        if (!login) {
            navigate('/');
        }
    }, [navigate]);

    const handlesubmit = (e) => {
        e.preventDefault();

        let post = {
            postid: Math.floor(Math.random() * 100000),
            title: title,
            description: description,
            image: image,
        };

        let newpost = [...posts, post];
        localStorage.setItem('post', JSON.stringify(newpost));
        setPosts(newpost);
        toast.success("Post successfully added");
        setTitle("");
        setDescription("");
        setImage("");
    };

    const logoutUser = () => {
        localStorage.removeItem('userlogin');
        toast.success("User Successfully Logged Out");
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="w-full max-w-md">
            <div  className="flex flex-col space-y-5 text-lg bg-white p-8 rounded-lg shadow-lg">
           
                <form
                    onSubmit={handlesubmit}
                    className="flex flex-col space-y-5 text-lg rounded-lg"
                >
                    <label htmlFor="title" className="text-gray-700">Title</label>
                    <input
                        id="title"
                        className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Enter post title"
                    />
                    <label htmlFor="description" className="text-gray-700">Description</label>
                    <input
                        id="description"
                        className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Enter post description"
                    />
                    <label htmlFor="image" className="text-gray-700">Image URL</label>
                    <input
                        id="image"
                        className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        placeholder="Enter image URL"
                    />
                    <button
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                    <button
                        onClick={() => logoutUser()}
                        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full shadow-lg"
                    >
                        Logout
                    </button>

                    </div>

            </div>
            <ToastContainer
                autoClose={1000}
                position="top-center"
            />
        </div>
    );
};

export default Addpost;