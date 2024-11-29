import { ExperienceLevel, JobType, SalaryRange } from '@/types/job';
import crypto from 'crypto';

export function toTitleCase(str: string) {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .split(' ') // Split the string into words
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a string
}

export function formatSalary(salary?: SalaryRange): string {
  if (!salary) return 'Salary not specified';

  const formatNumber = (num: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: salary.currency,
      maximumFractionDigits: 0
    }).format(num);

  return `${formatNumber(salary.min)} - ${formatNumber(salary.max)} ${salary.period.toLowerCase()}`;
}

export function formatJobType(type: JobType): string {
  return type
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

export function formatExperienceLevel(level: ExperienceLevel): string {
  return level
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export const formatEnumToOptions = (enumObj: object) =>
  Object.values(enumObj).map((value) => ({
    value,
    label: value
      .split('_')
      .map((word: string) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ')
  }));

export function generateMockToken(userId: string): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');
  const payload = Buffer.from(JSON.stringify({ sub: userId, iat: Date.now() })).toString('base64');
  const signature = crypto.createHash('sha256').update(`${header}.${payload}`).digest('base64');
  return `${header}.${payload}.${signature}`;
}
