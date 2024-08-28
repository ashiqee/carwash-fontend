import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import CRTextarea from '@/components/form/CRTextarea';
import CARButton from '@/components/ui/CARButton';

import { Star, Stars } from 'lucide-react';
import Rating from 'react-rating';

const ReviewForm = () => {
    const RatingComponent = Rating as any

    const handleReviewSubmit =(data)=>{
        console.log(data);
        
    }
  return (
    <div className='w-full'>
      <div className="text-4xl text-primary">
      <RatingComponent 
        emptySymbol={ <Star />}
        fullSymbol= {<Stars className="text-red-500 fill-red-500" />}
      />
      </div>

      <div className='w-full'>
       <CRForm onSubmit={handleReviewSubmit}>
       <div className='flex gap-4 '>
       <CRInput type='text' className='w-full' placeholder='Name' name={"name"}/>
       <CRInput type='text' className='w-full' placeholder='Email' name={"email"}/>
       </div>
        <CRTextarea type='text' name='feedback'/>
        <CARButton text='Submit'/>
       </CRForm>
      </div>
    </div>
  );
};

export default ReviewForm;
