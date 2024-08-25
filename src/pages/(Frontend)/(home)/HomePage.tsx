import CARButton from "@/components/ui/CARButton";
import { useGetServicesQuery } from "@/redux/features/services/servicesApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Section/Banner";

const initialFilterValues: TFilters = {
  searchTerm: '',
  pageLimit: 5,
  currentPage: 1,
};

const HomePage = () => {
  const [filters, setFilters] = useState<TFilters>(initialFilterValues);
  
  const {data , isLoading } = useGetServicesQuery(filters)

  console.log(data);
  
  return (
    <div className="space-y-20 font-bold flex gap-20  text-primary ">

<Banner/>
    </div>
  );
};

export default HomePage;
