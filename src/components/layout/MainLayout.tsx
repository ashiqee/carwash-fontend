import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';


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
        
           
            </div>
        )}
     
    
    </>
  );
};

export default MainLayout;
