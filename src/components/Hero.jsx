
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
                    <h1 className="mb-5 text-5xl font-bold">Welcome to BetaBlog</h1>
                    <p className="mb-5">
                        BetaBlog is the bridge between the complex world of technology and the curious minds eager to understand it
                    </p>
                    <button className="btn btn-primary mr-4">Read Blogs</button>
                    <button className="btn btn-primary">Bookmarks</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;