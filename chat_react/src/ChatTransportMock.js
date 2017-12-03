class ChatTransportMock {
    constructor(onMessageReceivedCallback) {
        this.onMessageReceivedCallback = onMessageReceivedCallback;
    }

    publish(message) {
        this.onMessageReceivedCallback(message);
    }
}

export default ChatTransportMock;