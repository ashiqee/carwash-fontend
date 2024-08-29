import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar } from 'antd';
import { useAppDispatch } from '@/redux/hook';
import { logout, TUser} from '@/redux/features/auths/authSlice';
import { Link } from 'react-router-dom';

interface IHoverProfileMenu{
  user:any;
}

const HoverProfileMenu: React.FC<IHoverProfileMenu> = ({user}) => {

    const dispatch = useAppDispatch()
 
console.log(user);

    const handleLogout =()=>{
      dispatch(logout())
    }

    const avtImg= "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"

  return (
    <HoverCard>
      <HoverCardTrigger>  <Avatar className='border cursor-pointer border-white ' src={avtImg} /></HoverCardTrigger>
      <HoverCardContent className='text-center'>
        <h3>{user?.data?.name}</h3>
        <p>{user?.data?.email}</p>
      <div className='flex gap-2 justify-center'>
      <Link to={`/${user?.data?.role}/dashboard`} className='border p-2 rounded-md bg-primary/10 mt-5 px-2 hover:bg-primary hover:text-white' >
       Dashboard
       </Link> 
       
        {user ? <button className='border p-2 rounded-md bg-primary/10 mt-5 px-2 hover:bg-primary hover:text-white' onClick={handleLogout}>Sign Out</button> : ''}
       
      </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverProfileMenu;
