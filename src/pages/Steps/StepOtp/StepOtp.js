import React, { useState } from 'react'
import './StepOtp.css';
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import { verifyOtp } from '../../../http';
import {useDispatch, useSelector} from 'react-redux';
import { setAuth } from '../../../store/authSlice';

const StepOtp = () => {
    const [otp, setOtp] = useState();
    const dispatch = useDispatch();
    const {phone, hash} = useSelector((state) => state.auth.otp);

    async function submit() {
        if (!otp || !phone || !hash) return;
        
        try {
            const {data} = await verifyOtp({otp, phone, hash});
            console.log(data);
            dispatch(setAuth(data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="cardWrapper">
                <Card
                    title="Ingresar Codigo" 
                    icon="lock-emoji"
                >
                    <TextInput
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                    />
                    <div className="actionButtonWrap">
                        <Button onClick={submit} text="Siguiente" />
                    </div>
                    <p className="bottomParagraph">
                        Ingresando tu email estas aceptando nuestros terminos de 
                        Servicio y Privacidad. Gracias.
                    </p>
                </Card>
            </div>
        </>
    )
}

export default StepOtp
