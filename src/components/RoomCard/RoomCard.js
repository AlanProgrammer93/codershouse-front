import React from 'react'
import './RoomCard.css';
import { useHistory } from 'react-router-dom';

const RoomCard = ({room}) => {
    const history = useHistory();
    
    return (
        <div onClick={() => history.push(`/room/${room.id}`)} className="card">
            <h3 className="topic">{room.topic}</h3>
            <div className={`speakers ${room.speakers.length === 1 ? 'singleSpeaker' : ''}`}>
                <div className="avatars">
                    {
                        room.speakers.map(speaker => (
                            <img key={speaker.id} src={speaker.avatar} alt="speaker-avatar" />
                        ))
                    }
                </div>
                <div className="names">
                    {
                        room.speakers.map(speaker => (
                            <div key={speaker.id} className="nameWrapper">
                                <span>{speaker.name}</span>
                                <img src="/images/chat-bubble.png" alt="chat-bubble" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="peopleCount">
                <span>{room.totalPeople}</span>
                <img src="/images/user-icon.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default RoomCard
