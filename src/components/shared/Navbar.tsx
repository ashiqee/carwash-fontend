import { logout, selectCurrentUser } from '@/redux/features/auths/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React from 'react';
import CARButton from '../ui/CARButton';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()

  const handleLogout =()=>{
    dispatch(logout())
  }


  return (
    <div className="  bg-button-gradient">
      <div className="flex container mx-auto items-center py-5 justify-between">
        <h1 className="text-2xl text-white  font-bold ">Car Wash</h1>
        {user?.userEmail}

        <div>
          {user ?  <Avatar className='border border-white p-1' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> : <Link to={'/login'}><CARButton text="Sign In" /></Link>}
          {user ? <button onClick={handleLogout}>Sign Out</button> : <Link to={'/login'}><CARButton text="Sign In" /></Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
