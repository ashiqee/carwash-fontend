import CRDatePicker from '@/components/form/CRDatePicker';
import CRForm from '@/components/form/CRForm';
import PageBanner from '@/components/shared/PageBanner';
import CARButton from '@/components/ui/CARButton';
import { useGetAvailableServicesQuery, useGetSingleServicesQuery } from '@/redux/features/services/servicesApi';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';


const ServiceDetails = () => {
    const {id}= useParams()
    const [selectDate,setSelectDate]=useState("")
    const {data, isLoading }=useGetSingleServicesQuery(id)
    const {data:serviceSlot}= useGetAvailableServicesQuery({serviceId:id || "" ,
        date:selectDate
    })

    console.log(selectDate);
    
    // const toastId = toast('Loading..')
    
    if(isLoading){
      return  <>Loading..</>
    }

    
   
    const serviceSlots =serviceSlot?.data;
    
const service = data?.data;

const handleDateSubmit =(date)=>{
   
    const year = date.slot.$y;
    const month= String(date.slot.$M+1).padStart(2,'0');
    const day = String(date.slot.$D).padStart(2,'0');

    const formatDate = `${year}-${month}-${day}`
    setSelectDate(formatDate)
   
    
}
   
toast.success('Loaded data done !', { duration:1000})
    return (
        <div>
            <PageBanner pageName={service?.name} />
            <div className='container my-10 shadow-xl p-10 rounded-xl' >
                {/* Detail service  */}
<div>
    <h2 className='text-3xl font-bold'>{service?.name}</h2>
</div>

<div className='my-20'>
    <div className='flex items-center justify-between'>
        <h2 className='text-4xl '>Service Slot</h2>
        <CRForm  onSubmit={handleDateSubmit}>
        
         <CRDatePicker name='slot' label='Filter with date'></CRDatePicker>
          <div className='flex w-full  gap-2'>
          <CARButton text='Filter' />
          <Button className='py-3' onClick={()=>setSelectDate('')}>Clear Filter</Button>
          </div>
        
        </CRForm>
    </div>

{selectDate && 
    <p>Filter date: {selectDate}</p>}
<div>
{
        !serviceSlot?.success ? <p className='text-3xl text-center w-full'>Sorry! Not available slot for This services </p>
        : <div className='grid grid-cols-1  gap-6'>
        {
            serviceSlots?.map((slot,i)=>(
               <div className='flex justify-between hover:shadow-xl  border p-6 shadow-md text-center items-center ' key={i}>
             <div>
             <h2>
              {service?.name}
              </h2>
              {slot.date}
              <img src="" alt="" />
             </div>

             <div className='text-center '>
                <p>Start Time</p>
                <p className='text-red-600'>{slot.startTime}</p>
             </div>
             <div>
                <p>End Time</p>
                <p className='text-red-600'>{slot.endTime}</p>
             </div>
                <div>
                    ${service.price}
                </div>
                <div>
                   <CARButton text='Booking Now'/>
                </div>
               </div>
            ))
        }
        </div>
    }
</div>

</div>
            </div>
        </div>
    );
};

export default ServiceDetails;