import { iconsPath, imagePath, videoPath } from './imagePath';

export const companies = [
  imagePath?.com10,
  // imagePath?.com9,
  // imagePath?.com8,
  // imagePath?.com7,
  // imagePath?.com1,
  // imagePath?.com2,
  // imagePath?.com3,
  // imagePath?.com4,
  // imagePath?.com5,
  // imagePath?.com6,
];

export const DocumentsLinks = [
  {
    name: 'Platform Essentials',
    submenu: [
      { name: 'Introduction', path: '', category: '' },
      { name: 'Getting Started', submenu: [] },
      {
        name: 'Concepts',
        submenu: [
          { name: 'AR Technology', path: '', category: '' },
          { name: 'VR Technology', path: '', category: '' },
          { name: 'MR Technology', path: '', category: '' },
        ],
      },
      { name: 'Technologies', submenu: [] },
    ],
    id: '',
  },
  { name: 'Augmented Reality', submenu: [], id: '' },
  { name: 'Virtual Reality', submenu: [], id: '' },
  { name: 'Web3D', submenu: [], id: '' },
  { name: 'Mixed Reality', submenu: [], id: '' },
  { name: 'Visual Editor Features', submenu: [], id: '' },
  { name: 'Artificial Intelligence', submenu: [], id: '' },
  { name: 'Analytics', submenu: [], id: '' },
  { name: 'Operating System', submenu: [], id: '' },
];

export const arrayList = [
  {
    percentage: '60%',
    text: 'Reduction in error rates.',
    title: 'Training & Simulation',
    desc: 'Enhances training and operations with immersive simulations, real-time guidance, and hands-on learning.',
    video: videoPath?.simulation,
  },
  {
    percentage: '90%',
    text: 'Increase in retention rates.',
    title: 'Education Tech',
    desc: 'Enhances education with immersive learning, interactive simulations, and 3D visualization, making complex concepts easier to understand and more engaging',
    video: videoPath?.education,
    // video: videoPath?.lunar,
  },
  {
    percentage: '20%',
    text: 'Boost in conversion rates.',
    title: 'Sales & Marketing',
    desc: 'Transforms marketing with immersive product experiences, interactive storytelling, virtual try-ons, and engaging brand interactions, enhancing customer engagement and conversion..',
    video: videoPath?.cocos,
    // video: videoPath?.arPhone,
  },
  {
    percentage: '40%',
    text: 'increased user engagement',
    title: 'Gamification & Entertainment',
    desc: 'Immersive experiences, interactive storytelling, real-time engagement, and lifelike simulations, create more engaging and dynamic user experiences.',
    video: videoPath?.gamification,
    // video: videoPath?.lunar,
  },
  {
    percentage: '25%',
    text: 'Reduction in product development  time.',
    title: 'Design & Prototyping',
    desc: 'Enabling immersive 3D visualization, real-time collaboration, and rapid iterations, reducing costs and accelerating development.',
    video: videoPath?.prototype,
    // video: videoPath?.arPhone,
  },
];

export const faqs = [
  {
    question: 'What is Spatial Grid for Enterprises?',
    answer:
      'Spatial Grid for Enterprises is a platform that enhances collaboration, accelerates training, and streamlines operations through spatial computing.',
  },
  {
    question: 'How does Spatial Grid billing work?',
    answer:
      'Spatial Grid offers flexible billing plans based on usage. You can choose monthly or annual subscriptions, and pricing scales with your needs.',
  },
  {
    question: 'What kind of support does the platform offer the team?',
    answer:
      'We provide 24/7 support, including documentation, live chat, and dedicated account managers for enterprise customers.',
  },
  {
    question: 'Do you offer services based projects?',
    answer:
      "Yes, we offer custom project-based services tailored to your enterprise's specific needs. Contact us for more details.",
  },
];

