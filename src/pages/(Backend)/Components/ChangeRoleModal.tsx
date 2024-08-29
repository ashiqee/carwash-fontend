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
import { Button, Image, Input, Select } from "antd";
  


const ChangeRoleModal = ({isOpen,onClose,data}) => {

  

    const handleEditDataSubmit =(e)=>{
      e.preventDefault()

       const newRole = e.target.role.value;
       const userInfo={
        role:newRole,
        userId: data._id,
       }

       console.log(userInfo);
       
        
    }
    
    return (
        <div>
            <Dialog  open={isOpen} onOpenChange={onClose}>

  <DialogContent className="bg-white  min-w-[30vw]">
    <DialogHeader>
      <DialogTitle>Change user role</DialogTitle>
      <DialogDescription>

        <form onSubmit={(e)=>handleEditDataSubmit(e)} className="space-y-4"  action="" >
   <div className="flex items-center text-primary gap-4 my-10">
  <div className="w-full">
    <label htmlFor="">User Name</label>
    <Input type="text" name="name"
                    disabled
                    className="w-full"
                    
                    defaultValue={data?.name}  />

  </div>
<div className="w-full">
  <label htmlFor="">Role</label>
  <select name="role" className="w-full border p-1 px-4">
  <option value="admin">admin</option>
  <option value="user">user</option>
</select>
</div>
   </div>

           
                  <CARButton  text="Update Role"/>
        </form>
    
               
     
               
             
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        </div>
    );
};

export default ChangeRoleModal;