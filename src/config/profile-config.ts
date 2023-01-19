import { IProfileConfigType } from '../types/profile-config.types';
import { ImagePaths } from '../utils/image-paths';

export const responsibilities = [
  'Proactively research and locate necessary tools and processes to identify troublesome trends as they develop.',
  'Introduce new IT system design and testing procedures as well as quality standards to improve business performance, productivity and compliance across organization.',
  'Provide expert application design, guidance on solution system designs, redesigns for platform, performance and integration of new technical features and capabilities.',
  'Write clean, maintainable and efficient code.',
  'Participate in the architecture and design of the feature'
];

export const PROFILE_CONFIG: IProfileConfigType = {
  PROJECTS: [
    {
      id: 1,
      name: 'File Exchange - XR',
      description:
        'File Exchange leverages four decades of transmission and translation expertise to provide the most robust data delivery and transformation tool available. With File Exchange, banks can eliminate the hassles of installing software, managing servers, designing networks.',
      role: 'UI Architect',
      techStack: ['ReactJs', 'Redux', 'TypeScript', 'SCSS'],
      rolesAndResponsibilities: responsibilities
    },
    {
      id: 2,
      name: 'Payments Exchange - RTP',
      description:
        'With the use of RTP, banks can now rapidly onboard new customer while providing existing customer an expanded suite of payments options, including real time payments.',
      role: 'UI Architect',
      techStack: ['ReactJs', 'Redux', 'TypeScript', 'SCSS']
    },
    {
      id: 3,
      name: 'Enterprise Payment Platform',
      description:
        'EPP UI is the modern UI for handling all types of payments. ',
      role: 'UI Architect',
      techStack: ['ReactJs', 'TypeScript', 'Redux', 'SCSS']
    },
    {
      id: 4,
      name: 'CSCS',
      description:
        'CSCS cards provide proof that individuals working on construction sites have the appropriate training and qualifications for the job they do on site. By ensuring the workforce are appropriately qualified the card plays its part in improving standards and safety on UK construction sites',
      role: 'Software Architect',
      techStack: ['Angular', 'TypeScript', 'NodeJs', 'AWS', 'CSS']
    },
    {
      id: 5,
      name: 'ASTM',
      description:
        'ASTM International, formerly known as American Society for Testing and Materials, is an international standards organization that develops and publishes voluntary consensus technical standards for a wide range of materials, products, systems, and services.',
      role: 'UI Architect',
      techStack: ['ReactJs', 'TypeScript', 'NodeJs', 'SCSS']
    },
    {
      id: 6,
      name: 'MyBI',
      description:
        'MyBI Portal is a one stop web application which allows AT&T staff to search documents shared across multiple source systems. Users can also subscribe any document and if that document has any change, it gets notified to the user.',
      role: 'Tech Lead, UI Specialist',
      techStack: ['ReactJs', 'NodeJs', 'JavaScript', 'CSS']
    },
    {
      id: 7,
      name: 'CityNet',
      description:
        'NLT is one of the biggest Internet Service provider of Singapore. Users can request for new connection with their convenient time, and then they can track the progress of that request.',
      role: 'Tech Lead, UI Specialist',
      techStack: ['ReactJs', 'TypeScript', 'Redux', 'CSS']
    },
    {
      id: 8,
      name: 'XPO Logistics',
      description:
        'XPO Logistics is one of the largest logistics companies of US. This product is to provide a high-end system to enhance their day to day activities.',
      role: 'Senior Software Engineer',
      techStack: ['Angular', 'TypeScript', 'Web API', 'CSS']
    },
    {
      id: 9,
      name: 'Amdocs Academy',
      description:
        'Amdocs Academy is an innovative cloud learning portal providing a personalized role and scenario-based learning experience that improves employee performance.',
      role: 'Senior Software Engineer',
      techStack: ['Angular Js', 'JavaScript', 'Web API', 'CSS']
    },
    {
      id: 10,
      name: 'Axalta Coating System',
      description:
        'Axalta is the second largest powder coating solution in the world. Integrated online system, manages scheduling, exacting, dispatching and other activities.',
      role: 'Senior Software Engineer',
      techStack: ['Angular Js', 'JavaScript', 'Web API', 'CSS']
    },
    {
      id: 11,
      name: 'erail.in',
      description:
        'Service oriented website exploring the trains of Indian Railways. Train route, seat availability and other features were the USP of the service.',
      role: 'Software Engineer',
      techStack: ['JQuery', 'JavaScript', 'CSS']
    },
    {
      id: 12,
      name: 'UI Geeks',
      description:
        'UI-Geeks is an online learning platform. Learn Core and Advanced Concepts, Blogs, Summary of JavaScript, React, Angular, SCSS, CSS.',
      role: 'Owner',
      techStack: ['ReactJs', 'TypeScript', 'SCSS'],
      link: 'https://ui-geeks.in'
    }
  ],
  QUALIFICATIONS: [
    {
      id: 1,
      name: 'Master of Computer Applications',
      certifiedBy: 'Uttar Pradesh Technical University (UPTU)',
      icon: ImagePaths.QUALIFICATION.UPTU
    },
    {
      id: 2,
      name: 'Bachelor of Computer Applications',
      certifiedBy: 'Agra University',
      icon: ImagePaths.QUALIFICATION.AGRA_UNIVERSITY
    }
  ],
  SKILLS: [
    {
      id: 1,
      name: 'React Js + Redux',
      icon: ImagePaths.TECH.REACT,
      duration: 6,
      since: 2015,
      exp: 8,
      percent: 0
    },
    {
      id: 2,
      name: 'Angular',
      icon: ImagePaths.TECH.ANGULAR,
      duration: 6,
      since: 2015,
      exp: 8,
      percent: 0
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: ImagePaths.TECH.JS,
      duration: 11,
      since: 2010,
      exp: 13,
      percent: 0
    },
    {
      id: 4,
      name: 'TypeScript',
      icon: ImagePaths.TECH.TS,
      duration: 4,
      since: 2015,
      exp: 6,
      percent: 0
    },
    {
      id: 5,
      name: 'CSS/SCSS',
      icon: ImagePaths.TECH.CSS,
      duration: 5,
      since: 2015,
      exp: 8,
      percent: 0
    },
    {
      id: 6,
      name: 'Bootstrap',
      icon: ImagePaths.TECH.BOOTSTRAP,
      duration: 5,
      since: 2015,
      exp: 10,
      percent: 0
    },
    {
      id: 7,
      name: 'JQuery',
      icon: ImagePaths.TECH.JQUERY,
      duration: 10,
      since: 2011,
      exp: 5,
      percent: 0
    },
    {
      id: 8,
      name: 'Node Js',
      icon: ImagePaths.TECH.NODE,
      duration: 5,
      since: 2013,
      exp: 5,
      percent: 0
    },
    {
      id: 9,
      name: 'Express Js',
      icon: ImagePaths.TECH.EXPRESS_JS,
      duration: 8,
      since: 2013,
      exp: 5,
      percent: 0
    },
    {
      id: 10,
      name: 'MongoDB',
      icon: ImagePaths.TECH.MONGO_DB,
      duration: 5,
      since: 2015,
      exp: 5,
      percent: 0
    }

    // {
    //   id: 9,
    //   name: '.NET',
    //   icon: dotnetImg,
    //   duration: 6,
    //   since: 2018,
    //   exp: 0,
    //   percent: 0
    // }
  ],
  ADDITIONAL_SKILLS: [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'OOJS'
    },
    {
      id: 3,
      name: 'JSON'
    },
    {
      id: 4,
      name: 'AJAX'
    },
    {
      id: 5,
      name: 'CSS Flex Box'
    },
    {
      id: 6,
      name: 'CSS Grid'
    },

    {
      id: 7,
      name: 'Webpack'
    },
    {
      id: 8,
      name: 'Jest'
    },
    {
      id: 9,
      name: 'Enzyme'
    },
    {
      id: 10,
      name: 'Redis'
    },
    {
      id: 11,
      name: 'Responsive Designing'
    },
    {
      id: 12,
      name: 'Cross Browser Development'
    },
    {
      id: 13,
      name: 'Web Accessibility'
    },
    {
      id: 14,
      name: 'Internationalization'
    },
    {
      id: 15,
      name: 'PWA'
    }
  ],
  CERTIFICATIONS: [
    {
      id: 1,
      name: 'AWS Developer Associate',
      certifiedBy: 'AWS',
      icon: ImagePaths.TECH.AWS
    },
    {
      id: 2,
      name: 'Advance Diploma in Computer Software Technology (ADCST)',
      certifiedBy: 'ET&T, New Delhi',
      icon: ''
    }
  ],
  EMPLOYMENTS: [
    {
      id: 1,
      companyName: 'Fiserv',
      designation: 'UI Architect',
      duration: `Nov, 2020 - Present`,
      icon: ImagePaths.COMPANY.FISERV
    },
    {
      id: 2,
      companyName: 'Icreon Communications Pvt. Ltd',
      designation: 'UI Architect',
      duration: `Dec, 2015 - Nov, 2020`,
      icon: ImagePaths.COMPANY.ICREON
    },
    {
      id: 3,
      companyName: 'Confluo eSolutions Pvt. Ltd',
      designation: 'Senior Software Engineer',
      duration: `June, 2015 - Dec, 2015`,
      icon: ImagePaths.COMPANY.CONFLUO
    },
    {
      id: 4,
      companyName: 'RRA Soft LLP',
      designation: 'Software Engineer',
      duration: `Dec, 2011 - June, 2015`,
      icon: ImagePaths.COMPANY.RRA_SOFT
    },
    {
      id: 5,
      companyName: 'IRCTC',
      designation: 'Web Developer',
      duration: `Jan, 2010 - Dec, 2011`,
      icon: ImagePaths.COMPANY.IRCTC
    }
  ],
  TOOLS: [
    {
      id: 1,
      name: 'Git/GitHub',
      description: 'Most widely used modern version control system.',
      icon: ImagePaths.TOOLS.GIT
    },
    {
      id: 2,
      name: 'Atlassian Source Tree',
      description: 'Graphical Interface for GIT',
      icon: ImagePaths.TOOLS.SOURCE_TREE
    },
    {
      id: 3,
      name: 'Bitbucket',
      description: 'Plan projects, collaborate on code, test, and deploy.',
      icon: ImagePaths.TOOLS.BITBUCKET
    },
    {
      id: 4,
      name: 'Jenkins',
      description: 'The leading open source automation server.',
      icon: ImagePaths.TOOLS.JENKINS
    }
  ]
};
