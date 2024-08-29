import { routeGenarator } from '@/utils/routeGenerator';
import { createBrowserRouter } from 'react-router-dom';
import { frontendPageRoutes } from './frontend.routes';
import MainLayout from '@/components/layout/MainLayout';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import BackendLayout from '@/components/layout/BackendLayout';
import { backendPageRoutes } from './backend.routes';
import ErrorPage from '@/components/shared/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: routeGenarator(frontendPageRoutes),
  },
  {
    path: '/dashboard',
    element: <BackendLayout />,
    errorElement:<ErrorPage/>,
    children: routeGenarator(backendPageRoutes),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;
