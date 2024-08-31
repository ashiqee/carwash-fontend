import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import CRInputNumber from '@/components/form/CRInputNumber';
import CRSelect from '@/components/form/CRSelect';
import CRSelectWithWatch from '@/components/form/CRSelectWithWatch';
import CRTextarea from '@/components/form/CRTextarea';
import CARButton from '@/components/ui/CARButton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useUpdateServiceMutation } from '@/redux/features/services/servicesApi';
import { Image } from 'antd';
import { toast } from 'sonner';

const serviceLevel = [
  {
    value: 'Standard',
    label: 'Standard',
  },
  {
    value: 'Premium',
    label: 'Premium',
  },
  {
    value: 'Deluxe',
    label: 'Deluxe',
  },
  {
    value: 'Express',
    label: 'Express',
  },
  {
    value: 'Eco',
    label: 'Eco',
  },
];

const EditModal = ({ isOpen, onClose, data }) => {
  const [updateService] = useUpdateServiceMutation();

  const handleEditDataSubmit = async (formData:any) => {
    const toastId = toast.loading('Service Updating..');
    const newData = data?._id;

    const update = {
      ...formData,
      id: newData,
    };

    const res = await updateService(update);

    if (res.data.success) {
      toast.success('Service info updated successfully', {
        id: toastId,
        duration: 2000,
      });
      onClose();
    }
  };



  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white min-w-[50vw]">
          <DialogHeader>
            <DialogTitle>Edit service information</DialogTitle>
            <DialogDescription>
              <CRForm onSubmit={handleEditDataSubmit}>
                <div className="">
                  <CRInput
                    type="text"
                    label="Service Title"
                    name="name"
                    className="w-full"
                    defaultValue={data?.name}
                  />
                              </div>

                <div className="flex items-center gap-4">
                  <div className="w-full">
                    <CRInput
                      type="text"
                      className="w-full"
                      label="Service Image Url"
                      name="images"
                      defaultValue={data?.images}
                    />
                    <div className="flex gap-4">
                      <CRInputNumber
                        type="number"
                        className="w-full"
                        label="Price"
                        name="price"
                        defaultValue={data?.price}
                      />
                      <CRInputNumber
                        type="number"
                        className="w-full"
                        label="Duration"
                        name="duration"
                        defaultValue={data?.duration}
                      />
                    </div>
                    {/* <CRInput
                      type="text"
                      className=""
                      label="Category"
                      name="serviceLevel"
                      defaultValue={data?.serviceLevel}
                    /> */}
                  </div>
                  <div className="w-full">
                    <Image
                      className="max-w-fit rounded-md"
                      src={data?.images}
                    />
                  </div>
                </div>
                <CRTextarea
                  type="text"
                  label="Description"
                  name="description"
                  defaultValue={data?.description}
                />

                <CARButton text="Upadte" />
              </CRForm>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
