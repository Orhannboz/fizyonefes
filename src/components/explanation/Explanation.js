import React from 'react';
import PropTypes from 'prop-types';
import './Explanation.css'

const Explanation = ({image, explanation, title}) => {

    return (
        <div className="explanation-container">
            <div className="explanation-content">
                <header> <h2>{title}</h2>  </header>
                <p>
                    {explanation}
                </p>
            </div>
            <div className="explanation-image">
                <img src={image} alt="Sample"/>
            </div>
        </div>
    );
};

Explanation.propTypes = {
    image: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Explanation;