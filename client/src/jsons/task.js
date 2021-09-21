export default {
    screens: [
        {
            type: "header",
            content: [
                {
                    header: "konstantikkov",
                    text: "personal website"
                },
                {
                    contacts: [
                        {
                            text: "@konstantikkov",
                            image: "telegram.png"
                        },
                        {
                            text: "konstantinovn2001@gmail.com",
                            image: "mail.png"
                        },
                        {
                            text: "konstantikkov#7619",
                            image: "discord.svg"
                        }
                    ]
                }
            ]
        },
        {
            type: "block left",
            content: [
                {
                    header: "My first task",
                    text: [
                        <p>Here is the first task with css and html.</p>,
                        <p>I used some flex and other default tools.</p>,
                    ]
                }
            ],
            images:['Task_1'],
            illustration:<div className="Robot">
                <div className="antenna">
                    <div className="cir black"></div>
                    <div className="l black"></div>
                    <div className="r black"></div>
                </div>
                <div className="bg">

                    <div className="head">

                        <div className="eye"></div>
                        <div className="eye"></div>
                        <div className="eye"></div>
                    </div>

                    <div className="top">
                        <div className="hand right">
                            <div className="shoulder black"></div>
                            <div className="forearm black"></div>
                            <div className="wrist"></div>
                        </div>
                        <div className="body-content">
                            <div className="bodycircle"></div>
                            <div className="bodylines">
                                <div className="line black"></div>
                                <div className="line black"></div>
                                <div className="line black"></div>
                            </div>
                        </div>
                        <div className="hand left">
                            <div className="shoulder black"></div>
                            <div className="forearm black"></div>
                            <div className="wrist"></div>
                        </div>
                    </div>

                    <div className="basement"></div>
                </div>
            </div>
        }
    ]
}