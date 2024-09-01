import CRCalendar from '@/components/form/CRCalendar';
import CRDatePicker from '@/components/form/CRDatePicker';
import CRForm from '@/components/form/CRForm';
import PageBanner from '@/components/shared/PageBanner';
import CARButton from '@/components/ui/CARButton';
import { addBookingCart } from '@/redux/features/bookings/bookedSlice';
import { useAddBookingMutation } from '@/redux/features/bookings/BookingApi';
import {
  useGetAvailableServicesQuery,
  useGetSingleServicesQuery,
} from '@/redux/features/services/servicesApi';
import { useAppDispatch } from '@/redux/hook';
import { currentDate } from '@/utils/currentDate';
import { Button, Image } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
const dispatch = useAppDispatch()

  const [selectDate, setSelectDate] = useState(currentDate);
  const { data, isLoading } = useGetSingleServicesQuery(id);
  const { data: serviceSlot } = useGetAvailableServicesQuery({
    serviceId: id || '',
    date: selectDate,
  });

 
  
  // const toastId = toast('Loading..')

  if (isLoading) {
    return <>Loading..</>;
  }

  const serviceSlots = serviceSlot?.data;

  const service = data?.data;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateSubmit = (date: any) => {
    console.log(date);
    
    const year = date.$y;
    const month = String(date.$M + 1).padStart(2, '0');
    const day = String(date.$D).padStart(2, '0');

    const formatDate = `${year}-${month}-${day}`;
    setSelectDate(formatDate);
  };

  serviceSlots && toast.success('Loaded data done !', { duration: 1000 });


const handleBookedASlot =(data)=>{


navigate('/booking',{state:{data}});


  toast.success('Your selected slot Booked!', { duration: 1000 });
}


  return (
    <div>
      <PageBanner pageName={service?.name} />
      <div className="container my-10 shadow-xl  md:p-10 rounded-xl">
        {/* Detail service  */}
        <div className='xl:flex '>
            <div className='w-full overflow-hidden'>
                <Image  className='w-full xl:min-h-[600px] object-cover bg-primary/5 rounded-l-2xl' src={service.images} alt="" />
            </div>
          <div className='px-8 py-4 space-y-2 bg-primary/5 w-full rounded-r-2xl'>
          <div className='flex justify-between items-center '>
          <h2 className="text-3xl font-bold">{service?.name}</h2>
          <small className='border p-1 rounded-lg bg-primary/10 px-2'>{service.serviceLevel}</small>
          </div>
          <h2 className="text-xl font-bold">Duration: {service?.duration} Minute</h2>
          <h2 className="text-2xl font-bold">Price: {service?.price}৳ </h2>
          <p><span>Details: </span>{service.description}</p>
            
          
          </div>
        
          
        </div>

        <div className="my-10">
          <div className="flex items-center justify-center py-5">
            <h2 className="text-4xl font-bold">Service Slot</h2>
            
          </div>

        
          <div className='xl:flex gap-6 '>
         <div className='xl:w-1/3 mx-auto w-full'>
         <CRForm onSubmit={handleDateSubmit}>
              {/* <CRDatePicker name="slot" label="Filter with date"></CRDatePicker> */}
           
              <CRCalendar  onChange={handleDateSubmit} label='Select date' name="slot"/>
              <div className="flex w-full  gap-2">
                {/* <CARButton  text="Filter" /> */}
                <Button className="py-3" onClick={() => setSelectDate(currentDate)}>
                  Clear Filter
                </Button>
              </div>
            </CRForm>
         </div>
          <div className='w-full space-y-4'>
          {selectDate && <p className='text-right'>Filter date: {selectDate}</p>}
          {!serviceSlot?.success ? (
              <p className="text-3xl text-center w-full">
                Sorry! Not available slot for This services{' '}
              </p>
            ) : (
              <div className="grid xl:grid-cols-2  gap-6">
                {// eslint-disable-next-line @typescript-eslint/no-explicit-any
                serviceSlots?.map((slot: any, i: number) => (
                  <div
                    className=" space-y-3 justify-between hover:scale-105 hover:duration-1000 rounded-md hover:shadow-xl  border p-6 shadow-md  items-center "
                    key={i}
                  >
                    <div className='flex  items-center justify-between gap-1.5'>
                    <div>
                      <h2>{service?.name}</h2>
                      {slot.date}
                      <img src="" alt="" />
                    </div>

                 <div className='flex gap-4 text-center'>
                 <div className="  bg-primary/5 px-3 rounded-lg p-1 ">
                      <p>Start Time</p>
                      <p className="text-red-600">{slot.startTime}</p>
                    </div>
                    <div className="  bg-primary/5 px-3 rounded-lg p-1 ">
                      <p>End Time</p>
                      <p className="text-red-600">{slot.endTime}</p>
                    </div>
                 </div>
                   
                   
                      
                    </div>
                    <div className='flex justify-between border'>
                    <div>
                    <p>Price: {service.price}৳</p>
                        </div>
                    {slot.isBooked === 'booked' ? (
                        <Button disabled>Already Booked</Button>
                      ) : (
                        <button onClick={()=>handleBookedASlot(
                          {slot,
                            service
                        })} className='bg-button-gradient w-48 p-1 px-2 hover:scale-105 hover:duration-1000 text-white rounded-md'> Booked Now</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
