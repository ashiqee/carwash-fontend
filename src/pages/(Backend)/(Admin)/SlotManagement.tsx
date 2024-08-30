import { useGetAvailableServicesQuery } from '@/redux/features/services/servicesApi';
import React, { useState, useEffect } from 'react';


const SlotManagement = () => {
    const {data}= useGetAvailableServicesQuery()
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    serviceId: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  
 
  const handleStatusToggle = (slotId, currentStatus) => {
    const newStatus = currentStatus === 'AVAILABLE' ? 'CANCELLED' : 'AVAILABLE';
    updateSlotStatus(slotId, newStatus).then(updatedSlot => {
      setSlots(slots.map(slot => slot._id === slotId ? updatedSlot : slot));
    });
  };
  
  const handleSlotCreation = () => {
    createSlot(newSlot).then(createdSlot => {
      setSlots([...slots, createdSlot]);
      // Reset form
      setNewSlot({ serviceId: '', date: '', startTime: '', endTime: '' });
    });
  };
  
  return (
    <div>
      {/* Slot Creation Form */}
      <form onSubmit={handleSlotCreation}>
        {/* Form fields here */}
        <button type="submit">Create Slot</button>
      </form>
      
      {/* Slots Table */}
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr key={slot._id}>
              <td>{slot.serviceName}</td>
              <td>{slot.date}</td>
              <td>{slot.startTime}</td>
              <td>{slot.endTime}</td>
              <td>{slot.status}</td>
              <td>
                {slot.status !== 'BOOKED' && (
                  <button onClick={() => handleStatusToggle(slot._id, slot.status)}>
                    Toggle Status
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SlotManagement;
