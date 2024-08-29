import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import PageBanner from '@/components/shared/PageBanner';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetUserinfoQuery } from '@/redux/features/auths/authApi';
import { useCurrentToken } from '@/redux/features/auths/authSlice';
import { useAppSelector } from '@/redux/hook';
import { verifyToken } from '@/utils/verifyToken';
import { Image } from 'antd';
import { Trash } from 'lucide-react';

const Booking = () => {
  const token = useAppSelector(useCurrentToken);
  let user;
  if(token){
      user= verifyToken(token);
  }
  
  
  const { data: userData, isLoading } = useGetUserinfoQuery(user?.userEmail);

  if (isLoading) {
    return <>Loading..</>;
  }
  const userInfo = userData?.data;
  console.log(userInfo);

  const handleBookingSubmit = (data) => {
    console.log(data);

    const userData = {
      name: data.name || userInfo?.name,
      email: data.email || userInfo?.email,
      phone: data.phone || userInfo?.phone,
    };

    console.log(userData);
  };

  return (
    <div>
      <PageBanner pageName={'Booking Page'} />
      <div className="2xl:p-20 p-4">
        <div className="container  rounded-2xl md:flex mx-auto  shadow-2xl  bg-primary/5">
          <div className="w-full space-y-6 p-4 md:p-8  2xl:p-20">
            <div className="">
              <h4 className="text-3xl font-bold">Booked Services</h4>

              <div className="py-10">
                <Table>
                  <TableCaption>
                    List of your recent booked service.
                  </TableCaption>
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
                      <TableCell className="font-medium">
                        <Trash />
                      </TableCell>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell className="flex gap-2">
                        <Image
                          className="max-w-32 rounded-xl"
                          src="https://img.freepik.com/premium-photo/portrait-young-smiling-happy-attractive-woman-washing-automobile-manual-car-washing-self-service-station-cleaning-with-foam-pressured-water-transportation-auto-vehicle-care-concept_361821-1369.jpg"
                          alt=""
                        />
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
          <div className=" py-10 bg-primary/5 px-4 md:w-[60%]">
            <div className="md:px-10">
              <h3 className="text-2xl font-bold">User Information</h3>
              <div className="py-10">
                <CRForm onSubmit={handleBookingSubmit}>
                  <CRInput
                    type="text"
                    label="Full Name"
                    name="name"
                    defaultValue={userInfo?.name}
                  />

                  <div className="flex gap-4">
                    <CRInput
                      type="email"
                      className="w-full"
                      label="email"
                      name="email"
                      defaultValue={userInfo?.email}
                    />
                    <CRInput
                      type="phone"
                      className="w-full"
                      label="Mobile"
                      name="phone"
                      defaultValue={userInfo?.phone}
                    />
                  </div>
                  <p className="p-2 bg-slate-50 rounded-sm mb-6">
                    Selected Time Slot: 09:00-10:00
                  </p>
                  <Button className="text-white" type="submit">
                    Pay Now
                  </Button>
                </CRForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
