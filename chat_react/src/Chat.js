import React, {Component} from 'react';

const MessageField = ({onChange, message}) => <input onChange={(e) => onChange(e)} type="text" name="name" value={message} />;
const SendButton = ({onClick}) => <button id="submit" onClick={(e) => onClick()}>Send message</button>;
const RenderMessages = (messages) => {

    let messageRows = [];
    for (let msg of messages) {
        messageRows.push(<div className="chat-message-item">{msg.userName + ': ' + msg.message}</div>);
    }

    return <div className="chat-massages-pane">{messageRows}</div>;
};

const Chat = ({onMessageChange, currentMessage, onSendClick, messages}) => {
    return (
    <div className="chat">
        {RenderMessages(messages)}
        <div className="chat-input-form">
            <MessageField onChange={onMessageChange} message={currentMessage} />
            <SendButton onClick={onSendClick} />
        </div>
    </div>
)};

export default Chat;