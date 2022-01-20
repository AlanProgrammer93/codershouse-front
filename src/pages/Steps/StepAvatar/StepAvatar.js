import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import Loader from '../../../components/shared/Loader/Loader';
import { activate } from '../../../http';
import { setAvatar } from '../../../store/activateSlice';
import { setAuth } from '../../../store/authSlice';
import './StepAvatar.css';

const StepAvatar = ({onNext}) => {
    const dispatch = useDispatch();
    const {name, avatar} = useSelector(state => state.activate);
    const [image, setImage] = useState('/images/monkey-avatar.png');
    const [loading, setLoading] = useState(false);
    const [unMounted, setUnMounted] = useState(false);

    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        }
    }

    const submit = async () => {
        if (!name || !avatar) return;
        
        try {
            setLoading(true);
            const {data} = await activate({name, avatar});
            console.log("datos recibito despues de activate()", data);
            if (data.auth) {
                if (!unMounted) {
                    dispatch(setAuth(data));
                }
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => {
            setUnMounted(true);
        }
    }, [])

    if (loading) return <Loader message="Activación en progreso..." />

    return (
        <>
            <Card
                title={`Listo, ${name}`} 
                icon="monkey-emoji"
            >
                <p className="subHeading">Subir Foto</p>
                <div className="avatarWrapper">
                    <img className="avatarImage" src={image} alt="avatar" />
                </div>
                <div>
                    <input 
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className="avatarInput"
                    />
                    <label className="avatarLabel" htmlFor="avatarInput">
                        Elegir una foto
                    </label>
                </div>
                <div>
                    <Button onClick={submit} text="Siguiente" />
                </div>
            </Card>
        </>
    )
}

export default StepAvatar
