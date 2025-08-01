import { useLoaderData } from "react-router";

const Author = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h2>{ blog.user.name }</h2>
        </div>
    );
};

export default Author;