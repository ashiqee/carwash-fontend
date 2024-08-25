import CARButton from "@/components/ui/CARButton";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="space-y-20 font-bold flex gap-20  text-primary ">
 Home Page 

<Link to={'/login'}>
 <CARButton text="Login"/>
</Link>
<Link to={'/signup'}>
 <CARButton text="Sign Up"/>
</Link>
    </div>
  );
};

export default HomePage;
