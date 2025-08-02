import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import EmptyBookmark from "../components/EmptyBookmark";
import { deleteBlog, getBlogsFromLS } from "../utils";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const storedBlogs = getBlogsFromLS();
        setBlogs(storedBlogs);
    },[])

    const handleDelete = BlogId => {
        deleteBlog(BlogId);
        const storedBlogs = getBlogsFromLS();
        setBlogs(storedBlogs);
    }
    if(blogs.length < 1) {
        return <EmptyBookmark 
        message={'No bookmark available!'}
        address={'/blogs'}
        label={'Browse Blogs'}
        />
    
    }
    return (
        <div className="grid py-18 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {
                blogs.map(blog => <BlogCard 
                    deletable={true} 
                    key={blog.id} 
                    blog={blog}
                    handleDelete={handleDelete}
                     />)
            }
        </div>
    );
};

export default Bookmarks;