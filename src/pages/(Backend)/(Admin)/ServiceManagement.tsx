import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical, Plus, Trash } from 'lucide-react';
import { Image } from 'antd';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import { TFilterValues } from '@/pages/(Frontend)/(services)/Services';
import CARButton from '@/components/ui/CARButton';
import Search from '@/components/ui/Search';
import EditModal from '../Components/EditModal';
import { Link } from 'react-router-dom';
import { IServices } from '@/interface/interface';



const ServiceManagement = () => {
  const initialFilterValues: TFilterValues = {
    searchTerm: '',
    sortByPrice: '',
    servicelevel: [],
  };
  const [filters, setFilters] = useState<TFilterValues>(initialFilterValues);
  
  const { data: servicesData, isLoading } = useGetServicesQuery(filters);
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [editServiceData, setServiceData] = useState(null);

  const openModal = (data:any) => {
    setServiceData(data)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  console.log(servicesData?.data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearterm = (data: any) => {
    const value = data.value;
    setFilters((prevValues) => ({
      ...prevValues,
      searchTerm: value,
    }));
  };
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Service Management</h3>
        <Link to={`/admin/add-new-servive`}>
        <CARButton icon={<Plus />} text="Add New Service" />
        </Link>
      </div>

      {/* //service table */}
      <div>
        <div className="border w-60 my-5 rounded-lg">
          <form onChange={(e) => handleSearterm(e.target)} action="">
            <Search />
          </form>
        </div>

        <Table>
          <TableCaption>List of your recent booked service.</TableCaption>
          <TableHeader>
            {
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Service Details</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            }
          </TableHeader>
          <TableBody>
            {servicesData?.data?.map((service:IServices, i:number) => (
              <TableRow key={service._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell className="flex gap-2">
                  <Image
                    className="max-w-32 rounded-xl"
                    src={service.images}
                    alt=""
                  />
                  <div>
                    <p className="text-xl">{service.name}</p>
                    <p className="text-sm">{service.serviceLevel}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{service.duration}min</p>
                </TableCell>
                <TableCell className="text-right">{service.price}</TableCell>
                <TableCell className="font-medium  text-right ">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Action Menu</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={()=>openModal(service)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isModalOpen && (
        <EditModal
          data={editServiceData}
          isOpen={!!editServiceData}
          onClose={closeModal}
        />
      )}
      </div>
    </div>
  );
};

export default ServiceManagement;
