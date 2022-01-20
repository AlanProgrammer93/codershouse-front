import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useWebRTC } from '../../hooks/useWebRTC';
import { getRoom } from '../../http';

import "./Room.css";

const Room = () => {
    const {id: roomId} = useParams()
    const user = useSelector(state => state.auth.user)

    const {clients, provideRef, handleMute } = useWebRTC(roomId, user)
    const history = useHistory();
    const [room, setRoom] = useState(null);
    const [isMuted, setMuted] = useState(true);

    useEffect(() => {
        const fetchRoom = async () => {
            const { data } = await getRoom(roomId);
            setRoom((prev) => data);
        };

        fetchRoom();
    }, [roomId]);

    useEffect(() => {
        handleMute(isMuted, user.id);
    }, [isMuted]);

    const handManualLeave = () => {
        history.push('/rooms');
    };

    const handleMuteClick = (clientId) => {
        if (clientId !== user.id) return;
        setMuted((prev) => !prev);
    };

    return (
        <div>
            <div className="container">
                <button onClick={handManualLeave} className='goBack'>
                    <img src="/images/arrow-left.png" alt="arrow-left" />
                    <span>Todas las salas</span>
                </button>
            </div>

            <div className='clientsWrap'>
                <div className='header'>
                    {room && <h2 className='topic'>{room.topic}</h2>}
                    <div className='actions'>
                        <button className='actionBtn'>
                            <img src="/images/palm.png" alt="palm-icon" />
                        </button>
                        <button
                            onClick={handManualLeave}
                            className='actionBtn'
                        >
                            <img src="/images/win.png" alt="win-icon" />
                            <span>Dejar la sala</span>
                        </button>
                    </div>
                </div>
                <div className='clientsList'>
                    {
                        clients.map(client => {
                            return (
                                <div className='client' key={client.id}>
                                    <div className='userHead'>
                                        <img 
                                            className='userAvatar' 
                                            src={client.avatar} 
                                            alt='avatar' 
                                        />
                                        <audio
                                            autoPlay
                                            playsInline
                                            ref={(instance) => provideRef(instance, client.id)} 
                                        />
                                       <button
                                            onClick={() =>
                                                handleMuteClick(client.id)
                                            }
                                            className='micBtn'
                                        >
                                            {client.muted ? (
                                                <img
                                                    className='mic'
                                                    src="/images/mic-mute.png"
                                                    alt="mic"
                                                />
                                            ) : (
                                                <img
                                                    className='micImg'
                                                    src="/images/mic.png"
                                                    alt="mic"
                                                />
                                            )}
                                        </button>
                                    </div>
                                    <h4>{client.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Room