export const HelpCenterData = [
  {
    title: 'Getting Started',
    desc: 'Welcome to Spatial Grid! Get started faster by learning some of the basics.',
    path: '/help-center-level-II',
  },
  {
    title: 'Using Spatial Grid',
    desc: 'Learn how Spatial Grid works, from board navigation and tools to profile management, and more',
  },
  {
    title: 'Plans & Billing',
    desc: 'Have questions about our plans or subscription? Find the answers here.',
  },
  {
    title: 'Administration',
    desc: 'Master the ins-and-outs of team and user management ',
  },
  {
    title: 'Integrations & Apps',
    desc: "Discover the power of Spatial Grid's integrations and apps",
  },
  {
    title: 'Troubleshooting and Technical Questions',
    desc: 'Troubleshoot issues & review technical guidelines for Spatial Grid usage.',
  },
];

export const HelpCenterPlanData = [
  {
    title: 'Getting Started & Team Management',
  },
  {
    title: 'User Management',
  },
  {
    title: 'Subscription Management',
  },
  {
    title: 'Analytics',
  },
  {
    title: 'Enterprise Guard',
  },
  {
    title: 'Managing Apps',
  },
];

export const trandingTopics = [
  { title: 'How to restore a deleted project ' },
  { title: 'Spatial Grid integrations' },
  { title: 'How to move a project' },
  { title: 'Domain control' },
  { title: 'Issues with confirmation code or password reset emails' },
  { title: 'Sharing with users outside your team' },
];

export const HelpCenterLvl_2_1 = [
  {
    title: '1. Domain control ',
    border: true,
  },
  {
    title: '2. Admin roles, team structure, & billing groups ',
    border: true,
  },
  {
    title: '3. User provisioning & security ',
    border: true,
  },

  {
    title: '4. Organization & team settings ',
    border: true,
  },

  {
    title: '5. Apps & integrations ',
    border: true,
  },

  {
    title: '6. Enterprise integrations ',
    border: true,
  },

  {
    title: 'Conclusion ',
    border: true,
  },

  {
    title: 'Appendix',
    border: false,
  },
];

export const HelpCenterLvl_2_2 = [
  {
    title: "Spatial Grid's Visual Editor",
    border: true,
  },

  {
    title: 'Research and Development',
    border: true,
  },

  {
    title: 'Feature Use',
    border: true,
  },

  {
    title: 'Migrating to Enterprise Plan',
    border: true,
  },

  {
    title: 'Team management ',
    border: true,
  },

  {
    title: 'Create a new team ',
    border: false,
  },

  {
    title: 'See all 9 articles',
    icon: true,
    border: false,
    color: '#EE2B2A',
    path: '/help-center-level-III',
  },
];

export const ToolsDetails = [
  {
    title: 'Drag & Drop',
    desc: 'Drag, drop, and edit assets, lighting, and environment.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Industry Templates',
    desc: 'Streamline creation with customizable templates.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Animation',
    desc: 'Give life to your 3d objects.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Interactive Experiences',
    desc: 'Enable Interactivity on your objects',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Material Layers',
    desc: 'Fine-tune the look of your models.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Physics',
    desc: 'Create real-time physics simulations & interactions.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Game Controls',
    desc: 'Easily create 3rd person and 1st person experiences.',
    img: imagePath?.cursorImg,
  },
  {
    title: 'Coding',
    desc: 'Inject 3JS or C# to embolden your experiences ',
    img: imagePath?.cursorImg,
  },
];
export const superchargeData = [
  {
    img: imagePath?.visual_editor,
    title: 'From concept to creation, effortlessly',
    desc: 'Turn hours of work into minutes with Miro AI. Choose from four standard templates or create your own custom prompts to generate documents from your input or board content, highlighting your unique human creativity.',
  },
  {
    img: imagePath?.visual_editor,
    title: 'Accelerate your work',
    desc: 'Turn hours of work into minutes with Miro AI. Choose from four standard templates or create your own custom prompts to generate documents from your input or board content, highlighting your unique human creativity.',
  },
  {
    img: imagePath?.visual_editor,
    title: 'Collaborative project work',
    desc: 'Turn hours of work into minutes with Miro AI. Choose from four standard templates or create your own custom prompts to generate documents from your input or board content, highlighting your unique human creativity.',
  },
];

