import { useGetMyBookingsQuery } from '@/redux/features/bookings/BookingApi';
import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from './CountdownTimer';

const ImmediateSlot = () => {

    const { data: usersBookings,isLoading } = useGetMyBookingsQuery(undefined);

    if(isLoading){
      return <>Loading..</>
    }
    
    
      const parseDateTime = (date:string,time:string)=> new Date(`${date}T${time}`);
    
    
      const sortedBookings = [...usersBookings?.data|| []].sort((a,b)=>{
        const dateTimeA = parseDateTime(a.slot.date,a.slot.startTime);
        const dateTimeB = parseDateTime(b.slot.date,b.slot.startTime);
        return dateTimeA.getTime() - dateTimeB.getTime();
      })
    
      const immediateSlot = sortedBookings?.[0]

    return (
        <div className=' border p-2 rounded-lg'>
            <div className='flex justify-between items-center'>
            <Link to={`/services/${immediateSlot.service._id}`}> <p>{immediateSlot.service.name}</p></Link>
            <p>StartTime: {immediateSlot.slot.startTime}</p>
            </div>
            <Countdown countdownTargetDate={new Date(`${immediateSlot.slot.date}T${immediateSlot.slot.startTime}`)} />
        
        </div>
    );
};

export default ImmediateSlot;