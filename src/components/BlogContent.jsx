import Markdown from "react-markdown";
import { useLoaderData } from "react-router";
import rehypeRaw from "rehype-raw";
import placeholderImage from '../assets/404.jpg';

const BlogContent = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html } = blog;
    return (
        <div className="mx-auto group focus:no-underline bg-light-900 border border-gray-200 border-b-0 p-2">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-light-500" src={cover_image || placeholderImage} />
            <div>
                <div className="flex flex-wrap py-6 gap-2">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#{tag}</a>)
                    }
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default BlogContent;