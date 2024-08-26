import { logout, selectCurrentUser } from '@/redux/features/auths/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React from 'react';
import CARButton from '../ui/CARButton';
import { Link } from 'react-router-dom';
import { Avatar, Input } from 'antd';
import CRInput from '../form/CRInput';
import CRForm from '../form/CRForm';
import Search from '../ui/Search';
import { Clock8, PhoneCall } from 'lucide-react';
import Iconbg from '../ui/Iconbg';

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()

  const avtImg= "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"


  const handleLogout =()=>{
    dispatch(logout())
  }

  const handleSubmitSearch=(data)=>{
    console.log(data);
    
  }

  return (
    <div className="  ">
      <div className="flex container mx-auto items-center py-4 justify-between">
       <div>
       <h1 className="text-3xl text-primary  font-bold ">Car Wash</h1>
       <small>professional car wash</small>
       </div>
       
     {/* //call us  */}
     <div className='flex  items-center'>
        <Iconbg icon={<PhoneCall />} className='rounded-full shadow-2xl' />
        <div>
        <p>Call Us</p>
        <p>+1 880 555 6580</p>
        </div>
     </div>

{/* //time us  */}
     <div className='flex  items-center'>
     <Iconbg icon={<Clock8 />} className='rounded-full shadow-2xl' />
        <div>
        <p>Mon-Sat: 7:00am - 6:00pm</p>
        <p>Sun: 7:00am - 6:00pm</p>
        </div>
     </div>


     
    
<CARButton text='Book an Appointment' className='text-xl p-2 px-10'/>
      </div>
      <div className='bg-button-gradient py-3 text-white'>
       <div className='container flex justify-between items-center mx-auto'>
        <ul className='flex gap-6'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
        
        <div className="flex gap-4 items-center">
           <form>
           <div className="flex  items-center justify-end  rounded-tl-md rounded-bl-md    text-black">
               <Input type='text' name='searchTerm' onChange={(e)=>handleSubmitSearch(e.target.value)} />
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-4  mr-1 fill-gray-900 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
           
           </form>
          {user ?  <Avatar className='border border-white ' src={avtImg} /> : <Link to={'/login'}><CARButton text="Sign In" /></Link>}
          {user ? <button onClick={handleLogout}>Sign Out</button> : ''}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
