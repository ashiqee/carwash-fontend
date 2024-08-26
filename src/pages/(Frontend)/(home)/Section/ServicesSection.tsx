import { IServices } from "@/interface/interface";
import { useGetServicesQuery } from "@/redux/features/services/servicesApi";


const ServicesSection = () => {
    const filter = {
        
    }
    const {data:services} = useGetServicesQuery(filter)

    const servicesData = services?.data
    
    return (
        <div  className="2xl:container md:mx-6 mx-4 2xl:mx-auto ">
            <div className="mb-10 space-y-4 max-w-4xl text-center mx-auto">
                <h3 className="text-center text-primary font-bold text-4xl">Most Popular Features Services</h3>
                <p className="text-justify md:text-center">Experience a spotless shine with our top-rated services—express washes, premium detailing, eco-friendly products, and convenient online booking. Whether it’s a quick clean or a full-service pampering, we’ve got your car covered, inside and out.</p>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  items-center">
            {
                servicesData?.slice(0,6).map((service: IServices,i:number)=>(
                    <div  className='w-full  h-70 text-center  rounded-bl-[80px] rounded-tl-[80px] rounded-tr-[10px] p-4 shadow-2xl bg-slate-900/15 rounded-br-[20px] ' key={i}>
                    <div  className='w-full h-70 text-center rounded-bl-[80px] overflow-hidden rounded-tl-[80px] rounded-tr-[10px]  bg-button-gradient  rounded-br-[20px] flex flex-col justify-center' key={i}>
                      
                      <img className="object-cover   " src="https://i.postimg.cc/vTSHVw2c/Login-page.png" alt="" />
                      
                       <div className="py-4  text-white">
                       <h3 className="xl:text-3xl text-2xl font-bold">{service.name}</h3>
                       <p className="xl:text-xl">{service.description}</p>
                     
                       </div>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default ServicesSection;