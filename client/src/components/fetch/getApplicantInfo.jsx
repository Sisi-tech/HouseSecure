import React from 'react';
import PropTypes from 'prop-types';

const GetApplicantInfoItem = ({ info }) => {
    if (!info) {
        return null;
    }

    const entityTypeMapping = {
        individual: (
            <>
                <div>
                    <p className='font-semibold'>Applicant Name</p>
                    <p>{info.individual?.firstName || 'N/A'} {info.individual?.lastName || 'N/A'}</p>
                </div>
            </>
        ),
        Partnership: (
            <div>
                <p>Business Name</p>
                <p>{info.Partnership || 'N/A'}</p>
            </div>
        ),
        'Joint Venture': (
            <div>
                <p>Business Name</p>
                <p>{info.jointVenture}</p>
            </div>
        ),
        'Limited Liability Corporation': (
            <div>
                <p>Business Name</p>
                <p>{info.llc || 'N/A'}</p>
            </div>
        ),
        corporation: (
            <div>
                <p>Business Name:</p>
                <p>{info.corporation}</p>
            </div>
        ),
        trust: (
            <div>
                <p>Business Name</p>
                <p>{info.trust || 'N/A'}</p>
            </div>
        )
    };

    return (
        <div className='w-full min-w-screen flex flex-col justify-center items-center space-y-2 p-6 pl-4 pr-4 lg:pl-16 lg:pr-16'>
            <h2 className='font-semibold text-lg text-sky-700'>Applicant Information</h2>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 space-x-4 text-md p-4 border-b'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Effective Date</p>
                    <p>{new Date(info.selectedDate).toISOString().split('T')[0]}</p>
                </div>
                <div>
                    <p className='font-semibold'>Entity type</p>
                    <p>{info.entityType}</p>
                </div>
                {entityTypeMapping[info.entityType] || (
                    <div>
                        <p>Unknown Entity Type</p>
                    </div>
                )}
                <div>
                    <p className='font-semibold'>Policy Form</p>
                    <p>{info.policyForm}</p>
                </div>
                <div>
                    <p className='font-semibold'>Occupancy Type</p>
                    <p>{info.occupancyType}</p>
                </div>
                <div>
                    <p className='font-semibold'>Loss History</p>
                    <p>{info.lossHistory}</p>
                </div>
            </div>
        </div>
    )
}

GetApplicantInfoItem.propTypes = {
    info: PropTypes.shape({
        selectedDate: PropTypes.string.isRequired,
        entityType: PropTypes.string.isRequired,
        individual: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }),
        partnership: PropTypes.string,
        jointVenture: PropTypes.string,
        llc: PropTypes.string,
        corporation: PropTypes.string,
        trust: PropTypes.string,
        policyForm: PropTypes.string.isRequired,
        occupancyType: PropTypes.string.isRequired,
        lossHistory: PropTypes.string.isRequired,
    }).isRequired,
};

export default GetApplicantInfoItem;