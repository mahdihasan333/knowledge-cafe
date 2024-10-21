import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    // using useState hook to store blogs data
    const [blogs, setBlogs] = useState([]);

    // using useEffect hook to fetch blogs data to blogs.json file
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;