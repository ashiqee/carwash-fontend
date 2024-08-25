import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import CARButton from '@/components/ui/CARButton';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {


    const onSubmit = async (data)=>{
        console.log(data);
        
    }

    return (
        <div className='md:p-20 p-4'>
            <div className='md:w-[60vw] md:flex mx-auto md:h-[80vh] my-auto rounded-3xl shadow-2xl  bg-primary/5'>
            
            <div className='w-full space-y-6 p-4  md:p-20'>
       <div className=''>
       <h4 className='text-3xl font-bold'>Create Account</h4>
       <p>Get Car Wash </p>
       </div>


<CRForm onSubmit={onSubmit}>
    <CRInput type='text' name='name' label='Full Name' />
    <div className='flex justify-between gap-4 '>
    <CRInput type='email' className='w-full' name='email' label='Email' />
    <CRInput type='text' className='w-full' name='phone' label='Phone' />
    </div>
    <CRInput type='text' name='address' label='Full Address' />
    <CRInput type='password' name='Password' label='Password' />
    
    <CARButton className='text-xl px-4 p-1.5' text='Register'/>
</CRForm>

             
            </div>
            <div className='md:py-20 py-10 px-4 w-full'>
                <div className='flex items-center gap-6'>
                <p>Already a member</p>
                <Link to='/login'>
                <CARButton text='Login' className='md:text-2xl px-8 md:px-8 p-2'/>
                </Link>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Signup;