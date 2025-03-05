import React from 'react';
import PropTypes from 'prop-types';

const GetHistoryInfo = ({ historyItem }) => {
    if (!historyItem) {
        return null;
    }

    return (
        <div className="w-full flex flex-col justify-center items-center space-y-2 p-2 pl-16 pr-16">
            <h2 className="font-semibold text-lg text-sky-800">History</h2>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 text-md border-b">
                <div className="flex flex-col">
                    <p className="font-semibold">Prior Carrier</p>
                    <p>{historyItem.priorCarrier}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold">Expiration Date</p>
                    <p>{new Date(historyItem.expirationDate).toISOString().split('T')[0]}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold">Lapse</p>
                    <p>{historyItem.lapse}</p>
                </div>
            </div>
            {historyItem.losses && historyItem.losses.length > 0 && (
                <div className="w-full mt-2">
                    <h3 className="font-semibold text-md text-sky-800 text-center">Losses</h3>
                    {historyItem.losses.map((loss, index) => (
                        <div key={index} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 text-md border-b">
                            <div className="flex flex-col">
                                <p className="font-semibold">Date of Loss</p>
                                <p>{new Date(loss.dateOfLoss).toISOString().split('T')[0]}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Category</p>
                                <p>{loss.category}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Paid Amount</p>
                                <p>{loss.paidAmount}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Description</p>
                                <p>{loss.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

GetHistoryInfo.propTypes = {
    historyItem: PropTypes.shape({
        priorCarrier: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        lapse: PropTypes.string.isRequired,
        losses: PropTypes.arrayOf(
            PropTypes.shape({
                dateOfLoss: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
                paidAmount: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default GetHistoryInfo;
