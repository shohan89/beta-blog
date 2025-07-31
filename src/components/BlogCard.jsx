import { Link } from "react-router";
import placeholderImage from '../assets/404.jpg';

const BlogCard = ({blog}) => {
    const { id, title, description, cover_image, published_at } = blog;
    return (
        <Link rel="noopener noreferrer" to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-light-900 border border-primary p-2 rounded-xl hover:shadow-xl transition hover:scale-105">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-light-500" src={cover_image || placeholderImage} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                            <span className="text-xs text-black-400">{new Date(published_at).toLocaleDateString()}</span>
                            <p>{description}</p>
                        </div>
                    </Link>
    );
};

export default BlogCard;