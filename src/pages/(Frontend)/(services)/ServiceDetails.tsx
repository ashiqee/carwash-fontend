import CRDatePicker from '@/components/form/CRDatePicker';
import CRForm from '@/components/form/CRForm';
import PageBanner from '@/components/shared/PageBanner';
import CARButton from '@/components/ui/CARButton';
import {
  useGetAvailableServicesQuery,
  useGetSingleServicesQuery,
} from '@/redux/features/services/servicesApi';
import { currentDate } from '@/utils/currentDate';
import { Button } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(currentDate);

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
    const year = date.slot.$y;
    const month = String(date.slot.$M + 1).padStart(2, '0');
    const day = String(date.slot.$D).padStart(2, '0');

    const formatDate = `${year}-${month}-${day}`;
    setSelectDate(formatDate);
  };

  toast.success('Loaded data done !', { duration: 1000 });
  return (
    <div>
      <PageBanner pageName={service?.name} />
      <div className="container my-10 shadow-xl p-10 rounded-xl">
        {/* Detail service  */}
        <div className='flex '>
            <div className='w-full '>
                <img className='w-full rounded-l-2xl' src="https://media.istockphoto.com/id/174942860/photo/tire-wash.jpg?s=612x612&w=0&k=20&c=IHqUkH8UZl1vyS02BAU5zbJ2xvE-_NMFwSXOgfr2jdI=" alt="" />
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
          <div className="flex items-center justify-between">
            <h2 className="text-4xl ">Service Slot</h2>
            <CRForm onSubmit={handleDateSubmit}>
              <CRDatePicker name="slot" label="Filter with date"></CRDatePicker>
              <div className="flex w-full  gap-2">
                <CARButton text="Filter" />
                <Button className="py-3" onClick={() => setSelectDate(currentDate)}>
                  Clear Filter
                </Button>
              </div>
            </CRForm>
          </div>

          {selectDate && <p>Filter date: {selectDate}</p>}
          <div>
            {!serviceSlot?.success ? (
              <p className="text-3xl text-center w-full">
                Sorry! Not available slot for This services{' '}
              </p>
            ) : (
              <div className="grid grid-cols-1  gap-6">
                {// eslint-disable-next-line @typescript-eslint/no-explicit-any
                serviceSlots?.map((slot: any, i: number) => (
                  <div
                    className="flex justify-between hover:shadow-xl  border p-6 shadow-md text-center items-center "
                    key={i}
                  >
                    <div>
                      <h2>{service?.name}</h2>
                      {slot.date}
                      <img src="" alt="" />
                    </div>

                    <div className="text-center ">
                      <p>Start Time</p>
                      <p className="text-red-600">{slot.startTime}</p>
                    </div>
                    <div>
                      <p>End Time</p>
                      <p className="text-red-600">{slot.endTime}</p>
                    </div>
                    <div>${service.price}</div>
                    <div>
                      {slot.isBooked === 'booked' ? (
                        <Button disabled>Already Booked</Button>
                      ) : (
                        <CARButton text="Book This Service" />
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
  );
};

export default ServiceDetails;
