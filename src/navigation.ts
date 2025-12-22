import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Web Design', href: getPermalink('/services#web-design') },
        { text: 'Full Stack Development', href: getPermalink('/services#development') },
        { text: 'ERP Implementation', href: getPermalink('/services#erp') },
        { text: 'ERP Consulting', href: getPermalink('/services#consulting') },
        { text: 'Data Science', href: getPermalink('/services#data-science') },
        { text: 'Integration & APIs', href: getPermalink('/services#apis') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/charissystems' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/charissystems' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/charissystems' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Charis Systems. All rights reserved.
  `,
};
