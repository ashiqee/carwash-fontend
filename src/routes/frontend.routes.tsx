
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import HomePage from '@/pages/HomePage';


export const frontendPageRoutes = [
  {
    path: '/',
    element: <HomePage />,

    children: [
     
    ],
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
];
