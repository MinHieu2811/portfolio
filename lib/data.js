const data = {
  name: 'Minh Hieu',
  title: "Hello, I'm an Front-end developer based in Vietnam!",
  animated_para: [
    'Front-end Developer with NextJs',
    'Back-end Developer with NodeJs & Express'
  ],
  work: {
    content:
      'I am a junior at Hanoi University and a front-end developer with a passion for building responsive websites. I have a knack for all things, from planning and designing all the way to solving real-life problems with code. I have 1 year experience with React, 5 months with NextJs and basic knowledge of SEO, Boostrap, Git, RestfulAPI',
    title: 'Work'
  },
  bio: {
    title: 'Bio',
    content: [
      {
        year: 2002,
        event: 'Born in Hanoi.'
      },
      {
        year: 2020,
        event: ' Begin study at Hanoi University.'
      },
      {
        year: 2022,
        event: 'Intern Front-end developer in Crossian LLC'
      }
    ]
  },
  hobby: {
    title: 'I ♥',
    content:
      'Music, reading, story writing, football, exploring the latest technology and theatre may all be hobbies. Interestingly, one person’s profession may be another person’s hobby. For instance, one could be a professional flautist, but for another playing the flute could be a hobby. A hobby is a fun activity that is pursued during one’s leisure hours.'
  },
  online: {
    title: 'On the web',
    content: [
      {
        type: 'Github',
        link: 'https://github.com/MinHieu2811',
        display: 'MinHieu2811'
      },
      {
        type: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100009415518368',
        display: 'Minh Hieu'
      },
      {
        type: 'Instagram',
        link: 'https://www.instagram.com/mihh_hieeus2811/',
        display: 'mihh_hieeus2811'
      },
      {
        type: 'Google',
        display: 'cuunhatnhat51@gmail.com',
        link: 'mailto:cuunhatnhat51@gmail.com'
      },
      {
        type: 'Linkedin',
        display: 'Hieu Mihn',
        link: 'https://www.linkedin.com/in/hiếu-mihn-477673242'
      }
    ]
  },
  project: {
    ecommerce: {
      title: 'SolStore',
      images: [
        '/images/projects/e-commerce/banner.png',
        '/images/projects/e-commerce/category.png',
        '/images/projects/e-commerce/collections.png',
        '/images/projects/e-commerce/product.png',
        '/images/projects/e-commerce/thumb.png'
      ],
      shortDesc: 'An E-Commerce website built-in with ReactJs, Nodejs, Express',
      description:
        'An E-Commerce website built-in with ReactJs, NodeJs, Express and MongoDB. Customer can add to cart, add to wishlist, checkout order, and review. About admin, they can create, update, delete products, manage orders.',
      linkGithub: 'https://github.com/MinHieu2811/fullstack-ecommerce',
      technology: {
        frontend: ['React Router v6', 'Redux', 'Redux Thunk', 'Framer Motion'],
        backend: [
          'Basic JWT Authentication & Authorization',
          'NodeJs',
          'Express'
        ],
        database: ['MongoDB']
      }
    },
    chatapp: {
      title: 'WhatsApp',
      images: [
        '/images/projects/chatapp/thumb.png',
        '/images/projects/chatapp/messages.png',
        '/images/projects/chatapp/login.png',
        '/images/projects/chatapp/conversation2.png',
        '/images/projects/chatapp/conversation.png'
      ],
      description:
        'A real-time chatapp built-in with NextJs and Firebase. User can login, create new conversation, chat and search users',
      shortDesc: 'A real-time chat app built-in with NextJs, Firebase',
      linkGithub: 'https://github.com/MinHieu2811/chat-app',
      technology: {
        backend: ['Firebase'],
        database: ['Firebase', 'Firestore'],
        frontend: ['NextJs']
      }
    }
  }
}

export default data
