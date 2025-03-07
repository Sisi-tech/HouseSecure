import React from 'react';
import PropTypes from 'prop-types';

const GetCoverageItem = ({ coverageItem }) => {
    if (!coverageItem) {
        return null;
    }

    return (
        <div className='w-full min-w-screen flex flex-col justify-center items-center space-y-2 pl-4 pr-4 lg:pl-16 lg:pr-16'>
            <h2 className='font-semibold text-[16px] text-sky-700'>Coverage</h2>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 space-x-4 text-md p-4 border-b'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Coverage A</p>
                    <p>{coverageItem.coverageA}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Coverage B</p>
                    <p>{coverageItem.coverageB}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Coverage C</p>
                    <p>{coverageItem.coverageC}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Coverage D</p>
                    <p>{coverageItem.coverageD}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Coverage E</p>
                    <p>{coverageItem.coverageE}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>All Perils Deductible</p>
                    <p>{coverageItem.ded}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Windstorm Deductible</p>
                    <p>{coverageItem.windDed}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Catastrophic Deductible</p>
                    <p>{coverageItem.catDed}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>RCV on coverage C</p>
                    <p>{coverageItem.RCVonCoverageC}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Water Backup</p>
                    <p>{coverageItem.waterBackUp}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Equipment</p>
                    <p>{coverageItem.equipment}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Ordinance</p>
                    <p>{coverageItem.ordinance}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Inflation Guard</p>
                    <p>{coverageItem.inflationGuard}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Burglar Alarm</p>
                    <p>{coverageItem.burglarAlarm}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Fire Alarm</p>
                    <p>{coverageItem.fireAlarm}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Sprinkler</p>
                    <p>{coverageItem.sprinkler}</p>
                </div>
            </div>
        </div>
    )
};

GetCoverageItem.propTypes = {
    coverageItem: PropTypes.shape({
        coverageA: PropTypes.number.isRequired,
        coverageB: PropTypes.number.isRequired,
        coverageC: PropTypes.number.isRequired,
        coverageD: PropTypes.number.isRequired,
        coverageE: PropTypes.string.isRequired,
        ded: PropTypes.string.isRequired,
        windDed: PropTypes.string.isRequired,
        catDed: PropTypes.string.isRequired,
        RCVonCoverageC: PropTypes.string.isRequired,
        waterBackUp: PropTypes.string.isRequired,
        equipment: PropTypes.string.isRequired,
        ordinance: PropTypes.string.isRequired,
        inflationGuard: PropTypes.string.isRequired,
        burglarAlarm: PropTypes.string.isRequired,
        fireAlarm: PropTypes.string.isRequired,
        sprinkler: PropTypes.string.isRequired,
    }).isRequired,
};

export default GetCoverageItem;