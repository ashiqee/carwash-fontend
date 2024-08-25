import { Outlet } from 'react-router-dom';


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
         
    
            <Outlet />
        
           
            </div>
        )}
     
    
    </>
  );
};

export default MainLayout;
