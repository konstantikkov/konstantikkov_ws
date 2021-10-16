export default {
    screens: [
        {
            type: "block without",
            mode: "mediator",
            content: [
                {
                    header: "Only streams",
                    text: [
                        <p>Mediator is a service that is being created to change the world view of streaming.
                            <u>Sharing screens</u>, <u>webcams</u>, and audio streams are all <u>separate entities</u> that can be used or disabled.
                            This concept allows each viewer to <u>customize</u> the broadcast for <u>themselves</u>.</p>
                    ]
                }
            ]
        },
        {
            type: "block bigPicture",
            mode: "mediator",
            images:[
                'Mediator_example.png'
            ],
            content: [
                {
                    header: "Common space",
                    text: [
                        <p>You can use our service as a single space for your devices and connect all the necessary media streams in a single space in Mediator.</p>
                    ]
                }
            ]
        },
        {
            type: "block without",
            mode: "mediator",
            content: [
                {
                    header: "DevTools",
                    text: [
                        <p>We use:</p>,
                        <ul>
                            <li>- React</li>
                            <li>- Redux</li>
                            <li>- WebRTC</li>
                            <li>- Express server and Socket server</li>
                            <li>- MongoDB</li>
                        </ul>,
                        <p>In later versions, we will use MediaSoup as a replacement for the standard WebRTC scheme, since SFU is suitable for a large stream audience. Now the standard MCU circuit is used.</p>
                    ]
                }
            ]
        }
    ]
}