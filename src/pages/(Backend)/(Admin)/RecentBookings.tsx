import CRForm from '@/components/form/CRForm';
import CRSelect from '@/components/form/CRSelect';
import React from 'react';

const RecentBookings = () => {
    const serviceLevel =[
        {
          value:"Standard",
          label:"Standard"
        },
        {
          value:"Premium",
          label:"Premium"
        },
        {
          value:"Deluxe",
          label:"Deluxe"
        },
        {
          value:"Express",
          label:"Express"
        },
        {
          value:"Eco",
          label:"Eco"
        },
      ]

      const handleSubmit = (d)=>{
        console.log(d);
        
      }
    return (
        <div>
            <h3 className='text-2xl font-bold'>Recent Management</h3>
           <CRForm onSubmit={handleSubmit}>

           <CRSelect 
                  label="Service Category"
                  className=" w-full text-primary"
                   name="serviceLevel"  options={serviceLevel} />

           </CRForm>
        </div>
    );
};

export default RecentBookings;