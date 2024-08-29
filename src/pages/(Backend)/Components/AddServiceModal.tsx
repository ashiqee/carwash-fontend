import CRForm from "@/components/form/CRForm";
import CRInput from "@/components/form/CRInput";
import CRSelect from "@/components/form/CRSelect";
import CRSelectWithWatch from "@/components/form/CRSelectWithWatch";
import CRTextarea from "@/components/form/CRTextarea";
import CARButton from "@/components/ui/CARButton";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button, Image } from "antd";
  

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

const AddNewService = () => {

  

    const handleEditDataSubmit =(data:any)=>{
        console.log("Click Form",data);
        
    }
    
    return (
        <div>
  <h3 className="text-2xl font-bold">Add New Service</h3>
        
      <CRForm onSubmit={handleEditDataSubmit}>
                 <div className="flex items-center justify-between gap-4">
                 <CRInput
                    type="text"
                    label="Service Title"
                    name="name"
                    className="w-full"
                  
                  />
                
                 </div>
                  <div className="flex gap-6 items-center justify-between">
                  <CRInput
                    type="text"
                    className="w-full"
                    label="Image Link"
                    name="images"
                    
                  />
                   <CRSelect
                 
                 className="w-full"
                 label="Category"
                 name="serviceLevel"
                 options={serviceLevel}

              />
                  {/* <Image className="max-w-40 rounded-md" src={data?.images}/> */}
                  </div>

                  <div className="flex gap-4">
                    <CRInput
                      type="number"
                      className="w-full"
                      label="Price"
                      name="price"
                    
                    />
                    <CRInput
                      type="number"
                      className="w-full"
                      label="Duration"
                      name="duration"
                     
                    />
                  
                  
                 
                  </div>
                    <CRTextarea type="text" label="Description"
                    name="description"
                 
                    />
               
                  <CARButton text="Add New Service"/>
               
                </CRForm>


        </div>
    );
};

export default AddNewService;