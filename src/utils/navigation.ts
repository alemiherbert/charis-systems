// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Solutions", url: "/solutions" },
  { name: "Methodology", url: "/methodology" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "Home", url: "/" },
      { name: "Solutions", url: "/solutions" },
      { name: "Methodology", url: "/methodology" },
      { name: "Contact", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};