import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';
import './Home.css';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    }

    const history = useHistory();

    const startRegister = () => {
        history.push('/authenticate');
    }

    return (
        <div className="cardWrapper">
            <Card title="Bienvenido a Codershouse!" icon="logo">
                <p className="text">
                    Somos una comunidad para aprender juntos nuevas habilidades
                    de desarrollo web, inteligencia artificial, redes, etc. Unete 
                    para compartir conocimientos y aprender!
                </p>
                <div>
                    <Button onClick={startRegister} text="Obtener tu usuario" />
                </div>
                <div className="signinWrapper">
                    <span className="hasInvite">Tienes un mensaje de invitacion?</span>
                    <Link style={signInLinkStyle} to="/login">Iniciar Sesion</Link>
                </div>
            </Card>
        </div>
    )
}

export default Home
