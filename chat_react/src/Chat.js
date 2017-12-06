import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const MessageField = ({onChange, message, errorText}) =>
    <TextField errorText={errorText} className="message-text"
               onChange={(e) => onChange(e)} value={message}
               fullWidth={true}/>;
const SendButton = ({onClick}) =>
    <RaisedButton className="send-button" onClick={(e) => onClick()}
                  label="Send message"/>;
const RenderMessages = (messages) => {

    let messageRows = [];
    for (let msg of messages) {
        messageRows.push(<div id="chatPane" className="chat-message-item">{msg.userName + ': ' + msg.message}</div>);
    }

    let objDiv = document.getElementById("chatPane");
    if (objDiv) {
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    return <div id="chatPane" className="chat-massages-pane">{messageRows}</div>;
};

const Chat = ({onMessageChange, currentMessage, onSendClick, messages, errorText}) => {
    return (
        <div className="chat">
            {RenderMessages(messages)}
            <div className="chat-input-form">
                <MessageField errorText={errorText} onChange={onMessageChange} message={currentMessage}/>
                <SendButton onClick={onSendClick}/>
            </div>
        </div>
    )
};

export default Chat;