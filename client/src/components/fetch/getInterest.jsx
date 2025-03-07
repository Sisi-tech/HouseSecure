import React from 'react';

const GetInterestInfo = ({ interestItem }) => {
    if (!interestItem) {
        return null;
    }

    return (
        <div className='w-full flex flex-col justify-center items-center space-y-2 p-2  pl-4 pr-4 lg:pl-16 lg:pr-16'>
            <h2 className='font-semibold text-[16px] text-sky-700'>Interest</h2>
            <div className='w-full min-w-screen grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 text-md border-b'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Interest Type</p>
                    <p>{interestItem.interestType}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Name</p>
                    <p>{interestItem.name}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Mailing Address</p>
                    <p>{interestItem.mailingAddress}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Optional Address</p>
                    <p>{interestItem.optionalAddress}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>City</p>
                    <p>{interestItem.city}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>State</p>
                    <p>{interestItem.state}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Postal Code</p>
                    <p>{interestItem.postalCode}</p>
                </div>
            </div>
        </div>
    );
};

export default GetInterestInfo;


