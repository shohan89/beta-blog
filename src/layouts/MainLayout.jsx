import { Outlet } from 'react-router';
import Nav from '../components/Nav';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;