import CRDatePicker from '@/components/form/CRDatePicker';
import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import CRSelect from '@/components/form/CRSelect';
import CRTextarea from '@/components/form/CRTextarea';
import CRTimePicker from '@/components/form/CRTimePicker';
import CARButton from '@/components/ui/CARButton';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import { Select } from 'antd';
import CRSelectWithWatch from './../../../components/form/CRSelectWithWatch';
import { useState } from 'react';
import { IServices } from '@/interface/interface';
import { Image } from 'antd';
import StartnEndTimeConverter from '../utils/StartnEndTimeConverter';
import { toast } from 'sonner';

const serviceLevel = [
  {
    value: 'Standard',
    label: 'Standard',
  },
  {
    value: 'Premium',
    label: 'Premium',
  },
  {
    value: 'Deluxe',
    label: 'Deluxe',
  },
  {
    value: 'Express',
    label: 'Express',
  },
  {
    value: 'Eco',
    label: 'Eco',
  },
];

const CreateSlots = () => {
  const { data: servicesDatas, isLoading } = useGetServicesQuery(undefined);
  const [service, setService] = useState<IServices|null>(null);
  const [slotTime,setSlotTime]=useState({
    startTime:'',
    endTime:"",
  })

  if (isLoading) {
    return <>Loading..</>;
  }

  const services = servicesDatas?.data?.map((service: any) => ({
    value: service._id,
    label: service.name,
  }));

  const handleValueChange = async (data: any) => {
    const serviceData = await servicesDatas?.data?.filter(
      (item: IServices) => item._id === data,
    );
    if (serviceData && serviceData.length > 0) {
      const [service] = serviceData;
      setService(service);
    } else {
      setService(null);
    }
  };



  const handleEditDataSubmit = (data: any) => {
    console.log(data);
    const year = data.date.$y;
    const month = String(data.date.$M + 1).padStart(2, '0');
    const day = String(data.date.$D).padStart(2, '0');

    const formatDate = `${year}-${month}-${day}`;
    const startTime = StartnEndTimeConverter(data?.startTime.$d)
    const endTime = StartnEndTimeConverter(data?.endTime?.$d)
    
    const soltData ={
        service: data.serviceId, 
        serviceDuration: service?.duration,
        date: formatDate, 
        startTime:startTime.time, 
        endTime: endTime.time 
    }
    console.log('Click Form', soltData);
  };

  console.log(service?.name);
  
 
  return (
    <div>
      <h3 className="text-2xl font-bold">Create new slots for service</h3>

      <div className='flex gap-10 p-10 '>
      <CRForm onSubmit={handleEditDataSubmit}>
        <div className="flex w-full items-center justify-between mt-1  gap-4">
          <CRSelectWithWatch
            label="Select Service"
            name="serviceId"
            className="w-full"
            onValueChange={handleValueChange}
            options={services}
          />
        </div>
          <CRDatePicker label="Select Date"
          disabled={!service}
          name="date" />
        <div className="flex gap-6 items-center justify-between">
          <CRTimePicker 
        
          disabled={!service}
          label="Start Time" name="startTime" />
        <CRTimePicker 
         
          disabled={!service}
          label="End Time" name="endTime" />


        
        </div>
        
    
        <CARButton text="Add New Service" />
      </CRForm>

      <div>
        <h3>Service details</h3>
        {
            service && <div className='p-10 space-y-4'>
                <Image className='max-w-60 rounded-lg' src={service?.images}/>
             <div className='text-md '>
                <h2 className='text-xl font-bold'>{service?.name}</h2>
             <p>{service?.serviceLevel}</p>
                <p>Price: {service?.price}</p>
                <p>Duration: {service?.duration}</p>
             </div>
            </div>
        }
      </div>
      </div>
    </div>
  );
};

export default CreateSlots;
