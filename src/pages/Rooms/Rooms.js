import React, { useEffect, useState } from 'react'
import './Rooms.css';
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal';
import RoomCard from '../../components/RoomCard/RoomCard';
import { getAllRooms } from '../../http';

const rooms = [
    {
        id: 1,
        topic: 'Which framework best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople: 40,
    },
    {
        id: 3,
        topic: 'What’s new in machine learning?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople: 40,
    },
    {
        id: 4,
        topic: 'Why people use stack overflow?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople: 40,
    },
    {
        id: 5,
        topic: 'Artificial inteligence is the future?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople: 40,
    },
];

const Rooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const {data} = await getAllRooms();
            setRooms(data);
        }
        fetchRooms();
    }, [])

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <div className="container">
                <div className="roomsHeader">
                    <div className="left">
                        <span className="heading">Todas las salas disponibles</span>
                        <div className="searchBox">
                            <img src="/images/search-icon.png" alt="search" />
                            <input type="text" className="searchInput" />
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={openModal} className="startRoomButton">
                            <img src="/images/add-room-icon.png" alt="add-room" />
                            <span>Comenzar una reunion</span>
                        </button>
                    </div>
                </div>
                <div className="roomList">
                    {
                        rooms.map(room => (
                            <RoomCard key={room.id} room={room} />
                        ))
                    }
                </div>
            </div>
            {
                showModal && <AddRoomModal onClose={() => setShowModal(false)} />
            }
        </>
    )
}

export default Rooms
