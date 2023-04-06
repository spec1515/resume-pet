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
      skills: [ {
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
          isMain: true
        },

        {
          name: 'Спорт',
          isMain: true
        },

        {
          name: 'Музика',
          isMain: false
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
          id: 15
        },

        {
          name: 'Diplome_2',
          id: 20
        },

        {
          name: 'Diplome_3',
          id: 25
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

    layout: 'big',

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

          projects: [{
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Render view with the given options and optional callback ',
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

// Підключаємо роутер до бек-енду
module.exports = router
