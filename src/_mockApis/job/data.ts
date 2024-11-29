import { ExperienceLevel, Job, JobType, WorkLocation } from '@/types/job';

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Senior Full Stack Developer',
    company: {
      id: 'comp-001',
      name: 'TechCorp Solutions',
      logo: 'https://example.com/techcorp-logo.png',
      website: 'https://techcorp.com',
      location: 'San Francisco, CA'
    },
    description: 'Join our dynamic team building scalable web applications using modern technologies including React, Node.js, and AWS.',
    requirements: [
      '5+ years of experience in full stack development',
      'Strong proficiency in React, Node.js, and TypeScript',
      'Experience with cloud services (AWS/Azure/GCP)',
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      'Design and implement scalable backend services',
      'Develop responsive front-end applications',
      'Collaborate with cross-functional teams',
      'Mentor junior developers'
    ],
    qualifications: ["Master's degree preferred", 'Experience with microservices architecture', 'Strong problem-solving abilities'],
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.HYBRID,
    location: 'San Francisco, CA',
    salary: {
      min: 140000,
      max: 180000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health insurance', '401(k) matching', 'Unlimited PTO', 'Remote work flexibility'],
    applicationDeadline: new Date('2024-12-31'),
    postedDate: new Date('2024-11-01'),
    updatedDate: new Date('2024-11-01'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://techcorp.com/careers/senior-fullstack',
    department: 'Engineering',
    contactEmail: 'recruiting@techcorp.com',
    tags: ['javascript', 'web development', 'full stack']
  },
  {
    id: 'job-002',
    title: 'Product Marketing Manager',
    company: {
      id: 'comp-002',
      name: 'InnovateMark',
      website: 'https://innovatemark.com',
      location: 'New York, NY'
    },
    description:
      'Lead product marketing initiatives for our SaaS platform, developing go-to-market strategies and driving customer acquisition.',
    requirements: [
      '4+ years of product marketing experience',
      'Proven track record in SaaS marketing',
      'Excellent communication and presentation skills'
    ],
    responsibilities: [
      'Develop and execute product marketing strategies',
      'Create compelling product messaging and positioning',
      'Conduct market research and competitive analysis',
      'Collaborate with sales and product teams'
    ],
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      'Experience with marketing automation tools',
      'Strong analytical skills'
    ],
    skills: ['Product Marketing', 'Market Research', 'Content Strategy', 'Marketing Automation'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.MID,
    workLocation: WorkLocation.ONSITE,
    location: 'New York, NY',
    salary: {
      min: 90000,
      max: 120000,
      currency: 'USD',
      period: 'YEARLY'
    },
    postedDate: new Date('2024-11-15'),
    updatedDate: new Date('2024-11-15'),
    isActive: true,
    numberOfVacancies: 1,
    department: 'Marketing'
  },
  {
    id: 'job-003',
    title: 'UX/UI Designer',
    company: {
      id: 'comp-003',
      name: 'DesignFlow Studios',
      logo: 'https://example.com/designflow-logo.png',
      website: 'https://designflow.io',
      location: 'Austin, TX'
    },
    description: 'Create intuitive and engaging user experiences for web and mobile applications.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating user-centered design'
    ],
    responsibilities: [
      'Create wireframes and prototypes',
      'Conduct user research and usability testing',
      'Design responsive interfaces',
      'Collaborate with developers and stakeholders'
    ],
    qualifications: [
      "Bachelor's degree in Design or related field",
      'Experience with design systems',
      'Knowledge of accessibility standards'
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'HTML/CSS'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.MID,
    workLocation: WorkLocation.REMOTE,
    location: 'Remote - US',
    salary: {
      min: 85000,
      max: 115000,
      currency: 'USD',
      period: 'YEARLY'
    },
    postedDate: new Date('2024-11-10'),
    updatedDate: new Date('2024-11-10'),
    isActive: true,
    numberOfVacancies: 1,
    applicationUrl: 'https://designflow.io/careers',
    department: 'Design',
    tags: ['design', 'ux', 'ui']
  },
  {
    id: 'job-004',
    title: 'Data Scientist Intern',
    company: {
      id: 'comp-004',
      name: 'DataSmart Analytics',
      website: 'https://datasmart.ai',
      location: 'Boston, MA'
    },
    description: 'Join our data science team for a summer internship working on machine learning projects.',
    requirements: [
      'Currently pursuing MS/PhD in Data Science, Computer Science, or related field',
      'Strong programming skills in Python',
      'Knowledge of machine learning algorithms'
    ],
    responsibilities: [
      'Develop and implement machine learning models',
      'Analyze large datasets',
      'Present findings to stakeholders',
      'Participate in research projects'
    ],
    qualifications: [
      'Strong academic background in mathematics and statistics',
      'Experience with PyTorch or TensorFlow',
      'Good communication skills'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Analysis', 'Statistics'],
    jobType: JobType.INTERNSHIP,
    experienceLevel: ExperienceLevel.ENTRY,
    workLocation: WorkLocation.HYBRID,
    location: 'Boston, MA',
    salary: {
      min: 30,
      max: 40,
      currency: 'USD',
      period: 'HOURLY'
    },
    applicationDeadline: new Date('2024-12-15'),
    postedDate: new Date('2024-11-05'),
    updatedDate: new Date('2024-11-05'),
    isActive: true,
    numberOfVacancies: 3,
    department: 'Data Science',
    contactEmail: 'internships@datasmart.ai'
  },
  {
    id: 'job-005',
    title: 'DevOps Engineer',
    company: {
      id: 'comp-005',
      name: 'CloudScale Technologies',
      logo: 'https://example.com/cloudscale-logo.png',
      website: 'https://cloudscale.tech',
      location: 'Seattle, WA'
    },
    description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Strong knowledge of AWS services',
      'Experience with CI/CD tools',
      'Infrastructure as Code expertise'
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Implement and maintain CI/CD pipelines',
      'Optimize system performance',
      'Ensure system security and compliance'
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      'AWS certifications preferred',
      'Experience with containerization'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Linux'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.HYBRID,
    location: 'Seattle, WA',
    salary: {
      min: 130000,
      max: 170000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health and dental insurance', 'Stock options', 'Professional development budget', 'Flexible work hours'],
    postedDate: new Date('2024-11-08'),
    updatedDate: new Date('2024-11-08'),
    isActive: true,
    numberOfVacancies: 1,
    department: 'Infrastructure',
    tags: ['devops', 'cloud', 'infrastructure']
  },
  {
    id: 'job-006',
    title: 'Content Marketing Specialist',
    company: {
      id: 'comp-006',
      name: 'ContentPro Media',
      website: 'https://contentpro.com',
      location: 'Remote'
    },
    description: 'Create engaging content across various digital channels to drive brand awareness and lead generation.',
    requirements: [
      '2+ years of content marketing experience',
      'Excellent writing and editing skills',
      'SEO knowledge',
      'Experience with content management systems'
    ],
    responsibilities: [
      'Create and manage content calendar',
      'Write blog posts, whitepapers, and social media content',
      'Optimize content for SEO',
      'Track and report on content performance'
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      'Portfolio of published content',
      'Experience with marketing analytics tools'
    ],
    skills: ['Content Writing', 'SEO', 'Social Media Marketing', 'WordPress', 'Google Analytics'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.JUNIOR,
    workLocation: WorkLocation.REMOTE,
    location: 'Remote - US',
    salary: {
      min: 55000,
      max: 75000,
      currency: 'USD',
      period: 'YEARLY'
    },
    postedDate: new Date('2024-11-12'),
    updatedDate: new Date('2024-11-12'),
    isActive: true,
    numberOfVacancies: 2,
    department: 'Marketing',
    contactEmail: 'jobs@contentpro.com'
  },
  {
    id: 'job-007',
    title: 'Mobile App Developer',
    company: {
      id: 'comp-007',
      name: 'AppWorks Mobile',
      logo: 'https://example.com/appworks-logo.png',
      website: 'https://appworks.dev',
      location: 'Chicago, IL'
    },
    description: 'Develop native iOS applications for our enterprise clients.',
    requirements: [
      '3+ years of iOS development experience',
      'Proficiency in Swift and UIKit',
      'Experience with Core Data and networking',
      'Understanding of iOS design principles'
    ],
    responsibilities: [
      'Develop and maintain iOS applications',
      'Implement new features and functionality',
      'Optimize application performance',
      'Collaborate with design and backend teams'
    ],
    qualifications: ["Bachelor's degree in Computer Science or related field", 'Published apps in the App Store', 'Knowledge of SwiftUI'],
    skills: ['Swift', 'iOS', 'UIKit', 'SwiftUI', 'Core Data', 'Git'],
    jobType: JobType.CONTRACT,
    experienceLevel: ExperienceLevel.MID,
    workLocation: WorkLocation.REMOTE,
    location: 'Remote - US',
    salary: {
      min: 80,
      max: 100,
      currency: 'USD',
      period: 'HOURLY'
    },
    applicationDeadline: new Date('2024-12-31'),
    postedDate: new Date('2024-11-15'),
    updatedDate: new Date('2024-11-15'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://appworks.dev/careers',
    department: 'Mobile Development',
    tags: ['ios', 'mobile', 'swift']
  },
  {
    id: 'job-008',
    title: 'HR Business Partner',
    company: {
      id: 'comp-008',
      name: 'GrowthCorp Industries',
      website: 'https://growthcorp.com',
      location: 'Denver, CO'
    },
    description: 'Partner with business leaders to develop and implement HR strategies that support organizational goals.',
    requirements: [
      '5+ years of HR experience',
      'SHRM certification',
      'Experience with performance management',
      'Knowledge of employment law'
    ],
    responsibilities: [
      'Provide HR guidance to leadership',
      'Manage employee relations',
      'Develop HR policies and procedures',
      'Lead talent development initiatives'
    ],
    qualifications: ["Bachelor's degree in Human Resources or related field", "Master's degree preferred", 'Experience with HRIS systems'],
    skills: ['HR Management', 'Employee Relations', 'Talent Development', 'Conflict Resolution'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.HYBRID,
    location: 'Denver, CO',
    salary: {
      min: 100000,
      max: 130000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Comprehensive healthcare', '401(k) with match', 'Professional development', 'Life insurance'],
    postedDate: new Date('2024-11-10'),
    updatedDate: new Date('2024-11-10'),
    isActive: true,
    numberOfVacancies: 1,
    department: 'Human Resources'
  },
  {
    id: 'job-009',
    title: 'Content Writer',
    company: {
      id: 'company9',
      name: 'Content Creators',
      logo: 'https://example.com/logo9.png',
      website: 'https://contentcreators.com',
      location: 'Austin, TX'
    },
    description: 'Create high-quality content for blogs and websites.',
    requirements: ['Proficiency in SEO writing'],
    responsibilities: ['Write articles and blog posts', 'Optimize content for search engines'],
    qualifications: ["Bachelor's in Journalism or English"],
    skills: ['Content Writing', 'SEO', 'Blogging'],
    jobType: JobType.PART_TIME,
    experienceLevel: ExperienceLevel.ENTRY,
    workLocation: WorkLocation.REMOTE,
    location: 'Austin, TX',
    salary: {
      min: 35000,
      max: 45000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Flexible Schedule', 'Health Insurance'],
    applicationDeadline: new Date('2024-12-18'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 3,
    applicationUrl: 'https://contentcreators.com/careers',
    department: 'Content',
    contactEmail: 'careers@contentcreators.com',
    tags: ['Content Writing', 'SEO', 'Remote']
  },
  {
    id: 'job-0010',
    title: 'Sales Manager',
    company: {
      id: 'company10',
      name: 'Salesforce Pro',
      logo: 'https://example.com/logo10.png',
      website: 'https://salesforcepro.com',
      location: 'Chicago, IL'
    },
    description: 'Lead the sales team and develop strategies to increase sales.',
    requirements: ['Experience in B2B sales'],
    responsibilities: ['Manage sales pipeline', 'Build and maintain client relationships'],
    qualifications: ["Bachelor's in Business Administration"],
    skills: ['Sales', 'B2B', 'Negotiation'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.ONSITE,
    location: 'Chicago, IL',
    salary: {
      min: 100000,
      max: 130000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', 'Stock Options'],
    applicationDeadline: new Date('2024-12-20'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://salesforcepro.com/careers',
    department: 'Sales',
    contactEmail: 'hr@salesforcepro.com',
    tags: ['Sales', 'B2B', 'Leadership']
  },
  {
    id: 'job-011',
    title: 'Software Engineer',
    company: {
      id: 'company1',
      name: 'Tech Innovations',
      logo: 'https://example.com/logo1.png',
      website: 'https://techinnovations.com',
      location: 'New York, NY'
    },
    description: 'Develop, test, and maintain software applications.',
    requirements: ['Proficient in JavaScript and React', 'Experience with cloud platforms'],
    responsibilities: ['Write clean, maintainable code', 'Collaborate with cross-functional teams'],
    qualifications: ["Bachelor's in Computer Science"],
    skills: ['JavaScript', 'React', 'Cloud Computing'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.MID,
    workLocation: WorkLocation.HYBRID,
    location: 'New York, NY',
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', '401(k)', 'Paid Time Off'],
    applicationDeadline: new Date('2024-12-31'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 5,
    applicationUrl: 'https://techinnovations.com/careers',
    department: 'Engineering',
    contactEmail: 'hr@techinnovations.com',
    tags: ['Software Development', 'React', 'Cloud']
  },
  {
    id: 'job-012',
    title: 'Graphic Designer',
    company: {
      id: 'company2',
      name: 'Creative Agency',
      logo: 'https://example.com/logo2.png',
      website: 'https://creativeagency.com',
      location: 'Los Angeles, CA'
    },
    description: 'Design creative assets for branding and digital marketing.',
    requirements: ['Proficiency in Adobe Photoshop and Illustrator', 'Strong portfolio'],
    responsibilities: ['Create designs for web and print media', 'Work with marketing team'],
    qualifications: ["Bachelor's in Graphic Design"],
    skills: ['Adobe Photoshop', 'Illustrator', 'Branding'],
    jobType: JobType.PART_TIME,
    experienceLevel: ExperienceLevel.JUNIOR,
    workLocation: WorkLocation.REMOTE,
    location: 'Los Angeles, CA',
    salary: {
      min: 40000,
      max: 60000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Flexible hours', 'Paid Time Off'],
    applicationDeadline: new Date('2024-12-15'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://creativeagency.com/careers',
    department: 'Design',
    contactEmail: 'careers@creativeagency.com',
    tags: ['Graphic Design', 'Remote', 'Creative']
  },
  {
    id: 'job-013',
    title: 'Data Analyst',
    company: {
      id: 'company3',
      name: 'Data Insights',
      logo: 'https://example.com/logo3.png',
      website: 'https://datainsights.com',
      location: 'Chicago, IL'
    },
    description: 'Analyze and interpret complex data to support business decisions.',
    requirements: ['Experience with SQL and data visualization tools'],
    responsibilities: ['Analyze sales data', 'Provide actionable insights'],
    qualifications: ["Bachelor's in Data Science"],
    skills: ['SQL', 'Tableau', 'Data Analysis'],
    jobType: JobType.CONTRACT,
    experienceLevel: ExperienceLevel.MID,
    workLocation: WorkLocation.ONSITE,
    location: 'Chicago, IL',
    salary: {
      min: 70000,
      max: 90000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', '401(k)'],
    applicationDeadline: new Date('2024-11-30'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 3,
    applicationUrl: 'https://datainsights.com/careers',
    department: 'Analytics',
    contactEmail: 'jobs@datainsights.com',
    tags: ['Data Analysis', 'Contract', 'SQL']
  },
  {
    id: 'job-014',
    title: 'Product Manager',
    company: {
      id: 'company4',
      name: 'Product World',
      logo: 'https://example.com/logo4.png',
      website: 'https://productworld.com',
      location: 'San Francisco, CA'
    },
    description: 'Lead product strategy and oversee product lifecycle.',
    requirements: ['Experience managing product roadmaps'],
    responsibilities: ['Define product vision', 'Work closely with design and engineering teams'],
    qualifications: ["Bachelor's in Business or Engineering"],
    skills: ['Product Management', 'Roadmap Planning', 'Cross-functional Collaboration'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.LEAD,
    workLocation: WorkLocation.HYBRID,
    location: 'San Francisco, CA',
    salary: {
      min: 120000,
      max: 150000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Stock Options', 'Paid Time Off', 'Health Insurance'],
    applicationDeadline: new Date('2024-12-10'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 1,
    applicationUrl: 'https://productworld.com/careers',
    department: 'Product',
    contactEmail: 'hr@productworld.com',
    tags: ['Product Management', 'Leadership', 'Strategy']
  },
  {
    id: 'job-015',
    title: 'Marketing Specialist',
    company: {
      id: 'company5',
      name: 'Brand Solutions',
      logo: 'https://example.com/logo5.png',
      website: 'https://brandsolutions.com',
      location: 'Miami, FL'
    },
    description: 'Create and implement marketing campaigns to drive brand awareness.',
    requirements: ['Experience with digital marketing tools'],
    responsibilities: ['Manage social media accounts', 'Create marketing campaigns'],
    qualifications: ["Bachelor's in Marketing"],
    skills: ['SEO', 'Social Media Marketing', 'Content Creation'],
    jobType: JobType.PART_TIME,
    experienceLevel: ExperienceLevel.ENTRY,
    workLocation: WorkLocation.REMOTE,
    location: 'Miami, FL',
    salary: {
      min: 30000,
      max: 50000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Flexible Schedule', 'Paid Time Off'],
    applicationDeadline: new Date('2024-12-05'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://brandsolutions.com/careers',
    department: 'Marketing',
    contactEmail: 'careers@brandsolutions.com',
    tags: ['Marketing', 'SEO', 'Remote']
  },
  {
    id: 'job-016',
    title: 'Customer Support Specialist',
    company: {
      id: 'company6',
      name: 'Support Hub',
      logo: 'https://example.com/logo6.png',
      website: 'https://supporthub.com',
      location: 'Austin, TX'
    },
    description: 'Provide customer support through multiple channels.',
    requirements: ['Experience with CRM systems'],
    responsibilities: ['Resolve customer issues', 'Handle inbound support tickets'],
    qualifications: ['High School Diploma'],
    skills: ['Customer Support', 'CRM', 'Problem Solving'],
    jobType: JobType.PART_TIME,
    experienceLevel: ExperienceLevel.ENTRY,
    workLocation: WorkLocation.REMOTE,
    location: 'Austin, TX',
    salary: {
      min: 35000,
      max: 45000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Flexible Hours', 'Health Insurance'],
    applicationDeadline: new Date('2024-12-25'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 3,
    applicationUrl: 'https://supporthub.com/careers',
    department: 'Support',
    contactEmail: 'jobs@supporthub.com',
    tags: ['Customer Support', 'Remote', 'CRM']
  },
  {
    id: 'job-017',
    title: 'UI/UX Designer',
    company: {
      id: 'company7',
      name: 'Design Agency',
      logo: 'https://example.com/logo7.png',
      website: 'https://designagency.com',
      location: 'Seattle, WA'
    },
    description: 'Design user-friendly interfaces and improve user experiences.',
    requirements: ['Experience with Figma and Adobe XD'],
    responsibilities: ['Create wireframes and prototypes', 'Collaborate with development teams'],
    qualifications: ["Bachelor's in Graphic Design or related field"],
    skills: ['UI/UX Design', 'Figma', 'Prototyping'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.JUNIOR,
    workLocation: WorkLocation.HYBRID,
    location: 'Seattle, WA',
    salary: {
      min: 60000,
      max: 80000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', '401(k)', 'Paid Time Off'],
    applicationDeadline: new Date('2024-12-12'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 2,
    applicationUrl: 'https://designagency.com/careers',
    department: 'Design',
    contactEmail: 'hr@designagency.com',
    tags: ['UI/UX', 'Design', 'Figma']
  },
  {
    id: 'job-018',
    title: 'Network Administrator',
    company: {
      id: 'company8',
      name: 'IT Solutions',
      logo: 'https://example.com/logo8.png',
      website: 'https://itsolutions.com',
      location: 'Dallas, TX'
    },
    description: 'Manage and troubleshoot network infrastructure.',
    requirements: ['Experience with routers and firewalls'],
    responsibilities: ['Monitor network performance', 'Install and configure hardware'],
    qualifications: ["Bachelor's in Information Technology"],
    skills: ['Networking', 'Cisco', 'Firewalls'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.ONSITE,
    location: 'Dallas, TX',
    salary: {
      min: 90000,
      max: 110000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', 'Paid Time Off'],
    applicationDeadline: new Date('2024-12-01'),
    postedDate: new Date('2024-10-11'),
    updatedDate: new Date('2024-10-11'),
    isActive: true,
    numberOfVacancies: 1,
    applicationUrl: 'https://itsolutions.com/careers',
    department: 'IT',
    contactEmail: 'careers@itsolutions.com',
    tags: ['Networking', 'Cisco', 'IT']
  }
];
