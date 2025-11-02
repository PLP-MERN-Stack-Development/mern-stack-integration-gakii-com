import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const PostForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: "", body: "", featuredImage: null });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(form).forEach((key) => formData.append(key, form[key]));
        await API.post("/posts", formData);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
            <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full mb-3 border p-2" required />
            <textarea name="body" placeholder="Content" onChange={handleChange} className="w-full mb-3 border p-2 h-40" required></textarea>
            <input type="file" name="featuredImage" onChange={handleChange} className="mb-3" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </form>
    );
};

export default PostForm;
