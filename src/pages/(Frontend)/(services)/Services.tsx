import PageBanner from '@/components/shared/PageBanner';
import { IServices } from '@/interface/interface';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import { Input } from 'antd';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const filter = {
        
    }
    const {data:services} = useGetServicesQuery(filter)

    const servicesData = services?.data
    
    
    return (
        <div>
            <PageBanner  pageName={"All Services"}/>
            {/* Serivice  */}
            <div className='flex gap-6 my-10 container'>
{/* sidebar */}
<div className='w-1/3 space-y-6'>
<div className=' h-fit text-white p-4 rounded-xl bg-button-gradient'>
<label htmlFor="">Search</label>
<Input type='text' placeholder='search'/>
    
</div>
<img className='rounded-xl' src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/gradient-free-car-wash-flyer-template-mt0a4t581ce51c.webp'/>
<img className='rounded-xl' src='https://img.freepik.com/free-vector/24h-car-wash-template_23-2147498052.jpg'/>
</div>

            <div className="grid grid-cols-1 h-fit md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6  items-center">
            {
                servicesData?.map((service: IServices,i:number)=>(
                    <div  className='w-full  h-70 text-center  rounded-bl-[80px] rounded-tl-[80px] rounded-tr-[10px] p-4 shadow-2xl bg-slate-900/15 rounded-br-[20px] ' key={i}>
                   <Link to={service._id}>
                   <div  className='w-full h-70 text-center rounded-bl-[80px] overflow-hidden rounded-tl-[80px] rounded-tr-[10px]  bg-button-gradient  rounded-br-[20px] flex flex-col justify-center' key={i}>
                      
                      <div className='h-48 overflow-hidden'>
                      <img className=" object-cover overflow-hidden hover:scale-125 hover:duration-1000 hover:fade-in-35 " src="https://i.postimg.cc/vTSHVw2c/Login-page.png" alt="" />
                       
                      </div>
                      <div className='flex items-center px-3.5 justify-between'>
                         <Link className='rounded-full border-none shadow-lg p-3 ml-4 hover:bg-gray-400/50 text-white  bg-primary/65' to={service._id}>
                         <ArrowRight />
                         </Link>
                      <div className="py-4 text-right  text-white">
                        <h3 className="text-xl font-bold">{service.name}</h3>
                        <p className="xl:text-xl">{service.price}$</p>
                      
                        </div>
                      </div>
                     </div>
                   </Link>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default Services;