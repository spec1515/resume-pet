// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start to work on a new project I learn the domain and try to understand the
        idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport
        statistics (tournament position, goals etc), analyzing by simple mathematics models
        and preparing probability for such events like: money line - first win / draw / second
        win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },

        {
          name: 'Hendelbars',
          point: 9,
        },

        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },

        {
          name: 'Git & Terminal',
          point: 8,
          isTop: false,
        },

        {
          name: 'React.js',
          point: 0,
        },

        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Активний відпочинок',
          isMain: true,
        },

        {
          name: 'Спорт',
          isMain: true,
        },

        {
          name: 'Музика',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'Інститут',
          isEnd: true,
        },

        {
          name: 'Технікум',
          isEnd: false,
        },

        {
          name: 'Училище',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Diplome_1',
          id: 15,
        },

        {
          name: 'Diplome_2',
          id: 20,
        },

        {
          name: 'Diplome_3',
          id: 25,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'work',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It-Brains',
            url: null,
          },

          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'Render view with the given options and optional callback ',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Cache boolean hinting to the engine it should cache',
                },
                {
                  name: 'Hinting to the engine',
                },
              ],
              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'basic',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout: 'basic',

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'basic',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: 'basic',
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

router.get('/shopproduct', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopproduct', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'PC', url: 'https://www.google.com/' },
      { name: 'Windows', url: 'https://github.com/' },
      { name: 'Product PC #3123', url: null },
    ],

    productData: {
      img: 'https://picsum.photos/400/200',

      info: {
        title: 'Product PC Asus 331 BC 671',
        about:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: '1000$',

        category: [
          { name: 'HOT', isHot: true },
          { name: 'New', isNew: true },
          { name: 'Bonus', isBonus: true },
        ],
      },

      actionList: [
        { name: 'Buy', isWarning: true },
        { name: 'Add to cart', isError: true },
        { name: 'Like', isSuccess: true },
        { name: 'Share', isGood: true },
      ],

      item: {
        head: ['#', 'color', 'price'],

        body: [
          ['id312', 'red', '1100$'],
          ['id532', 'blue', '1050$'],
          ['id643', 'dark', '999$'],
        ],
      },

      param: {
        title: 'Product params',
        list: ['Экран 15.6', 'IPS (1920x1080)', 'Full HD'],
      },

      alert: {
        isError: true,
        text: 'Danger! This is a danger alert — check it out!',
      },
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
          rel: 'show-more',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/shopnews', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopnews', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'News', url: 'https://www.google.com/' },
      { name: 'Today', url: 'https://github.com/' },
      { name: 'About cats', url: null },
    ],

    newsData: {
      photo: 'https://picsum.photos/800/400',

      head: {
        heading: 'About cats',
        description:
          "Cats are adorable and beloved pets that have been domesticated for thousands of years. They are known for their independent and playful nature, as well as their agility and hunting skills. With their soft fur, purring, and cuddling, cats make great companions and can bring joy and relaxation to their owners. From domestic short-hairs to exotic breeds, cats come in many shapes, sizes, and colors, each with their own unique personalities. Whether they are napping in a sunny spot or chasing a toy, cats always bring a smile to their owner's faces.",
      },

      body: [
        {
          title: 'Cats have a keen sense of hearing',
          text: 'With their highly sensitive ears, cats can detect sounds that are too faint for humans to hear, including the ultrasonic calls of rodents and other small prey.',
        },
        {
          title: 'Cats are natural hunters',
          text: 'Thanks to their sharp claws, quick reflexes, and stealthy movements, cats are excellent hunters. They can catch mice, rats, birds, and other prey with ease.',
        },
        {
          title: 'Cats are independent creatures',
          text: "Cats are known for their independent nature, and unlike dogs, they don't require constant attention and affection from their owners. They are perfectly content to entertain themselves with toys and explore their surroundings on their own.",
        },
        {
          title: 'Cats have a unique way of communicating',
          text: 'From meows and purrs to chirps and trills, cats use a variety of sounds to communicate with their owners and other cats. They also use body language, such as tail movements and ear positions, to convey their moods and intentions.',
        },
        {
          title: 'Cats are good for your health',
          text: 'Studies have shown that owning a cat can have numerous health benefits, including lower stress levels, reduced risk of heart disease and stroke, and improved mental health. Plus, cats make great companions and can provide a source of comfort and emotional support.',
        },
      ],
    },

    newsOtherBlock: {
      title: 'See other news',
      cards: [
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          idNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          idNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          idNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          idNew: true,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/shopnews', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopnews', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    breadcrumb: [
      { name: 'Home', url: 'https://github.com/' },
      { name: 'News', url: 'https://www.google.com/' },
      { name: 'Today', url: 'https://github.com/' },
      { name: 'About cats', url: null },
    ],

    newsData: {
      photo: 'https://picsum.photos/400/200',

      head: {
        heading: 'About cats',
        description:
          "Cats are adorable and beloved pets that have been domesticated for thousands of years. They are known for their independent and playful nature, as well as their agility and hunting skills. With their soft fur, purring, and cuddling, cats make great companions and can bring joy and relaxation to their owners. From domestic short-hairs to exotic breeds, cats come in many shapes, sizes, and colors, each with their own unique personalities. Whether they are napping in a sunny spot or chasing a toy, cats always bring a smile to their owner's faces.",
      },

      body: [
        {
          title: 'Cats have a keen sense of hearing',
          text: 'With their highly sensitive ears, cats can detect sounds that are too faint for humans to hear, including the ultrasonic calls of rodents and other small prey.',
        },
        {
          title: 'Cats are natural hunters',
          text: 'Thanks to their sharp claws, quick reflexes, and stealthy movements, cats are excellent hunters. They can catch mice, rats, birds, and other prey with ease.',
        },
        {
          title: 'Cats are independent creatures',
          text: "Cats are known for their independent nature, and unlike dogs, they don't require constant attention and affection from their owners. They are perfectly content to entertain themselves with toys and explore their surroundings on their own.",
        },
        {
          title: 'Cats have a unique way of communicating',
          text: 'From meows and purrs to chirps and trills, cats use a variety of sounds to communicate with their owners and other cats. They also use body language, such as tail movements and ear positions, to convey their moods and intentions.',
        },
        {
          title: 'Cats are good for your health',
          text: 'Studies have shown that owning a cat can have numerous health benefits, including lower stress levels, reduced risk of heart disease and stroke, and improved mental health. Plus, cats make great companions and can provide a source of comfort and emotional support.',
        },
      ],
    },

    newsOtherBlock: {
      title: 'See other news',
      cards: [
        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission to explore Mars, with the goal of collecting samples of the planet's surface and searching for signs of ancient microbial life.",
          isTop: false,
          idNew: true,
        },
        {
          title:
            'GameStop Shares Soar as Reddit Traders Rally',
          description:
            'Shares of GameStop surge as amateur traders on the social media platform Reddit rally to drive up the price, in what some are calling a battle between Wall Street and Main Street.',
          isTop: false,
          idNew: false,
        },
        {
          title:
            'New Study Shows Link Between Exercise and Longevity',
          description:
            'A new study published in the Journal of the American Medical Association suggests that regular exercise can help people live longer, with participants who exercised regularly having a lower risk of premature death.',
          isTop: false,
          idNew: false,
        },
        {
          title: 'Amazon Expands Grocery Delivery Service',
          description:
            'Amazon announces an expansion of its grocery delivery service, with plans to offer free delivery to Prime members on orders over $35 and to expand its selection of fresh and organic produce.',
          isTop: false,
          idNew: true,
        },
      ],
    },

    service: {
      title: 'Our Services',
      description:
        'We offer a variety of services to meet your needs, including web design, content creation, and social media management.',
      buttons: [
        {
          text: 'Show More',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/shoporder', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shoporder', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Exit',
          href: null,
        },
      ],
    },

    header: 'Оформлення замовлення',
    contacts_data: {
      title: 'Контактні дані',

      buttons: [
        {
          text: 'Я новий покупець',
          isPrimary: true,
        },
        {
          text: 'Я постійний покупець',
          isOutline: true,
        },
      ],
      form: {
        input: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть Ім’я',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть Пошту',
          },
        },
        switch: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },
    action_block: [
      { text: 'Швидке замовлення', isSuccess: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],
    total: {
      title: 'Всього',
      item_list: [
        { name: 'Ноут', price: '25 000 ₴' },
        { name: 'Мишка', price: '25 000 ₴' },
        { name: 'Клава', price: '25 000 ₴' },
      ],
      additional_info: [
        { text: 'Всього товарів', value: '75 000 ₴' },
        { text: 'Купони', value: 'Немає' },
        { text: 'Доставка', value: 'Безкоштовно' },
      ],
      total_price: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },
      button: [
        {
          text: 'Підтвердити замовлення',
          isPrimary: true,
        },
        {
          text: 'Відмінити купони',
          isOutline: true,
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      select: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],
      delivery_type: [
        {
          type: 'Самовивіз з відділення Нової пошти',
        },
        {
          type: 'Кур’єром Нової пошти',
        },
        {
          type: 'Самовивіз з магазину',
        },
        {
          type: 'Доставка за кордон',
        },
      ],
      payment: {
        title: 'Оплата',
        list: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          {
            type: 'Оплатити зараз',
          },
        ],
      },
      contact: {
        title: 'Контактні дані отримувача',
        surname: {
          label: 'Прізвище',
          placeholder: 'Іванов',
          caption: 'Введіть прізвище',
        },
        name: {
          label: 'Ім’я',
          placeholder: 'Іван',
          caption: 'Введіть Ім’я',
        },
        phone: {
          label: 'Мобільний телефон',
          placeholder: '+38 (XXX) XXX XX XX',
          caption: 'Введіть телефон',
        },
        email: {
          label: 'Пошта',
          placeholder: 'ivanivanov@ukr.net',
          caption: 'Введіть Пошту',
        },
      },
      coment: {
        label: 'Коментар',
        placeholder: 'Я хочу, щоб',
      },
    },
    coupon: {
      title: 'Купони',
      select: {
        availabel_coupon: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friend_coupon: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },
      add: {
        friend: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder:
            'Введіть контактні дані друзів через ;',
          caption:
            'Напишіть електронні адреси/телефон друзів через “;”',
        },
        colleague: {
          label: 'Запросити колег',
          placeholder:
            'Введіть контактні дані колег через ;',
          caption:
            'Напишіть електронні адреси/телефон колег через “;”',
        },
      },
    },
    quiz: {
      title: 'Домоможи краще нам тебе зрозуміти',
      preference: {
        title:
          'Який тип обладнання ви зацікавлені в придбанні?',
        options: [
          'Смартфони',
          'Ноутбуки',
          'Планшети',
          'ПК',
          'Телевізори',
        ],
      },
      your_expirience: {
        label: 'Який у Вас досвід користування ПК',
      },
      purchase_frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },
      factors: {
        title:
          'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },
    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/bootstrap', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {
    layout: 'bootstrap',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