export const DocumentationCardData = [
  {
    title: 'AR for Smartphones',
    desc: 'Create image, face and world tracked immersive experiences for mobile WebAR and distribute it to your end users in seconds with one-click publishing.',
  },
  {
    title: 'AR for Smartphones',
    desc: 'Create image, face and world tracked immersive experiences for mobile WebAR and distribute it to your end users in seconds with one-click publishing.',
  },
  {
    title: 'AR for Smartphones',
    desc: 'Create image, face and world tracked immersive experiences for mobile WebAR and distribute it to your end users in seconds with one-click publishing.',
  },
  {
    title: 'AR for Smartphones',
    desc: 'Create image, face and world tracked immersive experiences for mobile WebAR and distribute it to your end users in seconds with one-click publishing.',
  },
  {
    title: 'AR for Smartphones',
    desc: 'Create image, face and world tracked immersive experiences for mobile WebAR and distribute it to your end users in seconds with one-click publishing.',
  },
];

export const AllIndustriesList = [
  {
    title: 'Manufacturing & Industrial',
    path: '',
  },
  {
    title: 'Education & Training',
    path: '',
  },
  {
    title: 'Defense & Aerospace',
    path: '',
  },
  {
    title: 'Healthcare & Medical',
    path: '',
  },
  {
    title: 'Automotive & Transportation',
    path: '',
  },
  {
    title: 'Oil & Gas / Energy',
    path: '',
  },
  {
    title: 'Retail & E-Commerce',
    path: '',
  },
  {
    title: 'Architecture & Real Estate',
    path: '',
  },
  {
    title: 'Tourism & Hospitality',
    path: '',
  },
  {
    title: 'Sports & Fitness',
    path: '',
  },
  {
    title: 'Telecommunications',
    path: '',
  },
  {
    title: 'Entertainment & Media',
    path: '',
  },
];

export const MarketingSalesList = [
  { title: 'Americana' },
  { title: 'Creme21' },
  { title: 'Kellogs' },
  { title: 'Americana' },
  { title: 'Creme21' },
  { title: 'Kellogs' },
  { title: 'Americana' },
  { title: 'Creme21' },
  { title: 'Kellogs' },
];

export const jobsDetailsArr = [
  {
    title: 'Design Job Openings',
    jobs: [
      {
        title: 'UI Designer',
        desc: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.',
        icon: iconsPath.uiDesigner,
      },
      {
        title: 'UX Designer',
        desc: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.',
        icon: iconsPath.uxDesigner,
      },
      {
        title: 'Design Head',
        desc: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.',
        icon: iconsPath.designHead,
      },
    ],
  },
  {
    title: 'Development Job Openings',
    jobs: [
      {
        title: 'Front - End Developer',
        desc: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.',
        icon: iconsPath.frontendDeveloper,
      },
      {
        title: 'Back - End  Developer',
        desc: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.',
        icon: iconsPath.backendDeveloper,
      },
      {
        title: 'Full Stack Developer',
        desc: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, &stakeholders to deliver comprehensive & user-friendly solutions.',
        icon: iconsPath.fullstackDeveloper,
      },
    ],
  },
  {
    title: 'Management Job Openings',
    jobs: [
      {
        title: 'BA Manager',
        desc: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.',
        icon: iconsPath.baManager,
      },
      {
        title: 'Project Manager',
        desc: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.',
        icon: iconsPath.projectManager,
      },
      {
        title: 'HR Manager',
        desc: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.',
        icon: iconsPath.hrManager,
      },
    ],
  },
  {
    title: 'QA Job Openings',
    jobs: [
      {
        title: 'QA Tester',
        desc: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.',
        icon: iconsPath.qaTester,
      },
      {
        title: 'SQL Tester',
        desc: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.',
        icon: iconsPath.sqlTester,
      },
      {
        title: 'Manual Tester',
        desc: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.',
        icon: iconsPath.manualTester,
      },
    ],
  },
];

