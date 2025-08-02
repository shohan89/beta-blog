import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogsFromLS } from "../utils";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const storedBlogs = getBlogsFromLS();
        setBlogs(storedBlogs);
    },[])

    return (
        <div className="grid py-12 px-4 justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
            }
        </div>
    );
};

export default Bookmarks;