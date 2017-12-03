import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const NameField = ({onChange, userName, errorText}) => <TextField errorText={errorText} onChange={(e) => onChange(e)} type="text" value={userName} />;
const LoginButton = ({onClick}) => <RaisedButton className="login-button" onClick={(e) => onClick()} label='Enter chat'/>;
const Auth = ({onNameChange, userName, onLoginClick, errorText}) => (
    <div className="auth">
        <div>
            Enter your name
        </div>
        <div>
            <NameField errorText={errorText} onChange={onNameChange} userName={userName}/>
        </div>
        <div>
            <LoginButton onClick={onLoginClick}/>
        </div>
    </div>
);

export default Auth;