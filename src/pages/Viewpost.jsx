import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Viewpost = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('post')) || []);

    // Login check
    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('userlogin'));
        if (!login) {
            navigate('/');
        }
    }, [navigate]);

    // Toggle Active/Inactive status
    const toggleActiveStatus = (postId) => {
        const updatedRecords = record.map((post) =>
            post.postid === postId ? { ...post, active: !post.active } : post
        );
        setRecord(updatedRecords);
        localStorage.setItem('post', JSON.stringify(updatedRecords));
    };

    // Delete a post
    const deletePost = (postId) => {
        const updatedRecords = record.filter((post) => post.postid !== postId);
        setRecord(updatedRecords);
        localStorage.setItem('post', JSON.stringify(updatedRecords));
    };

    return (
        <div className="flex flex-wrap">
            {record.map((val) => (
                <div key={val.postid} className="bg-slate-200 m-5 p-8 rounded-lg shadow-lg space-y-5 text-3xl w-96">
                    <img src={val.image} alt={val.title} className="w-full h-48 object-cover rounded-lg" />
                    <p className="font-bold">{val.title}</p>
                    <p>{val.description}</p>
                    <div className="flex justify-between">
                        <button
                            className={`${
                                val.active ? 'bg-green-500' : 'bg-red-500'
                            } text-white w-1/2 rounded-lg p-2 mr-2`}
                            onClick={() => toggleActiveStatus(val.postid)}
                        >
                            {val.active ? 'Active' : 'Inactive'}
                        </button>
                        <button
                            className="bg-blue-500 text-white w-1/2 rounded-lg p-2"
                            onClick={() => navigate('/editpost', { state: val })}
                        >
                            Edit
                        </button>
                    </div>
                    <button
                        className="bg-red-600 text-white w-full rounded-lg p-2"
                        onClick={() => deletePost(val.postid)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Viewpost;