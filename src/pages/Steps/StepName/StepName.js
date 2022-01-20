import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import {useDispatch, useSelector} from 'react-redux';
import { setName } from '../../../store/activateSlice';
import './StepName.css';

const StepName = ({onNext}) => {
    const { name } = useSelector(state => state.activate);
    const dispatch = useDispatch();
    const [fullname, setFullname] = useState(name);
    
    const nextStep = () => {
        if (!fullname) {
            return;
        }

        dispatch(setName(fullname));
        onNext();
    }

    return (
        <>
            <Card
                title="Cual es tu nombre completo?" 
                icon="goggle-emoji"
            >
                <TextInput
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                />
                <p className="paragraph">
                    Recomendamos usar tu nombre real pero no es obligatorio!
                </p>
                <div>
                    <Button onClick={nextStep} text="Siguiente" />
                </div>
            </Card>
        </>
    )
}

export default StepName