export const array1Card = [
  {
    title: 'Innovative and Impactful Projects',
    desc: "At Spatial Grid, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    title: 'Supportive Environment',
    desc: "At Spatial Grid, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    title: 'Continuous Learning and Growth',
    desc: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
  },
  {
    title: 'Challenging and Rewarding Work',
    desc: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
  },
];

export const xrData = [
  {
    id: 1,
    icon: imagePath?.environment,
    title: 'Dynamic environment-object',
    description: 'anchoring for real-world precision',
  },
  {
    id: 2,
    icon: imagePath?.letency,
    title: 'Low-latency',
    description: 'spatial awareness for real-time interaction',
  },
  {
    id: 3,
    icon: imagePath?.gesture,
    title: 'Gesture & gaze-',
    description: 'anchoring for real-world precision',
  },
  {
    id: 4,
    icon: imagePath?.multiUser,
    title: 'Multi-user',
    description: 'shared presence across persistent spatial sessions',
  },
];

export const gridAiData = [
  {
    id: 1,
    icon: iconsPath?.experienceGeneration,
    title: 'Prompt-to-Experience Generation',
    description:
      'Turn text, image, or video inputs into immersive scenes, simulations, or training modules.',
  },
  {
    id: 2,
    icon: iconsPath?.agenticLoop,
    title: 'Agentic Iteration Loop',
    description:
      'AI agent tests the experience, gathers insights, and continuously improves performance.',
  },
  {
    id: 3,
    icon: iconsPath?.analytics,
    title: 'Built-in Analytics for Continuous Learning',
    description:
      'Captures real-time user behavior to optimize interactions, layouts, and outcomes.',
  },
  {
    id: 4,
    icon: iconsPath?.modularBusiness,
    title: 'Modular, Business-Specific Assets',
    description:
      'Generates reusable templates and logic tailored to your enterprise needs.',
  },
];

export const researchData = [
  {
    id: 1,
    icon: iconsPath?.manufacturing,
    title: 'Smart manufacturing and Digital Twins',
  },
  {
    id: 2,
    icon: iconsPath?.enterprize,
    title: 'Enterprise Training and Simulation',
  },
  {
    id: 3,
    icon: iconsPath?.safety,
    title: 'Safety and Training in Hazardous Workspaces',
  },
  {
    id: 4,
    icon: iconsPath?.machinery,
    title: 'High Level Simulation of Machinery',
  },
  {
    id: 5,
    icon: iconsPath?.retail,
    title: 'Retail and Customer Engagement',
  },
];

export const storySections = [
  {
    id: '01',
    title: 'Design',
    description: `At Spatial Grid, design is more than aesthetics — it's a strategic foundation. We craft immersive, intuitive experiences that feel as seamless as they are stunning. Every interface, environment, and interaction is built to empower users and enhance enterprise efficiency. We design with purpose, guided by user insight, industry context, and the belief that spatial experiences should feel natural, not novel.`,
  },
  {
    id: '02',
    title: 'Engineering',
    description: `We engineer the future with precision. Our systems are built on scalable architecture, real-time spatial intelligence, and advanced agentic AI — delivering performance, security, and adaptability. Whether it's a digital twin, an XR platform, or an AI-driven experience, our engineering team ensures every pixel and process functions flawlessly across complex environments. Innovation is our engine; robust engineering is how we drive it forward.`,
  },
  {
    id: '03',
    title: 'Project Management',
    description: `Our approach to project management blends agility with accountability. We operate with transparent timelines, clear communication, and dynamic workflows — keeping momentum high and surprises low. Every deployment is guided by a dedicated team that understands the stakes, speaks your language, and adapts to your needs. At Spatial Grid, success isn't just about what we build — it's how we get you there.`,
  },
  {
    id: '04',
    title: 'Collaboration',
    description: `We don't work for you — we work with you. Spatial Grid thrives on true collaboration, where your expertise meets ours to co-create solutions that matter. We listen, iterate, and align at every stage, treating your vision as a shared mission. Across teams, time zones, and technologies, collaboration is the thread that binds innovation into impact. Together, we move further — and faster.`,
  },
  {
    id: '05',
    title: 'Client-Centric Approach',
    description: `Your challenges shape our roadmap. Our client-first philosophy means we build around your goals, your context, and your future. We take time to understand your workflows, culture, and aspirations — translating them into spatially intelligent experiences that truly deliver. With flexible deployment models, tailored solutions, and responsive support, we don't just serve clients — we empower long-term partners ready to lead in tomorrow's world.`,
  },
  {
    id: '06',
    title: 'Driving Success',
    description: `For us, success isn't just launching a product — it's elevating your enterprise. We measure impact through outcomes: increased efficiency, deeper engagement, smarter decisions. By combining immersive design, cutting-edge engineering, agile delivery, and human collaboration, we drive digital transformation that lasts. With Spatial Grid, you're not adopting tech — you're unlocking a new dimension of success, where space becomes strategy and intelligence becomes action.`,
  },
];

