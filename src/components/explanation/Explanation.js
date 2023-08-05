import React from 'react';
import PropTypes from 'prop-types';
import './Explanation.css'

const Explanation = ({ image, explanation }) => {
    return (
        <div className="explanation-container">
            <div className="explanation-text">
                <p>{explanation}</p>
            </div>
            <div className="explanation-image">
                <img src={image} alt="Explanation" />
            </div>
        </div>
    );
};

Explanation.propTypes = {
    image: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
};

export default Explanation;