
import AboutUs from '@/pages/(Frontend)/(about-us)/AboutUs';
import Booking from '@/pages/(Frontend)/(booking)/Booking';
import Compare from '@/pages/(Frontend)/(compare)/Compare';
import HomePage from '@/pages/(Frontend)/(home)/HomePage';
import ServiceDetails from '@/pages/(Frontend)/(services)/ServiceDetails';
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
        path:"services",
        element:<Services/>
      },
      {
        path:"services/:id",
        element:<ServiceDetails/>
      },
      {
        path:"booking",
        element:<Booking/>
      },
      {
        path:"compare",
        element:<Compare/>
      },
    ],
  },
];
