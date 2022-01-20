import React, { useState } from 'react'
import Email from './Email/Email';
import Phone from './Phone/Phone';
import './StepPhoneEmail.css';

const phoneEmailMap = {
    phone: Phone,
    email: Email,
} 

const StepPhoneEmail = ({onNext}) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    return (
        <>
            <div className="cardWrapper">
                <div>
                    <div className="buttonWrap">
                        <button 
                            className={`tabButton ${type === 'phone' ? 'active' : ''}`} 
                            onClick={() => setType('phone')}
                        >
                            <img src="/images/phone-white.png" alt="phone" />
                        </button>
                        <button
                            className={`tabButton ${type === 'email' ? 'active' : ''}`}
                            onClick={() => setType('email')}
                        >
                            <img src="/images/mail-white.png" alt="email" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    )
}

export default StepPhoneEmail
