import React from 'react';
import mainLogo from '../assets/imgs/mainlogo.png'

export default function Home() {
    return (
        <main>
            <div>
                <h1>Bienvenido a la Liga Maestra!</h1>
                <img src={mainLogo} alt="team ash" />
            </div>
        </main>
    );
}
