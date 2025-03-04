import React from 'react';
import PropTypes from 'prop-types';

const GetApplicantInfoItem = ({ info }) => {
    if (!info) {
        return null;
    }

    const entityTypeMappings = {
        individual: (
            <>
                <tr>
                    <td>First Name:</td>
                    <td>{info.individual?.firstName || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{info.individual?.lastName || 'N/A'}</td>
                </tr>
            </>
        ),
        Partnership: (
            <tr>
                <tb>Business Name:</tb>
                <tb>{info.Partnership || 'N/A'}</tb>
            </tr>
        ),
        'Joint Venture': (
            <tr>
                <td>Business Name:</td>
                <td>{info.jointVenture || 'N/A'}</td>
            </tr>
        ),
        'Limited Liability Corporation': (
            <tr>
                <tb>Business Name:</tb>
                <td>{info.llc || 'N/A'}</td>
            </tr>
        ),
        corporation: (
            <tr>
                <td>Business Name:</td>
                <td>{info.corporation || 'N/A'}</td>
            </tr>
        ),
        trust: (
            <tr>
                <td>Business Name:</td>
                <td>{info.trust || 'N/A'}</td>
            </tr>
        ),
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ApplicantInfo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Proposed Effected Date:</td>
                    <td>{new Date(info.selectedDate).toISOString().split('T')[0]}</td>
                </tr>
                <tr>
                    <td>Entity Type:</td>
                    <td>{info.entityType}</td>
                </tr>
                {entityTypeMappings[info.entityType] || (
                    <tr>
                        <td colSpan="2">Unknown Entity Type</td>
                    </tr>
                )}
                <tr>
                    <td>Policy Form:</td>
                    <td>{info.policyForm}</td>
                </tr>
                <tr>
                    <td>Occupancy Type:</td>
                    <td>{info.occupancyType}</td>
                </tr>
                <tr>
                    <td>Loss History:</td>
                    <td>{info.lossHistory}</td>
                </tr>
            </tbody>
        </table>
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