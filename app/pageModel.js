const pageModel = {
  global: {
    initials: 'WW',
    links: {
      linkedIn: {
        iconClass: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/in/wolfgangwebdev/'
      },
      gitHub: {
        iconClass: 'fab fa-github',
        href: 'https://github.com/wolfgangwarneke'
      }
    },
    copyright: 'code, content, and photos &copy; Wolfgang Warneke 2020'
  },
  conversionHero: {
    name: 'Wolfgang <br>Warneke',
    headline: 'Web Developer and Musician.',
    subheadline: 'Solving problems through coding and creation.',
    cta: 'Learn more'
  },
  orb: {
    message: 'I am creative as well as analytical and I am always in pursuit of continuous improvement.'
  },
  about: {
    callout: 'I have developed more than 250 A/B tests for dozens of ecommerce websites.',
    leftHeadline_OLD: 'What I do:',
    leftHeadline: 'As a coder:',
    leftContent_OLD: 'Day to day I develop front end A/B tests.  I create tools for my team and continuously improve our internal processes.  I also pitch in on strategy, test design, data analysis, and microcopy especially.',
    leftContent: `
      I am currently doing coursework pursuing a computer science degree, with admittedly unknown aspirations. 
      In the long term, I am interested in artificial intelligence, fin-tech, videogame development, music applications, and more... 
      but my background and present skill set is as a web-developer. In 2016, I attended the coding bootcamp at Epicodus for ASP.Net. Afterwards I interned
      at an immersive arts/media group call Portland Immersive Media Group where I started to learn VR development in Unity with C#.
      Next, I assisted at LaunchCode, a community-focused code school, teaching web technologies with computer science fundamentals.
      More recently, I was a "CRO Developer" with The Good, building out A/B tests for ecommerce sites. Client-side testing presents,
      many challenges, but was great fun for building solutions. As such, I consider JavaScript my primary language, but lately spend
      my time in school learning C++. Web development has been a part of my life off and on since the sixth grade, when saw an enticing
      magazine at the grocery store claiming to teach you how to build webpages. Several terrible Angelfire and Geocities sites later,
      a seed was planted. So in retrospect, it turns out that on a random day one print magazine and a maple bar had significantly impacted my life.`,
    rightHeadline_OLD: 'Who I am:',
    rightHeadline: 'As a musician:',
    rightContent_OLD: 'From when I taught myself HTML as a child to when I attended a code bootcamp for C#, my mind was consumed by many other interests: foreign languages, art… but primarily music.  Organizing symbols into meaning has always come naturally to me—it’s who I am.  I love to learn, teach, and always improve.',
    rightContent: `
      From when I taught myself HTML as a child to when I attended a code bootcamp for C#, my mind was consumed by many other interests: 
      foreign languages, art… but primarily music.  Organizing symbols into meaning has always come naturally to me—it’s who I am.
      I developed an initial interest in music and coding at a similar time, but both were soon derailed by my adolescent passion: skateboarding.
      Eventually, I would start playing bass which quickly became as all-consuming as skateboarding had been. My musical exploration continued
      to branch outwards into a multitude of instruments, genres, and approaches, from the studious and analytical, to the fun and improvisation,
      to the purely energetic. In 2015, I toured the country twice; once with my band Coma Serfs (on electric bass) and once as a supporting member with my friend
      Jackson Boone's band (on keyboards and synthesizer). Lately, I focus on music production, composition with synthesizers, and practicing random
      instruments for fun. I will be releasing an album of synthesizer music in 2021.`
  },
  skills: {
    title: 'Web Development Skills',
    skillMap: {
      'Conversion': {
        iconClass: 'fas fa-funnel-dollar',
        items: [
        'A/B testing frameworks (VWO, Google Optimize, etc.)',
        'Test development and QA',
        'Goal setup/debugging',
        'Google Tag Manager (configuration, triggers, tags)',
        'Detect/diagnose client bugs (technical and visual)',
        'Communicate technical issues to UX team and clients',
        'Write documentation'
        ]
      },
      'JavaScript': {
        iconClass: 'fab fa-js-square',
        items: [
          'ES6+',
          'ES5',
          'Web APIs',
          'DOM manipulation (plain and JQuery)',
          'Vue',
          'React',
          'Preact',
          'Testing (Mocha/Chai, Jest, TestCafe)',
          'Lodash',
          'Functional Programming'
        ]
      },
      'Analysis': {
        iconClass: 'fas fa-chart-bar',
        items: [
          'Google Analytics',
          'Google Analytics Certified',
          'Udacity Nanodegree (in progress)',
          'Strategy brand/product insights',
          'Technical insights',
          'SQL (MySQL, MSSQL)',
          'Lean/Kaizen approach to code tooling and production',
          'Cost-benefit analysis for util requirements'
        ]
      },
      'Front End': {
        iconClass: 'fas fa-laptop-code',
        items: [
          'Semantic HTML',
          'Custom SVG',
          'Styling',
          'CSS',
          'SCSS/SASS',
          'CSS in JS',
          'CSS Modules',
          'Browser and device testing',
          'Performance Optimization',
          'Site speed',
          'Asset optimization',
          'JS Performance'
        ]
      },
      'UX/UI': {
        iconClass: 'fas fa-users',
        items: [
          'Create mockups (UXPin, Balsamiq)',
          'Ensure quality interactions',
          'Responsive design',
          'Team tooling for ‘developer experience’',
          'Sound design for VR experiences',
          'Use and learn from popular UI component libraries',
          'Atomic design philosophy'
        ]
      },
      'Design & More': {
        iconClass: 'fas fa-paint-brush',
        items: [
          'Drawing Hobbyist (charcoal, and ink)',
          'Digital Photography',
          'Digital Photo Editing',
          'Unity 3d/VR Development',
          'Music Performance (multi-instrumentalist)',
          'Music Production',
          'Synthesis and Sound Design'
        ]
      }
    }
  }
};

export default pageModel;
