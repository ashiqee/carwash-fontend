import React from 'react';
import { Outlet } from 'react-router-dom';

const BackendLayout = () => {
    return (
        <div className='flex'>
            sidebar
          <div>
            navbar
          <Outlet/>
          </div>
        </div>
    );
};

export default BackendLayout;