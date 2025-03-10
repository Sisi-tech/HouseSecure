import React from 'react';
import PropTypes from 'prop-types';

const GetQuestionInfo = ({ questionItem }) => {
    if (!questionItem || !Array.isArray(questionItem.responses)) {
        return null;
    }

    return (
        <div className='w-full min-w-screen flex flex-col justify-center items-center space-y-2 pb-20 pl-4 pr-4 lg:pl-16 lg:pr-16'>
            <h2 className='font-semibold text-[16px] text-sky-700'>Underwriting Questions</h2>
            <dl className='w-full flex flex-col gap-4 p-4 text-md'>
                {questionItem.responses.map((response, index) => (
                    <div key={response._id} className="flex gap-6">
                        <dd>{response.answer}</dd>
                        <dt>{response.question}</dt>
                    </div>
                ))}
            </dl>
        </div>
    );
}

GetQuestionInfo.propTypes = {
    questionItem: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        responses: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                question: PropTypes.string.isRequired,
                answer: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default GetQuestionInfo;
