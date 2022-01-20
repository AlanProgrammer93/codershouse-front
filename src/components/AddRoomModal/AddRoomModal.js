import React, { useState } from 'react'
import TextInput from '../shared/TextInput/TextInput'
import "./AddRoomModal.css"
import {createRoom as create} from '../../http';
import { useHistory } from 'react-router-dom';

const AddRoomModal = ({onClose}) => {
    const history = useHistory();

    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');

    const createRoom = async () => {
        try {
            if (!topic) return;
            const {data} = await create({topic, roomType});
            history.push(`/room/${data.id}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="modalMask">
            <div className="modalBody">
                <button onClick={onClose} className="closeButton">
                    <img src="/images/close.png" alt="close" />
                </button>
                <div className="modalHeader">
                    <h3 className="heading">Ingresar el tema de debate</h3>
                    <TextInput fullwidth="true" value={topic} onChange={(e) => setTopic(e.target.value)} />
                    <h2 className="subHeading">Tipo de sala</h2>
                    <div className="roomTypes">
                        <div onClick={() => setRoomType('open')} className={`typeBox ${roomType === 'open' ? 'active' : ''}`}>
                            <img src="/images/globe.png" alt="globe" />
                            <span>Open</span>
                        </div>
                        <div onClick={() => setRoomType('social')} className={`typeBox ${roomType === 'social' ? 'active' : ''}`}>
                            <img src="/images/social.png" alt="social" />
                            <span>Social</span>
                        </div>
                        <div onClick={() => setRoomType('private')} className={`typeBox ${roomType === 'private' ? 'active' : ''}`}>
                            <img src="/images/lock.png" alt="lock" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className="modalFooter">
                    <h2>Comenzar una reunion</h2>
                    <button onClick={createRoom} className="footerButton">
                        <img src="/images/celebration.png" alt="celebration" />
                        <span>Vamos!</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModal
