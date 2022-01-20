import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Card/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import '../StepPhoneEmail.css';
import {sendOtp} from '../../../../http/index';
import {useDispatch} from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

const Phone = ({onNext}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    async function submit() {
        if (!phoneNumber) return;
        
        const {data} = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(setOtp({phone: data.phone, hash: data.hash}));

        onNext();
    }

    return (
        <Card title="Ingresar Numero de Telefono" icon="phone">
            <TextInput 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <div>
                <div className="actionButtonWrap">
                    <Button text="Siguiente" onClick={submit} />
                </div>
                <p className="bottomParagraph">
                    Ingresando tu numero estas aceptando nuestros terminos de 
                    Servicio y Privacidad. Gracias.
                </p>
            </div>
        </Card>
    )
}

export default Phone
