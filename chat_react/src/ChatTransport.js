import Centrifuge from 'centrifuge';
import Axios from 'axios';

class ChatTransport {
    constructor(onMessageReceivedCallback) {
        this.subscription = null;

        let that = this;
        Axios.get('http://spachat.local/index.php')
            .then(function (response) {
                let centrifugeConf = response.data;
                let centrifuge = new Centrifuge({
                    url: centrifugeConf.centrifugoUrl,
                    user: centrifugeConf.userId,
                    timestamp: centrifugeConf.timestamp,
                    token: centrifugeConf.token,
                    debug: true
                });

                that.subscription = centrifuge.subscribe("messages-broadcasting", function (message) {
                    onMessageReceivedCallback(message.data);
                });

                centrifuge.on('connect', function (context) {
                    console.log(context);
                });
                centrifuge.connect();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    publish(message) {
        this.subscription.publish(message).then(function () {
            // success ack from Centrifugo received
        }, function (err) {
            // publish call failed with error
        });
    }
}

export default ChatTransport;