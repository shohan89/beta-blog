import Nav from "../components/Nav";

const Home = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>
            <h1>Welcome to Beta Blog</h1>
            <button className="btn btn-primary">Primary</button>
        </div>
    );
};

export default Home;