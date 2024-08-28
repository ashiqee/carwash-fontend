import PageBanner from "@/components/shared/PageBanner";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Image } from "antd";
import { Trash } from "lucide-react";
  


const Booking = () => {
    return (
      <div>
         <PageBanner pageName={"Booking Page"} />
          <div className="2xl:p-20 p-4">
      <div className="container  rounded-2xl md:flex mx-auto  shadow-2xl  bg-primary/5">
        <div className="w-full space-y-6 p-4 md:p-8  2xl:p-20">
          <div className="">
            <h4 className="text-3xl font-bold">Booked Services</h4>
          
          <div>
          <Table>
  <TableCaption>List of your recent booked service.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Action</TableHead>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Service Details</TableHead>
      <TableHead>Time Slot</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium"><Trash/></TableCell>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="flex gap-2">
        <Image  className="max-w-32 rounded-xl" src="https://img.freepik.com/premium-photo/portrait-young-smiling-happy-attractive-woman-washing-automobile-manual-car-washing-self-service-station-cleaning-with-foam-pressured-water-transportation-auto-vehicle-care-concept_361821-1369.jpg" alt="" />
        <div>
        <p className="text-xl">Service Name</p>
        <p className="text-sm">Standard</p>
        <p className="text-sm">Duration: 60min</p>
        </div>
      </TableCell>
      <TableCell>
        <p>Date: 28-08-2024</p>
        <p>Time: 10:00 - 11:00</p>
      </TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

          </div>
          </div>

        
        </div>
        <div className="md:py-20 py-10 px-4 w-[60%]">
          <div className="">
            <h3>User Information</h3>
         <div>
          
         </div>
          </div>
         
        </div>
      </div>
    </div>
      </div>
    );
};

export default Booking;