import React from 'react';
import phoneImage from './phone.png'

const PhoneIcon = ({ phoneNumber}) => {
    const handleClick = () => {
        const phoneUrl = `tel:${phoneNumber}`;
        window.location.href = phoneUrl;
    };

    return (
        <div
            style={{
                position: 'fixed',
                left: 0,
                bottom: '65%',
                transform: 'translateY(50%)',
                zIndex: 999,
                borderRadius: '50%',
                padding: 10,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <img
                src={phoneImage}
                alt="Phone"
                width="40"
                height="40"
                style={{
                    backgroundColor: '#007bff',
                    borderRadius: '50%',
                    padding: 10,
                    display: 'block',
                    margin: '0 auto',
                }}
            />
        </div>
    );
};

export default PhoneIcon;