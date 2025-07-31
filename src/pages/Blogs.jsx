import { useLoaderData } from "react-router";
import BlogDetails from "../components/BlogDetails";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <section className="bg-light-800 text-black-400 py-6">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-light-900">
                    <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-light-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs text-black-400">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                        <p>{blogs[0].description}</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.map(blog => <BlogDetails key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;