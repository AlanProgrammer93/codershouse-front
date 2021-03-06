import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import './Navigation.css';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    }

    const logoText = {
        marginLeft: '10px',
    }

    const dispatch = useDispatch();
    const {isAuth, user} = useSelector(state => state.auth);

    const logoutUser = async () => {
        try {
            const {data} = await logout();
            dispatch(setAuth(data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="navbar container">
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>Codershouse</span>
            </Link>
            {
                isAuth && (
                    <div className="navRight">
                        <h3>{user.name}</h3>
                            <Link to="/">
                                <img 
                                    className="avatar"
                                    src={user.avatar ? user.avatar : '/images/monkey-avatar.png'} 
                                    width="40" 
                                    height="40" 
                                    alt="avatar" 
                                />
                            </Link>
                        <button className="logoutButton" onClick={logoutUser}>
                            <img src="/images/logout.png" alt="logout" />
                        </button>
                    </div>
                )
            }
        </nav>
    )
}

export default Navigation
