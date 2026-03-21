import { TeamMember, Service, CaseStudy, BlogPost, Testimonial } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Chaitanya Bagul',
    role: 'CEO & Founder',
    bio: 'With over 15 years in tech leadership, Chaitanya drives innovation and strategic growth at Digiexpres.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'CTO',
    bio: 'Marcus leads our technical vision and AI initiatives with expertise in machine learning and cloud architecture.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Head of Development',
    bio: 'Elena manages our development teams and ensures delivery of high-quality software solutions.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '4',
    name: 'David Park',
    role: 'AI Solutions Architect',
    bio: 'David specializes in implementing AI solutions that transform business operations and drive growth.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'IT Consultation',
    description: 'Strategic IT planning and digital transformation guidance for your business growth.',
    icon: 'Users',
    features: ['Digital Strategy', 'Technology Assessment', 'Cost Optimization', 'Risk Management'],
  },
  {
    id: '2',
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: 'Code',
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
  },
  {
    id: '3',
    title: 'Web Development',
    description: 'Responsive, high-performance websites that convert visitors into customers.',
    icon: 'Globe',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
  },
  {
    id: '4',
    title: 'AI/ML Integration',
    description: 'Harness the power of artificial intelligence to automate and optimize your operations.',
    icon: 'Brain',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    id: '5',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets and data.',
    icon: 'Shield',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
  },
  {
    id: '6',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    icon: 'Cloud',
    features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Monitoring'],
  },
  {
    id: '7',
    title: 'Digital Marketing 360°',
    description: 'Complete digital marketing ecosystem to amplify your brand presence and drive measurable growth across all channels.',
    icon: 'TrendingUp',
    features: ['SEO & SEM Optimization', 'Social Media Marketing', 'Content Strategy & Creation', 'Email Marketing Automation', 'PPC Campaign Management', 'Analytics & Performance Tracking', 'Brand Identity & Design', 'Conversion Rate Optimization'],
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Platform Transformation',
    client: 'RetailCorp',
    description: 'Complete digital transformation of a traditional retail business with AI-powered recommendations.',
    challenge: 'Legacy system limitations and poor customer experience',
    solution: 'Modern e-commerce platform with AI recommendations and analytics',
    results: ['300% increase in online sales', '45% improvement in customer satisfaction', '60% reduction in cart abandonment'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
    timeline: '6 months'
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    client: 'MedTech Solutions',
    description: 'HIPAA-compliant healthcare management system with AI-powered patient insights.',
    challenge: 'Manual processes and data silos affecting patient care',
    solution: 'Integrated healthcare platform with AI diagnostics and workflow automation',
    results: ['50% reduction in administrative time', '25% improvement in patient outcomes', '99.9% system uptime'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Django', 'PostgreSQL', 'TensorFlow'],
    timeline: '8 months'
  },
  {
    id: '3',
    title: 'Manufacturing Optimization',
    client: 'IndustrialTech',
    description: 'IoT and AI-powered manufacturing optimization system for predictive maintenance.',
    challenge: 'Unexpected equipment failures and inefficient production processes',
    solution: 'IoT sensors with AI-powered predictive analytics and automated alerts',
    results: ['40% reduction in downtime', '25% increase in production efficiency', '$2M annual savings'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'IoT', 'Machine Learning', 'Azure'],
    timeline: '12 months'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business: Trends to Watch in 2025',
    excerpt: 'Explore the latest AI trends that will reshape business operations and customer experiences in the coming year.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Marcus Chen',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI & Machine Learning',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Essential security measures every small business should implement to protect against cyber threats.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Elena Rodriguez',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cybersecurity',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Cloud Migration: A Complete Guide for Modern Businesses',
    excerpt: 'Step-by-step guide to successfully migrating your business to the cloud with minimal downtime.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'David Park',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cloud Solutions',
    readTime: '10 min read'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ankit Gupta',
    company: 'INDCOIL Transformer Pvt. Ltd.',
    role: 'CEO',
    content: 'Digiexpres designed and developed a website for us that is both visually appealing and user-friendly. Their communication was excellent throughout. Very happy with the outcome!',
    image: '/Untitled design (56).png',
    rating: 5
  },
  {
    id: '2',
    name: 'Mahesh Vandre',
    company: 'Real Estate Business',
    role: 'CTO',
    content: 'I have good experience there team is very good communication and professional.. they make my business growth 10x.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Priya Patel',
    company: 'GrowthCorp',
    role: 'Operations Director',
    content: 'i have a good experience from digiexpres tech solution i am making software for my medical billing',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5
  }
];