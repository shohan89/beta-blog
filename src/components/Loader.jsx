import { PacmanLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <PacmanLoader 
            color="#8618e8"
            size={50} />
        </div>
    );
};

export default Loader;