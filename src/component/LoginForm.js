import React from 'react';
import Logo from '../images/logo.png';
import './css/loginform.css';

const LoginForm = () => {
    return (
        <div>
            <div className="Header has-background-info">
                <h1 className="has-text-grey-lighter has-text-weight-bold">APLIKASI 
                    PENGELOLAAN SEWA DAN RETRIBUSI PASAR PADA DINAS UPT KELUA
                </h1>
            </div>
            <div className="columns">
                <div className="column">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="column login-form container">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-header-title">Silahkan Login</h2>
                        </div>
                        <div className="card-content">
                            <input className="input is-rounded" type="text" placeholder="Username"/>
                            <input className="input is-rounded" type="password" placeholder="Password"/>
                            <div className="contaner">
                                <input className="button is-primary is-rounded" type="submit" value="Submit input"/>
                                <input className="button is-rounded" type="reset" value="Reset input"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
