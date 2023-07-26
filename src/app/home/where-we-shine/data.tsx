import { WWSCardProps } from "./wws-card";


export const data: WWSCardProps[] = [
  {
    imageUrl: 'business-logic',
    title: 'SENSITIVE DEFI BUSINESS LOGIC',
    body: 'The core smart contract functionality, call data, deployment and management of that code to govern serious protocol operations.',
    learnMoreList: ['3 Traits of Senior Blockchain Engineers'],
    button: {
      label: 'Engineer It',
      link: '/services'
    },
    delay: 0
  },
  {
    imageUrl: 'middleware-infra',
    title: 'MIDDLEWARE + INFRASTRUCTURE',
    body: 'The backbone that drives powerful applications, deriving from event tracking, database design, devops scripts, opsec, and serverless code.',
    learnMoreList: ['The Ultimate Guide to Building a DeFi Infrastructure.', 'The Web 3.0 Middleware Vendors Map'],
    button: {
      label: 'Scale Up',
      link: '/services'
    },
    delay: 150
  },
  {
    imageUrl: 'defi-archi',
    title: 'DEFI ARCHITECTURE',
    body: 'Mastery over designing and implementing any solution, with PRDs, technical PM, and technical team audits.',
    learnMoreList: ['A Senior Blockchain Architect’s Framework for Modular Web 3.0 Protocols'],
    button: {
      label: 'Build It',
      link: '/services'
    },
    delay: 300
  },
]