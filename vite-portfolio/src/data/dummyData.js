// Dummy data for portfolio projects
import githubLogo from "../assets/GitHubWhite.png";
import xLogo from "../assets/X-white.png";
import linkedinLogo from "../assets/LinkedinWhite.png";
import instagramLogo from "../assets/InstagramWhite.png";

export const projectsData = [
  {
    id: 1,
    title: "Canberra vs South Sydney",
    description:
      "An interactive comparison platform showcasing the key differences between two Australian cities. Built with React and Vite for optimal performance.",
    image: "/project1.jpg",
    tags: ["Design System", "React", "UI/UX"],
    category: "Side project",
    link: "/project/1",
  },
  {
    id: 2,
    title: "What today's home buyer wants from their home",
    description:
      "A comprehensive research and design project exploring modern home buyer preferences. Features interactive data visualization and user research insights.",
    image: "/project2.jpg",
    tags: ["Interior Design", "Research", "UX Design"],
    category: "Side project",
    link: "/project/2",
  },
  {
    id: 3,
    title: "Qantas map search",
    description:
      "A product design case study for an innovative map-based search interface. Improves user experience for finding flights and destinations.",
    image: "/project3.jpg",
    tags: ["Product Design", "User Testing", "Figma"],
    category: "Product design",
    link: "/project/3",
  },
  {
    id: 4,
    title: "E-commerce Platform Redesign",
    description:
      "Complete redesign of a leading e-commerce platform focusing on conversion optimization and user experience improvements.",
    image: "/project4.jpg",
    tags: ["E-commerce", "Web Design", "Prototyping"],
    category: "Product design",
    link: "/project/4",
  },
  {
    id: 5,
    title: "Mobile App UI Kit",
    description:
      "A comprehensive design system and UI kit for mobile applications with 200+ components and design tokens.",
    image: "/project5.jpg",
    tags: ["Design System", "Mobile", "Components"],
    category: "Design System",
    link: "/project/5",
  },
  {
    id: 6,
    title: "Brand Identity Project",
    description:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    image: "/project6.jpg",
    tags: ["Branding", "Logo Design", "Guidelines"],
    category: "Branding",
    link: "/project/6",
  },
];

// Dummy data for skills
export const skillsData = {
  design: [
    "UI/UX Design",
    "Figma",
    "Adobe XD",
    "Prototyping",
    "Wireframing",
    "User Research",
    "Design Systems",
    "Responsive Design",
  ],
  development: [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Vite",
    "Git",
    "Web Design",
    "Frontend Development",
    "Angular",
  ],
  tools: [
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "Jira",
    "Visual Studio Code",
    "Blender3D"
  ],
};

// Dummy data for about section
export const aboutData = {
  name: "Wely D. Putra",
  title: "UI/UX Designer & Frontend Developer",
  bio: "I'm a passionate designer and developer with 5+ years of experience creating beautiful, user-centered digital experiences. I specialize in bridging the gap between design and development.",
  location: "Oregon, United States",
  email: "welydharmaputra93@gmail.com",
  phone: "+1 971-406-7578",
  shortBio: "Crafting beautiful interfaces and meaningful digital experiences",
  experience: "5+ years in Design & Development",
};

// Dummy data for testimonials
export const testimonialsData = [
  {
    id: 1,
    name: "John Smith",
    role: "Product Manager",
    company: "Tech Company",
    content:
      "Wely is an exceptional designer who truly understands user needs. Their work transformed our product.",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    company: "Creative Agency",
    content:
      "Working with Wely was a game-changer. Their attention to detail and design thinking is outstanding.",
    image: "/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Design Lead",
    company: "Digital Studio",
    content:
      "One of the best designers I've worked with. Highly recommend for any design project.",
    image: "/testimonial3.jpg",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Design Lead",
    company: "Digital Studio",
    content:
      "One of the best designers I've worked with. Highly recommend for any design project.",
    image: "/testimonial3.jpg",
  },
];

// Dummy data for social links
export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://linkedin.com/in/welydputra",
    icon: "linkedin",
    logo: linkedinLogo,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/welydharmaputra",
    icon: "github",
    logo: githubLogo,
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/welydputra_23/",
    icon: "instagram",
    logo: instagramLogo,
  },
];

// Dummy data for contact form
export const contactData = {
  email: "welydharmaputra93@gmail.com",
  phone: "+1 971-406-7578",
  address: "Corvallis, Oregon, United States",
  businessHours: "Monday - Friday, 9AM - 6PM",
};

// Dummy data for blog/articles
export const articlesData = [
  {
    id: 1,
    title: "The Future of UI Design in 2026",
    excerpt:
      "Exploring emerging trends in UI design and what they mean for designers and users.",
    date: "Feb 3, 2026",
    category: "Design Trends",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Master Figma Prototyping",
    excerpt:
      "A comprehensive guide to creating interactive prototypes in Figma.",
    date: "Jan 28, 2026",
    category: "Tutorial",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "User Research Best Practices",
    excerpt:
      "Essential techniques for conducting effective user research and gathering insights.",
    date: "Jan 15, 2026",
    category: "Research",
    readTime: "6 min read",
  },
];
