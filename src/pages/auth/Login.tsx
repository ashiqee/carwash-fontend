import CRForm from '@/components/form/CRForm';
import CRInput from '@/components/form/CRInput';
import CARButton from '@/components/ui/CARButton';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data:any)=>{
        console.log(data);
        
    }

    return (
        <div className='2xl:p-20 p-4'>
            <div className='2xl:w-[60vw] md:w-[70vw] md:flex mx-auto 2xl:h-[80vh] my-auto rounded-3xl shadow-2xl  bg-primary/5'>
            
            <div className='w-full space-y-6 p-4 md:p-8  2xl:p-20'>
       <div className=''>
       <h4 className='text-3xl font-bold'>Login Now</h4>
       <p>Get Car Wash </p>
       </div>


<CRForm onSubmit={onSubmit}>
    <CRInput type='text' name='username' label='Userid or Mobile No' />
    <CRInput type='password' name='Password' label='Password' />
    
    <CARButton className='text-xl px-4 p-1.5' text='Login'/>
</CRForm>

             
            </div>
            <div className='md:py-20 py-10 px-4 w-full'>
                <div className='flex items-center gap-6'>
                <p>If Not Register Please sign up</p>
                <Link to='/signup'>
                <CARButton text='Sign Up' className='md:text-2xl px-8 md:px-8 p-2'/>
                </Link>

                </div>
                <img className='w-96 rounded-bl-[50px] rounded-tl-[150px] opacity-20 rounded-r-[200px] my-10' src='https://i.postimg.cc/vTSHVw2c/Login-page.png' />
            </div>
            
            </div>
        </div>
    );
};

export default Login;