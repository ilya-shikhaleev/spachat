import React, {Component} from 'react';
import Auth from './Auth';
import Chat from './Chat';
import Profile from './Profile';

const ViewEnum = {
    AUTH: 0,
    CHAT: 1,
    PROFILE: 2
};

class Spachat extends Component {
    constructor()
    {
        super();
        /**
         * @type {{currentUserData: {userName: string}, messages: {userName: string, message: string}[], currentView: int}}
         */
        this.state = {
            currentUserData: {userName: '', message: ''},
            messages: [],
            currentView: ViewEnum.AUTH
        };

        this.handleUserNameInput = this.handleUserNameInput.bind(this);
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
        this.handleSendClicked = this.handleSendClicked.bind(this);
    }

    handleUserNameInput(event)
    {
        this.setState({currentUserData: {userName: event.target.value, message: this.state.currentUserData.message}});
    }

    handleMessageInput(event)
    {
        this.setState({currentUserData: {userName: this.state.currentUserData.userName, message: event.target.value}});
    }

    handleLoginButtonClicked()
    {
        let name = this.state.currentUserData.userName;
        if (name !== '')
        {
            this.setState({currentView: ViewEnum.CHAT});
        }
        else
        {
            alert('Error: empty name!');
        }
    }

    handleSendClicked()
    {
        if (this.state.currentUserData.message !== '')
        {
            this.setState({messages: [...this.state.messages, this.state.currentUserData], currentUserData: {...this.state.currentUserData, message: ''}});
        }
        else
        {
            alert('Error: empty message!');
        }
    }

    renderChat = () => (
    <Chat {...{
        onMessageChange: this.handleMessageInput,
        currentMessage: this.state.currentUserData.message,
        onSendClick: this.handleSendClicked,
        messages: this.state.messages
    }} />);

    render()
    {
        let view = this.state.currentView;
        return (
        ((view === ViewEnum.AUTH) && <Auth onNameChange={this.handleUserNameInput} userName={this.state.currentUserData.userName} onLoginClick={this.handleLoginButtonClicked} />) ||
        ((view === ViewEnum.CHAT) && this.renderChat()) ||
        ((view === ViewEnum.PROFILE) && <Profile />)
        )
    }
}

export default Spachat;