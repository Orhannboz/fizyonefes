import React from 'react';
import Whatsapp from './whatsapp.png'

const WhatsAppIcon = ({ phoneNumber }) => {
    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            style={{
                position: 'fixed',
                left: 10,
                bottom: '60%',
                transform: 'translateY(50%)',
                marginTop: '5%',
                zIndex: 999,
                backgroundColor: '#25D366',
                borderRadius: '50%',
                padding: 10,
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <img
                src={Whatsapp}
                alt="WhatsApp"
                width="20"
                height="20"
                style={{ display: 'block', margin: '0 auto' }}
            />
        </div>
    );
};

export default WhatsAppIcon;