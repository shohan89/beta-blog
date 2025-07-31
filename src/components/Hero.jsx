import { Link } from "react-router";

const Hero = () => {
    return (
        <div
            className="hero min-h-[calc(100vh-116px)]"
            style={{
                backgroundImage:
                "url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span>BetaBlog</span></h1>
                    <p className="mb-5">
                        BetaBlog is the bridge between the complex world of technology and the curious minds eager to understand it
                    </p>
                    <Link to="/blogs" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block mr-4">
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Read Blogs</span>
                    </Link>
                    <Link to="/bookmarks" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span class="relative">Bookmarks</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;