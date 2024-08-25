
import App from "@/App";
import { routeGenarator } from "@/utils/routeGenerator";
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import { frontendPageRoutes } from "./frontend.routes";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:routeGenarator(frontendPageRoutes),
    },
  ]);


export default router;