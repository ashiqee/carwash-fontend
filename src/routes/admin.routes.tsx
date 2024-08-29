import AdminDashboard from "@/pages/(Backend)/(Admin)/AdminDashboard";
import RecentBookings from "@/pages/(Backend)/(Admin)/RecentBookings";
import ServiceManagement from "@/pages/(Backend)/(Admin)/ServiceManagement";
import SlotManagement from "@/pages/(Backend)/(Admin)/SlotManagement";
import UserManagement from "@/pages/(Backend)/(Admin)/UserManagement";


export const adminPaths =[
    {
        name:"Dashboard",
        path:'dashboard',
        element:<AdminDashboard/>
    },
    {
        name:"Recent Booking",
        path:'bookings',
        element:<RecentBookings/>
    },
    {
        name:"Service management",
        path:'service-management',
        element:<ServiceManagement/>
    },
    {
        name:"Slot management",
        path:'slot-management',
        element:<SlotManagement/>
    },
    {
        name:"User management",
        path:'slot-management',
        element:<UserManagement/>
    },
]