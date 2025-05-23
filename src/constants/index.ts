import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '@/types';

export const SECTION_PADDING = 'py-16 md:py-24';
export const CONTAINER_PADDING = 'px-4 md:px-6';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Mail,
    title: 'Email',
    url: 'mailto:abisht129@gmail.com',
    username: 'abisht129@gmail.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/theashishbisht',
    username: 'theashishbisht'
  },
  {
    icon: Github,
    title: 'GitHub',
    url: 'https://github.com/theashishbisht',
    username: 'theashishbisht'
  }
];

export const EDUCATION_ITEMS = [
  {
    title: "Bachelor's in Mechanical Engineering",
    institution: "Silver Oak College of Engineering & Technology",
    year: "2020"
  },
  {
    title: "12th Grade",
    institution: "Kendriya Vidyalaya Sangathan (KVS)",
    year: "2016"
  },
  {
    title: "Big Data Course",
    institution: "Currently pursuing",
    year: "Present"
  }
]; 