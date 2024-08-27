import React from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar } from 'antd';
import { useAppDispatch } from '@/redux/hook';
import { logout, TUser} from '@/redux/features/auths/authSlice';

interface IHoverProfileMenu{
  user:TUser;
}

const HoverProfileMenu: React.FC<IHoverProfileMenu> = ({user}) => {

    const dispatch = useAppDispatch()

 

    const handleLogout =()=>{
      dispatch(logout())
    }

    const avtImg= "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"

  return (
    <HoverCard>
      <HoverCardTrigger>  <Avatar className='border cursor-pointer border-white ' src={avtImg} /></HoverCardTrigger>
      <HoverCardContent className='text-center'>
        <h3>User Name</h3>
        <p>Email</p>
        {user ? <button onClick={handleLogout}>Sign Out</button> : ''}
       
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverProfileMenu;
