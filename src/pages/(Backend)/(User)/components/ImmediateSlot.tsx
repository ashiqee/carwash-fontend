import { useGetMyBookingsQuery } from '@/redux/features/bookings/BookingApi';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './CountdownTimer';
import Loading from '@/components/shared/Loading';

const ImmediateSlot = () => {
  const [skipLoad,setSkipLoad]=useState(true)

    const { data: usersBookings,isLoading } = useGetMyBookingsQuery(undefined,{skip:skipLoad});

    useEffect(() => {
      if (!usersBookings && !isLoading) {
        setSkipLoad(false);  // Enable loading the query if there are no bookings and it's not currently loading
      }
    }, [usersBookings, isLoading]);


    if (isLoading) {
      return <><Loading/></>;
    }
    
    if (!usersBookings) {
      return <></>;
    }


      const parseDateTime = (date:string,time:string)=> new Date(`${date}T${time}`);
    
    
      const sortedBookings = [...usersBookings?.data|| []].sort((a,b)=>{
        const dateTimeA = parseDateTime(a.slot.date,a.slot.startTime);
        const dateTimeB = parseDateTime(b.slot.date,b.slot.startTime);
        return dateTimeA.getTime() - dateTimeB.getTime();
      })
    
      const immediateSlot = sortedBookings?.[0]

    return (
        <>
        {
          immediateSlot ? <div className='shadow absolute right-1/3 p-2 -translate-y-20 hover:-translate-y-5 duration-1000 hover:bg-button-gradient hover:text-white  rounded-lg'>
          <div className='flex justify-between items-center'>
          <Link to={`/services/${immediateSlot?.service._id}`}> <p>{immediateSlot?.service.name}</p></Link>
          <p>StartTime: {immediateSlot?.slot.startTime}</p>
          </div>
          <Countdown countdownTargetDate={new Date(`${immediateSlot?.slot.date}T${immediateSlot?.slot.startTime}`)} />
      
      </div> : ""
        }
        </>
    );
};

export default ImmediateSlot;