import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Editpost = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const [editid, setEditId] = useState("");

    // Check if user is logged in
    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('userlogin'));
        if (!login) {
            navigate('/');
        }
    }, [navigate]);

    // Set initial form values from location state
    useEffect(() => {
        setTitle(location?.state?.title);
        setDescription(location?.state?.description);
        setImage(location?.state?.image);
        setEditId(location?.state?.postid);
    }, [location?.state]);

    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('post')) || []);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedPosts = posts.map((val) => {
            if (val.postid == editid) {
                return {
                    ...val,
                    title: title,
                    description: description,
                    image: image,
                };
            }
            return val;
        });

        localStorage.setItem('post', JSON.stringify(updatedPosts));
        toast.success("Post Updated Successfully");

        setTimeout(() => {
            navigate('/viewpost');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit Post</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter post title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter post description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Update Post
                    </button>
                </form>
            </div>
            <ToastContainer
                autoClose={1000}
                position="top-center"
            />
        </div>
    );
};

export default Editpost;