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
    copyright: '&copy; Wolfgang Warneke 2019'
  },
  conversionHero: {
    name: 'Wolfgang <br>Warneke',
    headline: 'Conversion Rate Optimization Developer.',
    subheadline: 'Using modern front end technologies to improve user experiences.',
    cta: 'Learn more'
  },
  orb: {
    message: 'I am creative as well as analytical and I am always in pursuit of continuous improvement.'
  },
  about: {
    callout: '"I have developed more than 250 A/B tests for dozens of ecommerce websites."',
    leftHeadline: 'What I do:',
    leftContent: 'Day to day I develop front end A/B tests.  I create tools for my team and continuously improve our internal processes.  I also pitch in on strategy, test design, data analysis, and microcopy especially.',
    rightHeadline: 'Who I am:',
    rightContent: 'From when I taught myself HTML as a child to when I attended a code bootcamp for C#, my mind was consumed by many other interests: foreign languages, art… but primarily music.  Organizing symbols into meaning has always come naturally to me—it’s who I am.  I love to learn, teach, and always improve.'

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
        'Communicate technical issues to UX team and clients'
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