export const industries = [
  { name: 'Manufacturing & Industrial', icon: iconsPath.group750Image },
  { name: 'Education & Training', icon: iconsPath.group563Image },
  { name: 'Defense & Aerospace', icon: iconsPath.group562Image },
  { name: 'Sports & Fitness', icon: iconsPath.Vector44Image },
  { name: 'Healthcare & Medical', icon: iconsPath.group564Image },
  { name: 'Automotive & Transportation', icon: iconsPath.Vector45Image },
  { name: 'Oil & Gas / Energy', icon: iconsPath.group572Image },
  { name: 'Tourism & Hospitality', icon: iconsPath.group569Image },
  { name: 'Retail & E-Commerce', icon: iconsPath.group567Image },
  { name: 'Architecture & Real Estate', icon: iconsPath.group570Image },
  { name: 'Entertainment & Media', icon: iconsPath.group571Image },
  { name: 'Telecommunications', icon: iconsPath.group566Image },
];


export const contactUsData = [
    {
      id: 1,
      heading: '📬 General Inquiries',
      paragrafh: 'Have a question or need more info about our platform?',
      email: 'sales@spatialgrid.ai',
    },
    {
      id: 2,
      heading: '🤝 Partnerships & Collaboration',
      paragrafh: 'Looking to collaborate on a project or integrate with our platform?',
      email: 'sales@spatialgrid.ai',
    },
    {
      id: 3,
      heading: '📰 Press & Media',
      paragrafh: 'Interested in featuring Spatial Grid or speaking with our leadership team?',
      email: 'info@spatialgrid.ai',
    },
    {
      id: 4,
      heading: '🛡️ Security & Compliance',
      paragrafh: 'Have a question or need more info about our platform?',
      email: 'info@spatialgrid.ai',
    },
    {
      id: 5,
      heading: '🌐 Visit Us',
      paragrafh:
        '4th floor, Capital Tower, BZ Space, N Convention Rd, Surya Enclave, HITEC City, Hyderabad, Telangana 500081',
    },
  ];

  export const privacyPolicyData = [
  {
    id: 'SpatialGrid PRIVACY POLICY',
    title: 'SpatialGrid PRIVACY POLICY',
    content: [
      'This Privacy Notice for SpatialGrid Computing Pvt. Ltd. ("we," "us," or "our") describes how and why we may access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you visit our website at <a href="https://spatialgrid.ai" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline hover:text-blue-600">https://spatialgrid.ai</a>, or any other website of ours that links to this Privacy Notice.',
      'Download and use our mobile application (spatialgrid), or any other application of ours that links to this Privacy Notice. Engage with us in other related ways, including any sales, marketing, or events.',
      'Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a>.',
    ],
  },
  {
    id: 'summary',
    title: 'SUMMARY OF KEY POINTS',
    content: [
      'This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.',

      'What personal information do we process? <br />  When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <strong>Learn more about personal information you disclose to us.</strong>',

      'Do we process any sensitive personal information? <br /> Some of the information may be considered “special” or “sensitive” in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.',

      'Do we collect any information from third parties? <br />We do not collect any information from third parties.',

      'How do we process your information? <br />We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.',

      'In what situations and with which parties do we share personal information? <br />We may share information in specific situations and with specific third parties. Learnmore <strong> about when and with whom we share </strong> your personal information.',

      'How do we keep your information safe? <br />We have adequate organizational and technical processes and procedures in place toprotect your personal information. However, no electronic transmission over the internetor information storage technology can be guaranteed to be 100% secure, so we cannotpromise or guarantee that hackers, cybercriminals, or other unauthorized third partieswill not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.',

      'What are your rights? <br />Depending on where you are located geographically, the applicable privacy law maymean you have certain rights regarding your personal information. Learn more <strong> about your privacy rights </strong>.',

      'How do you exercise your rights? <br />The easiest way to exercise your rights is by submitting a data subject access request,or by contacting us. We will consider and act upon any request in accordance with applicable <br/> data protection laws. Want to learn more about what we do with any information we collect?',
    ],
  },
  {
    id: 'data-usage',
    title: '1. WHAT INFORMATION DO WE COLLECT?',
    content: [
      '<strong>Personal information you disclose to us </strong> <br/> In Short: We collect personal information that you provide to us. We collect personalinformation that you voluntarily provide to us when you register on the Services, expressan interest in obtaining information about us or our products and Services, when youparticipate in activities on the Services, or otherwise when you contact us. PersonalInformation Provided by You. The personal information that we collect depends on thecontext of your interactions with us and the Services, the choices you make, and the products and features you use.',
      'The personal information we collect may include the following: <br/> • names <br/> • job titles <br/> • email addresses',
      'Sensitive Information. <br/>We do not process sensitive information. All personal information that you provide to usmust be true, complete, and accurate, and you must notify us of any changes to such personal information.',
      
    ],
  },
  {
    id: 'HOW DO WE PROCESS YOUR INFORMATION?',
    title: '2. HOW DO WE PROCESS YOUR INFORMATION?',
    content: [
      'In Short: We process your information to provide, improve, and administer our Services,communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.',

      'We process your personal information for a variety of reasons, depending on how you interact with our Services, including: <br/> 1. To facilitate account creation and authentication and otherwise manage useraccounts. We may process your information so you can create and log in to your account, as well as keep your account in working order. <br/> 2. To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service. <br/> 3. To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention. <br/> 4. To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.',
      
    ],
  },
  {
    id: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
    title: '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
    content: [
      'In Short: We may share information in specific situations described in this section and/or with the following third parties.',
      'We may need to share your personal information in the following situations: <br/> • Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.',
     
    ],
  },
  {
    id: 'HOW LONG DO WE KEEP YOUR INFORMATION?',
    title: '4. HOW LONG DO WE KEEP YOUR INFORMATION?',
    content: [
      'In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law..',

      'We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us..',

      'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.',
      
    ],
  },
  {
    id: 'HOW DO WE KEEP YOUR INFORMATION SAFE?',
    title: '5. HOW DO WE KEEP YOUR INFORMATION SAFE?',
    content: [
      'In Short: We aim to protect your personal information through a system of organizational and technical security measures.',

      'We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.',
      
    ],
  },
   {
    id: 'DO WE COLLECT INFORMATION FROM MINORS?',
    title: '6. DO WE COLLECT INFORMATION FROM MINORS?',
    content: [
      'In Short: We do not knowingly collect data from or market to children under 18 years of age.',

      'We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data, we may have collected from children under age 18, please contact us at <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a>',
    ],
  },
   {
    id: 'WHAT ARE YOUR PRIVACY RIGHTS??',
    title: '7. WHAT ARE YOUR PRIVACY RIGHTS?',
    content: [
      'In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence..',

      'Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.',

      'However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.',

      ' <stron>Account Information </stron> <br/> If you would at any time like to review or change the information in your account or terminate your account, you can:',

      'Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.',

      'If you have questions or comments about your privacy rights, you may email us at <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a>'
    ],
  },
   {
    id: 'CONTROLS FOR DO-NOT-TRACK FEATURES',
    title: '8. CONTROLS FOR DO-NOT-TRACK FEATURES',
    content: [
      'Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.',
    ],
  },
   {
    id: 'DO WE MAKE UPDATES TO THIS NOTICE?',
    title: '9. DO WE MAKE UPDATES TO THIS NOTICE?',
    content: [
      'In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.',

      'We may update this Privacy Notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.'
    ],
  },
   {
    id: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    title: '10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    content: [
      'If you have questions or comments about this notice, you may email us at <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a> or contact us by post at:',

      'SpatialGrid Computing Pvt. <br/> Ltd. 4 th floor, Capital Tower, BZ Space, N Convention Rd, Madhapur, Shaikpet <br/> Hyderabad, Telangana 500081 India'
    ],
  },
   {
    id: '11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    title: '11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    content: [
      'Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, ordelete your personal information, please fill out and submit a <strong> data subject </strong> access request.',

     
    ],
  },
];

