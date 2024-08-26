import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';


const MainLayout = () => {
const isLoading =false;
  return (
    <>
     
       
        {isLoading ? (
          <>
           Loading ....
          </>
        ) : (
            <div className="min-h-screen">
         
<Navbar/>
            <Outlet />
        <Footer/>
           
            </div>
        )}
     
    
    </>
  );
};

export default MainLayout;
