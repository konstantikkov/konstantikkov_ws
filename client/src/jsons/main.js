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
      type: "imageBlockLarge",
      images: [
        "saoirse_happy.svg",
        "balloon_1.svg",
        "balloon_1.svg",
        "balloon_1.svg",
        "balloon_2.svg",
        "balloon_2.svg",
        "balloon_2.svg"
      ]
    },
    {
      type: "block without",
        content: [
          {
            header: "Hey, it’s Nick",
            text: [
              <p>I’m developer from Saint-Petersburg, Russia. I’m pretty interested in modern web technologies: learning and working with ReactJS with different devTools and NodeJS libraries.</p>,
              <p>Studying at Computer Science in Peter the Great St. Petersburg Polytechnic University since <u>2019</u>.</p>,
              <p>Currently working in <u>Sber</u> as <u>front-end developer</u>.</p>,
              <p>Also I have solo projects and achievements. Let’s talk about them.</p>
            ]
          }
        ]
    },
    {
      type: "block left",
        content: [
          {
            header: "Mediator",
            text: [
                <p>Right now I am developing a new streaming service with unique features.</p>,
                  <p>The main one is an opportunity to combine different audio and video streams in the workspace. Here user is able to custom its own broadcast from web  or desktop applications.</p>,
                    <p>Later, it will be available on IOS and Android.</p>,
            ],
            links:[
              {
                text: <p><u>More information about Mediator...</u></p>,
                href: "/mediator"
              }
            ]
          }
        ],
        images: [
            "saoirse_point_at.svg",
            "saoirse_face_shy.svg"
        ]

    },
    {
      type: "block right",
        content: [
          {
            header: "Magnit QA",
            text: [
              <p>On the 2nd course I had this project with “Magnit” one of Russia's largest food retailers.</p>,
              <p>The main idea of this work was creation of social network for all the staff of Magnit. There people are able to suggest ideas, talk about problems.</p>,
                  <p>There is an analytic module, where moderators can find different stats of the project.</p>
            ],
            links:[
              {
                out: true,
                text: <p><u>Demo is here...</u></p>,
                href: "http://konstantikkov.ru:8888"
              }
            ]
          }
        ],
        images: [
          "saoirse_question.svg",
          "saoirse_face_surprise.svg"
        ]
    },
    {
      type: "block middle",
      content: [
        {
          header: "Hacatons & ICPC",
          text: [
              <p>I have some results personal and command competitions.</p>,
              <p>- 1st place HSE Digital Humanity 2019</p>,
              <p>- 1st place HSE Digital Humanity 2020</p>,
              <p>- Quaterfinal ICPC 2019</p>,
              <p>- Quaterfinal ICPC 2020</p>,
              <p>- 3rd place CIT(Polytech) 2020</p>
          ]
        },
        {
          header: "Interactive map",
          text: [
              <p>Web application for museum of 2nd World War in Moscow.</p>,
              <p>There people can see stats of hospitalization of Soviet soldiers on the Eastern Front. Using timeline and annotation visitors are able to interact with the history.</p>,
            <p>This project is continuation of my hacaton work in 2019.</p>,
          ],
          links:[
            {
              text: <p><u>You can try it here...</u></p>,
              href: "/interactive_map"
            }
          ]
        }
      ],
      images: [
          "saoirse_shy.svg",
          "saoirse_face_happy.svg"
      ]
      },
    {
      type: "block inside",
      content: [
        {
          header: "Saoirse. Crossplatform character.",
          text: [<p>This young (10.09.2021) lady is my assistant and lives in my projects. May be she will talk sometimes...</p>]
        }
      ],
      images: [
        "saoirse_logo.svg"
      ]
    },
    {
      type: "block left",
      content: [
        {
          header: "Blip, Blup. I'm robot!",
          text: [
            <p>Here you can see my first work of "layout and prototyping of websites".<br/></p>,
            <p>That's just a simple work with some flexes, position absolute and custom margins).<br/></p>,
            <p>Also It was my first try to create something with SASS.</p>,
            <p>Pure css and pure beauty...<br/></p>
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
    },
    {
      type: "block right",
      content: [
        {
          header: "Welcome, Mister Ilooooon Mask!",
          text: [
              <p>This is simple flex animation.<br/></p>,
              <p>Good jokes and great businessman.<br/></p>
          ]
        }
      ],
      images:['Task_2'],
      illustration:
          <div className="IlonWrapper">
            <div className="Ilon">
              <div className="Sambrero"></div>
              <div className="Question">
                <div className="Phrase">
                  Как тебе такое?
                </div>
              </div>
              <div className="RocketPlate">
                <div className="Rocket">
                  <div className="Phrase">
                    Это еще не Тесла!
                  </div>
                </div>
              </div>
            </div>
          </div>
    },
    {
      type: "footer",
      content: [
        {
          text: "Made by konstantikkov"
        }
      ],
      images: [
        "saoirse_face_surprise.svg",
        "saoirse_face_angry.svg",
        "saoirse_face_happy.svg",
        "saoirse_face_shy.svg"
      ]
    }
  ]
}