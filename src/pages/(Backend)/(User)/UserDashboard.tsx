import { useGetMyBookingsQuery } from '@/redux/features/bookings/BookingApi';
import React from 'react';

const UserDashboard = () => {
    const {data:usersBookings}= useGetMyBookingsQuery(undefined)

    console.log(usersBookings);
    

    return (
        <div>
           <h4 className="text-3xl font-bold">Up Coming Bookings</h4>

           <div className='grid grid-cols-3 my-10 gap-6'>
  {
    usersBookings?.data?.slice(0, 6).map((slot, i) => (
      <div
        className=" space-y-3 justify-between hover:scale-105 hover:duration-1000 rounded-md hover:shadow-xl border p-6 shadow-md items-center "
        key={i}
      >
        <div className='flex items-center justify-between gap-1.5'>
          <div>
            <p>{slot.date}</p>
            <img src="" alt="" />
          </div>
          <div className='flex gap-4 text-center'>
            <div className=" bg-primary/5 px-3 rounded-lg p-1 ">
              <p>Start Time</p>
              <p className="text-red-600">{slot.startTime}</p>
            </div>
            <div className=" bg-primary/5 px-3 rounded-lg p-1 ">
              <p>End Time</p>
              <p className="text-red-600">{slot.endTime}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between border'>
          <div>
            <p>Time Left:</p>
            <CountdownTimer targetDate={slot.startTime} />
          </div>
        </div>
      </div>
    ))
  }
</div>


        </div>
    );
};

export default UserDashboard;