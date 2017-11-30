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
         * @type {{currentUser: {userName: string}, messages: {userName: string, message: string}[], currentView: int}}
         */
        this.state = {
            currentUser: {userName: ''},
            messages: [],
            currentView: ViewEnum.AUTH
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
    }

    handleInput(event)
    {
        this.setState({currentUser: {userName: event.target.value}});
    }

    handleLoginButtonClicked()
    {
        let name = this.state.currentUser.userName;
        if (name !== '')
        {
            this.setState({currentView: ViewEnum.CHAT});
        }
        else
        {
            alert('Error: empty name!');
        }
    }

    render()
    {
        let view = this.state.currentView;
        return (
        ((view === ViewEnum.AUTH) && <Auth onNameChange={this.handleInput} userName={this.state.currentUser.userName} onLoginClick={this.handleLoginButtonClicked} />) ||
        ((view === ViewEnum.CHAT) && <Chat />) ||
        ((view === ViewEnum.PROFILE) && <Profile />)
        )
    }
}

export default Spachat;