import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;