import React from 'react';
import PropTypes from 'prop-types';

const GetLocationItem = ({ locationItem }) => {
    if (!locationItem) {
        return null;
    }
    return (
        <div className='w-full min-w-screen flex flex-col justify-center items-center space-y-2 p-2  pl-4 pr-4 lg:pl-16 lg:pr-16'>
            <h2 className='font-semibold text-[16px]  text-sky-700'>Location</h2>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 text-md border-b'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Address</p>
                    <p>{locationItem.address1}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Additional Address</p>
                    <p>{locationItem.address2}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Zip Code</p>
                    <p>{locationItem.zipCode}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>City</p>
                    <p>{locationItem.city}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>State</p>
                    <p>{locationItem.state}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Distanced To Coastal</p>
                    <p>{locationItem.distanceToCoast}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Rental</p>
                    <p>{locationItem.rental}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Number of Family</p>
                    <p>{locationItem.numOfFamily}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Townhouse</p>
                    <p>{locationItem.townhouse}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Sqft</p>
                    <p>{locationItem.sqft}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Construction Type</p>
                    <p>{locationItem.constructionType}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Protection Class</p>
                    <p>{locationItem.protectionClass}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Year Built</p>
                    <p>{locationItem.yearBuilt}</p>
                </div>
            </div>
        </div>
    )
};

GetLocationItem.propTypes = {
    locationItem: PropTypes.shape({
        address1: PropTypes.string.isRequired,
        address2: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        distanceToCoast: PropTypes.string.isRequired,
        rental: PropTypes.string.isRequired,
        numOfFamily: PropTypes.string.isRequired,
        townhouse: PropTypes.string.isRequired,
        sqft: PropTypes.number.isRequired,
        constructionType: PropTypes.string.isRequired,
        yearBuilt: PropTypes.number.isRequired
    }).isRequired
};

export default GetLocationItem;