import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import '../StepPhoneEmail.css';

const Email = ({onNext}) => {
    const [email, setEmail] = useState('');

    return (
        <Card title="Ingresar Email" icon="email-emoji">
            <TextInput
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <div>
                <div className="actionButtonWrap">
                    <Button text="Siguiente" onClick={onNext} />
                </div>
                <p className="bottomParagraph">
                    Ingresando tu email estas aceptando nuestros terminos de 
                    Servicio y Privacidad. Gracias.
                </p>
            </div>
        </Card>
    )
}

export default Email
