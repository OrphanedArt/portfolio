// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'OrphanedArt', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SEO Optimization',
          description:
            'Build and create online shop for Gedebalilure.com',
          imageUrl:
            'https://fathoni.co.uk/wp-content/uploads/2026/02/c720469b7d78cb015faa6d7a9fdc77245838a636686a99ca72e7f3b0f28cb657.jpeg',
          link: 'https://www.instagram.com/gedebalilures',
        },
        {
          title: 'Web Management for School',
          description:
            'Build, create and manage official school website for mipm.sch.id',
          imageUrl:
            'https://fathoni.co.uk/wp-content/uploads/2026/02/IMG_20260223_082047.jpg',
          link: 'https://mipmcukir.com',
        },
                {
          title: 'E-Learning for School',
          description:
            'Build, create and manage E-Learning for elearning.mipm.sch.id',
          imageUrl:
            'https://fathoni.co.uk/wp-content/uploads/2026/02/IMG_20260223_082110.jpg',
          link: 'https://mipmcukir.com',
        },
                   {
          title: 'Social Media Management',
          description:
            'Creates, schedules, and analyzes content across platforms to boost brand awareness, engagement, and sales for CV. Lentera Fajar',
          imageUrl:
            'https://fathoni.co.uk/wp-content/uploads/2026/02/IMG_20260223_092740.jpg',
          link: 'https://wwww.facebook.com/CV.LENTERAFAJA',
        },     
      ],
    },
  },
  seo: { title: 'Portfolio of Kholid Shohibul Fathoni', description: '', imageURL: '' },
  social: {
    linkedin: 'fathonimuhammad',
    x: 'NajwaaAshila',
    mastodon: '',
    researchGate: '',
    facebook: 'fathoni.info',
    instagram: 'fathoni.co.uk',
    reddit: '',
    threads: 'fathoni.co.uk',
    youtube: 'fathoni.co.uk.', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'fathoni',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'fathoni.co.uk',
    telegram: '',
    website: 'https://fathoni.co.uk',
    phone: '088212793444',
    email: 'fathoni@live.co.uk',
  },
  resume: {
    fileUrl:
      'https://fathoni.co.uk/wp-content/uploads/2026/02/Portofolio-Kholid-Shohibul-Fathoni.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'PHP',
    'Video Editor',
    'Internet Marketing',
    'Social Media Marketing',
    'Content Creator',
    'Photography',
    'Remote Desktop',
    'Photoshop',
    'Website Builder',
    'CMS',
    'E-commerce',
    'Affiliate',
    'WordPress',
    'Blogger',
    'Cpanel',
    'VPS',
    'etc',
  ],
  experiences: [
    {
      company: 'CV. Lumbung Rejeki',
      position: 'Marketing',
      from: '2009',
      to: '2010',
      companyLink: 'https://lumbungrejeki.co.id',
    },
    {
      company: 'CV. Lentera Fajar',
      position: 'Marketing',
      from: '2010',
      to: '2011',
      companyLink: 'https://lenterafajar.co.id',
    },
    {
      company: 'Google',
      position: 'Publisher and Youtuber',
      from: '2011',
      to: '2020',
      companyLink: 'https://google.com',
    },
    {
      company: 'Mobidea',
      position: 'Affiliate',
      from: '2014',
      to: '2021',
      companyLink: 'https://mobidea.com',
    },
    {
      company: 'Imonetizeit',
      position: 'Affiliate',
      from: '2020',
      to: 'until now',
      companyLink: 'https://imonetizeit.com',
    },
  ],
  certifications: [
    {
      name: 'PENKOM NGORO',
      body: 'Pendidikan Komputer',
      year: '2003',
      link: 'https://penkomngoro.com',
    },
    {
      name: 'Seminar Kimia Regional',
      body: 'Badan Eksekutif Mahasiswa UIN Sunan Kalijaga Yogyakarta',
      year: '2006',
      link: 'https://uin-suka.ac.id/',
    },
        {
      name: 'KKN',
      body: 'Lembaga Pengabdian Kepada Masyarakat UIN Sunan Kalijaga Yogyakarta',
      year: '2007',
      link: 'https://uin-suka.ac.id/',
    },
  ],
  educations: [
    {
      institution: 'SMA Negeri 1 Ngoro Jombang',
      degree: 'High School',
      from: '2000',
      to: '2003',
    },
    {
      institution: 'Sunan Kalijaga State Islamic University Yogyakarta',
      degree: 'not finished - until KKN, Praktek Kerja Lapangan, and Skripsi',
      from: '2004',
      to: '2009',
    },
  ],
  publications: [
    {
      title: 'Publication',
      conferenceName: '',
      journalName: 'My Blog',
      authors: 'Fathoni',
      link: 'https://fathoni.co.uk',
      description:
        '',
    }, 
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'fathoni', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the swith in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://fathoni.co.uk"
      target="_blank"
      rel="noreferrer"
    >OrphanedArt</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