export const termsConditionsData = [
  {
    id: 'TERMS OF USE',
    title: 'TERMS OF USE',
    content: [
      ' <strong>Last updated </strong>: March 1 st , 2025',
    ],
  },
  {
    id: 'AGREEMENT TO OUR LEGAL TERMS',
    title: 'AGREEMENT TO OUR LEGAL TERMS',
    content: [
      'We are SpatialGrid Computing Pvt. Ltd. (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). We operate, as well as any other related products and services that refer or link to these legal terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).',

      'You can contact us by email at <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a> or by mail to <br/> SpatialGrid Computing Pvt. Ltd. <br/> 4 th floor, Capital Tower, BZ Space, N Convention Rd, Madhapur, Shaikpet <br/> Hyderabad – 500081, Telangana India',

      'These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;), and SpatialGrid, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.',

      'Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Legal Terms, and you waive any right to receive specific notice of each such change.',

      'It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.',

      'We recommend that you print a copy of these Legal Terms for your records.',

    ],
  },
  {
    id: 'OUR SERVICES',
    title: '1. OUR SERVICES',
    content: [
      'The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.',
    ],
  },
  {
    id: 'INTELLECTUAL PROPERTY RIGHTS',
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    content: [
      ' <strong>Our intellectual property </strong> <br/> We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).',

      'Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world. The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use or internal business purpose only.',

      ' <strong>Your use of our Services </strong> <br/> Subject to your compliance with these Legal Terms, including the &quot;PROHIBITED ACTIVITIES&quot; section below, we grant you a non-exclusive, non-transferable, revocable license to access the Services; and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.',

      'Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',

      'If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a> If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.',
      'We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.',
      ' <strong>Your submissions </strong> <br/> Please review this section and the &quot;PROHIBITED ACTIVITIES&quot; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.',
      '<strong>Submissions </strong>: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission.',
      'You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.',
      '<strong>You are responsible for what you post or upload </strong>: By sending us Submissions through any part of the Services you: <br> • confirm that you have read and agree with our &quot;PROHIBITED ACTIVITIES&quot; and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading; to the extent permissible by applicable law, waive any and all moral rights to any such Submission <br/> • warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and warrant and represent that your Submissions do not constitute confidential information.',

      'You are solely responsible for your Submissions, and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.'
    ],
  },
  {
    id: 'USER REPRESENTATIONS',
    title: '3. USER REPRESENTATIONS',
    content: [
      'By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.',
      'If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).',
     
    ],
  },
  {
    id: 'PROHIBITED ACTIVITIES',
    title: '4. PROHIBITED ACTIVITIES',
    content: [
      'You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.',

      'As a user of the Services, you agree not to: <br/> • Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. <br/> • Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords. <br/> • Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein. <br/> • Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services. <br/> • Use any information obtained from the Services in order to harass, abuse, or harm another person. <br/> • Make improper use of our support services or submit false reports of abuse or misconduct. <br/> • Use the Services in a manner inconsistent with any applicable laws or regulations. <br/> • Engage in unauthorized framing of or linking to the Services. <br/> • Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services. <br/> • Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. <br/> • Delete the copyright or other proprietary rights notice from any Content. <br/> • Attempt to impersonate another user or person or use the username of another user. <br/> • Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&quot;gifs&quot;), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &quot;spyware&quot; or &quot;passive collection mechanisms&quot; or &quot;pcms&quot;). <br/> • Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services. <br/> • Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you. <br/> • Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services. <br/> • Copy or adapt the Services&#39; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. <br/> • Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services. <br/> • Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software. <br/> • Use a buying agent or purchasing agent to make purchases on the Services. <br/> • Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. <br/> • Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.',

    ],
  },
  {
    id: 'USER GENERATED CONTRIBUTIONS',
    title: '5. USER GENERATED CONTRIBUTIONS',
    content: [
      
      'The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that.',
      
    ],
  },
   {
    id: 'CONTRIBUTION LICENSE',
    title: '6. CONTRIBUTION LICENSE',
    content: [
      'You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings). By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.',

      'We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.',
    ],
  },
   {
    id: 'SERVICES MANAGEMENT',
    title: '7. SERVICES MANAGEMENT',
    content: [
     

      'We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.',

     
    ],
  },
   {
    id: 'TERM AND TERMINATION',
    title: '8. TERM AND TERMINATION',
    content: [
      'These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.',

      'If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.'
    ],
  },
   {
    id: 'MODIFICATIONS AND INTERRUPTIONS',
    title: '9. MODIFICATIONS AND INTERRUPTIONS',
    content: [
      'We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.',

      'We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you.',
      'You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.'
    ],
  },
   {
    id: 'GOVERNING LAW',
    title: '10. GOVERNING LAW',
    content: [
      'These Legal Terms shall be governed by and defined following the laws of India. SpatialGrid and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.',
    ],
  },
   {
    id: ' DISPUTE RESOLUTION',
    title: '11. DISPUTE RESOLUTION',
    content: [
      ' <strong>Informal Negotiations </strong> <br/> To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either you or us (individually, a &quot;Party&quot; and collectively, the &quot;Parties&quot;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least 60 days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.',

     '<strong>Binding Arbitration </strong> <br/> Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be from India. The seat, or legal place, or arbitration shall be India. The language of the proceedings shall be in English The governing law of these Legal Terms shall be substantive.',

     '<strong>Restrictions </strong> <br/> The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.',
     '<strong>Exceptions to Informal Negotiations and Arbitration </strong> <br/> The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.'     
    ],
  },

  {
    id: 'CORRECTIONS',
    title: '12. CORRECTIONS',
    content: [
      'There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.',
    ],
  },
  {
    id: 'DISCLAIMER',
    title: '13. DISCLAIMER',
    content: [
      'THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON- INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&#39; CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BERESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.',
    ],
  },

   {
    id: 'LIMITATIONS OF LIABILITY',
    title: '14. LIMITATIONS OF LIABILITY',
    content: [
      'IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.',
    ],
  },

  {
    id: 'INDEMNIFICATION',
    title: '15. INDEMNIFICATION',
    content: [
      'You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.',
    ],
  },
   {
    id: 'USER DATA',
    title: '16. USER DATA',
    content: [
      'We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.',
    ],
  },
    {
    id: 'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    content: [
      'Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.',
      'YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.',
      'You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.'
    ],
  },
  {
    id: '18. MISCELLANEOUS',
    title: '18.  MISCELLANEOUS',
    content: [
      'These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.',
      'If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.'
    ],
  },
   {
    id: 'CONTACT US',
    title: '19. CONTACT US',
    content: [
      'In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at: <a href="mailto:software@spatialgrid.ai" class="text-blue-400 underline hover:text-blue-600">software@spatialgrid.ai</a>',
    ],
  },
];

