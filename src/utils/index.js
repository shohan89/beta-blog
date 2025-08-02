import toast from "react-hot-toast";

const getBlogsFromLS = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

// save blogs
const saveBlog = blog => {
    let blogs = getBlogsFromLS();
    const isExist = blogs.find( b => b.id === blog.id )
    if(isExist){
        return toast.error('Already added to bookmark!')
    }
    
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Successfully added to bookmark!')
    
}

// delete
const deleteBlog = blogId => {
    let blogs = getBlogsFromLS();
    const remaining = blogs.filter(b => b.id === blogId);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog removed from bookmark!');
}

export {
    deleteBlog, getBlogsFromLS,
    saveBlog
};

