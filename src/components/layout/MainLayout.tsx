import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <>Loading ....</>
      ) : (
        <div className=" flex flex-col justify-between min-h-screen">
          <div>
            <Navbar />
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
