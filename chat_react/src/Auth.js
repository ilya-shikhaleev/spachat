import React, {Component} from 'react';
import './App.css';

const NameField = ({onChange, userName}) => <input onChange={(e) => onChange(e)} type="text" name="name" value={userName} />;
const LoginButton = ({onClick}) => <button id="submit" onClick={(e) => onClick()}>Enter chat</button>;
const Auth = ({onNameChange, userName, onLoginClick}) => (
    <div className="auth">
        <div className="auth-form">
            <NameField onChange={onNameChange} userName={userName}/>
            <LoginButton onClick={onLoginClick}/>
        </div>
        <div className="auth-data">
            {userName}
        </div>
    </div>
);

export default Auth;