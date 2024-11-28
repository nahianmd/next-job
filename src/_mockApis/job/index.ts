// Mock data for jobs
import { ExperienceLevel, Job, JobType, WorkLocation } from '@/types/job';
import services from '@/utils/mockAdapter';
import { KeyedObject } from '@/types';

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: {
      id: 'c1',
      name: 'TechCorp Solutions',
      logo: '/api/placeholder/100/100',
      website: 'https://techcorp.com',
      location: 'San Francisco, CA'
    },
    description: 'We are looking for an experienced React developer to join our dynamic team...',
    requirements: ['Strong experience with React and TypeScript', 'Experience with Next.js', 'Understanding of RESTful APIs'],
    responsibilities: [
      'Develop new features for our web application',
      'Collaborate with the design team',
      'Write clean, maintainable code'
    ],
    qualifications: [`'Bachelor's degree in Computer Science or related field'`, '5+ years of experience in frontend development'],
    skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'REST APIs'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.SENIOR,
    workLocation: WorkLocation.HYBRID,
    location: 'San Francisco, CA',
    salary: {
      min: 120000,
      max: 180000,
      currency: 'USD',
      period: 'YEARLY'
    },
    benefits: ['Health Insurance', '401(k) matching', 'Unlimited PTO'],
    postedDate: new Date('2024-11-20'),
    updatedDate: new Date('2024-11-20'),
    isActive: true,
    numberOfVacancies: 2,
    department: 'Engineering'
  },
  {
    id: '2',
    title: 'Junior Frontend Developer',
    company: {
      id: 'c2',
      name: 'StartupX',
      logo: '/api/placeholder/100/100',
      location: 'Remote'
    },
    description: 'Looking for a passionate junior developer to join our growing team...',
    requirements: ['Basic understanding of React', 'Knowledge of HTML, CSS, and JavaScript', 'Willingness to learn'],
    responsibilities: [
      'Build user interfaces using React',
      'Work with senior developers to improve your skills',
      'Participate in code reviews'
    ],
    qualifications: ['Computer Science degree or equivalent', '1+ year of programming experience'],
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    jobType: JobType.FULL_TIME,
    experienceLevel: ExperienceLevel.JUNIOR,
    workLocation: WorkLocation.REMOTE,
    location: 'Remote',
    salary: {
      min: 60000,
      max: 80000,
      currency: 'USD',
      period: 'YEARLY'
    },
    postedDate: new Date('2024-11-25'),
    updatedDate: new Date('2024-11-25'),
    isActive: true,
    numberOfVacancies: 1,
    department: 'Engineering'
  }
];

services.onGet('/api/simple-card/list').reply(200, { mockJobs });

services.onPost('/api/simple-card/filter').reply((config) => {
  try {
    const { key } = JSON.parse(config.data);

    const results = mockJobs.filter((row: KeyedObject) => {
      let matches = true;

      const properties = ['jobType', 'experienceLevel', 'skills', 'workLocation', 'department'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (row[property].toString().toLowerCase().includes(key.toString().toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
      return matches;
    });

    return [200, { results }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
