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
        <div className='p-20'>
            <div className='w-[80vw] flex mx-auto h-[80vh] my-auto rounded-3xl shadow-2xl  bg-primary/5'>
            
            <div className='w-full p-20'>
                <h4 className='text-3xl font-bold'>Create Account</h4>
                <p>Get Car Wash </p>


<CRForm onSubmit={onSubmit}>
    <CRInput type='text' name='Name' label='Name' />
    <CRInput type='text' name='Email' label='Email' />
    <CRInput type='text' name='Address' label='Name' />
    <button htmlType="submit">Register</button>
</CRForm>

             
            </div>
            <div className='py-20 w-full'>
                <div className='flex items-center gap-6'>
                <p>Already a member</p>
                <Link to='/login'>
                <CARButton text='Login' className='text-3xl px-14 p-4'/>
                </Link>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Signup;