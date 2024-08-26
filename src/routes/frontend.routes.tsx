import AboutUs from '@/pages/(Frontend)/(about-us)/AboutUs';
import Contact from '@/pages/(Frontend)/(contact)/Contact';
import HomePage from '@/pages/(Frontend)/(home)/HomePage';
import Services from '@/pages/(Frontend)/(services)/Services';

export const frontendPageRoutes = [
  {
    path: '/',
    element: <HomePage />,

    children: [
      {
        path:"about-us",
        element:<AboutUs/>
      },
      {
        path:"service",
        element:<Services/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ],
  },
];
