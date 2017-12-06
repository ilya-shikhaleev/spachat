import React, {Component} from 'react';
import Auth from './Auth';
import Chat from './Chat';
import ChatTransport from './ChatTransport';
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import './App.css'

const ViewEnum = {
    AUTH: 0,
    CHAT: 1
};

class Spachat extends Component {

    constructor() {
        super();
        /**
         * @type {{currentUserData: {userName: string}, messages: {userName: string, message: string}[], currentView: int}}
         */
        this.state = {
            currentUserData: {userName: '', message: ''},
            messages: [],
            currentView: ViewEnum.AUTH,
            errorText: ''
        };

        this.chatTransport = new ChatTransport(function (messageData) {
            this.setState({
                messages: [...this.state.messages, {
                    userName: messageData.userName,
                    message: messageData.message
                }]
            });
        }.bind(this));

        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
        this.handleSendClicked = this.handleSendClicked.bind(this);
    }

    handleUserNameInput(event) {
        this.setState({
            currentUserData: {userName: event.target.value, message: this.state.currentUserData.message},
            errorText: ''
        });
    }

    handleMessageInput(event) {
        this.setState({
            currentUserData: {userName: this.state.currentUserData.userName, message: event.target.value},
            errorText: ''
        });
    }

    handleLoginButtonClicked() {
        let name = this.state.currentUserData.userName;
        if (name !== '') {
            this.setState({currentView: ViewEnum.CHAT, errorText: ''});
        } else {
            this.setState({errorText: 'Error: empty name!'});
        }
    }

    handleSendClicked() {
        if (this.state.currentUserData.message !== '') {
            this.chatTransport.publish(this.state.currentUserData);
            this.setState({currentUserData: {...this.state.currentUserData, message: ''}, errorText: ''});
        } else {
            this.setState({errorText: 'Error: empty message!'});
        }
    }

    renderChat = () => (
        <Chat {...{
            onMessageChange: this.handleMessageInput,
            currentMessage: this.state.currentUserData.message,
            onSendClick: this.handleSendClicked,
            messages: this.state.messages,
            errorText: this.state.errorText
        }} />);

    renderAuth = () => (
        <Auth
            onNameChange={this.handleUserNameInput}
            userName={this.state.currentUserData.userName}
            onLoginClick={this.handleLoginButtonClicked}
            errorText={this.state.errorText}
        />
    );

    getView = (viewId) => (
        ((viewId === ViewEnum.AUTH) && this.renderAuth()) ||
        ((viewId === ViewEnum.CHAT) && this.renderChat())
    );

    render() {
        return (
            <Paper className="main-container" zDepth={1}>
                <AppBar
                    title="Spachat"
                />
                {this.getView(this.state.currentView)}
            </Paper>
        )
    }
}

export default Spachat;