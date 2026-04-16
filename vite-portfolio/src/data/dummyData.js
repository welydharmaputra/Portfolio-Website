// Dummy data for portfolio projects
import githubLogo from "../assets/GitHubWhite.png";
import xLogo from "../assets/X-white.png";
import linkedinLogo from "../assets/LinkedinWhite.png";
import instagramLogo from "../assets/InstagramWhite.png";
import hatchingXStipplingImage from "../assets/HatchingXStippling/HatchingXStippling.png";
import hatchingCompositingImage from "../assets/HatchingXStippling/Nodes/CompositingNodes/HatchingXStipplingNodes1.png";
import hatchingLayoutImage1 from "../assets/HatchingXStippling/Nodes/LayoutNodes/HatchingXStipplingNodes2.png";
import hatchingLayoutImage2 from "../assets/HatchingXStippling/Nodes/LayoutNodes/HatchingXStipplingNodes3.png";
import hatchingLayoutImage3 from "../assets/HatchingXStippling/Nodes/LayoutNodes/HatchingXStipplingNodes4.png";
import hatchingLayoutImage4 from "../assets/HatchingXStippling/Nodes/LayoutNodes/HatchingXStipplingNodes5.png";
import nprCirclesImage from "../assets/NPR/NPR1/Circles.png";
import nprCirclesCompositingImage from "../assets/NPR/NPR1/Nodes/CompositingNodes/CirclesCompositingNodes.png";
import nprCirclesLayoutImage1 from "../assets/NPR/NPR1/Nodes/LayoutNodes/CirclesNodesBoxLayout.png";
import nprCirclesLayoutImage2 from "../assets/NPR/NPR1/Nodes/LayoutNodes/CirclesNodesGroundLayout.png";
import nprCirclesLayoutImage3 from "../assets/NPR/NPR1/Nodes/LayoutNodes/CirclesNodeSphereLayout.png";
import nprPaperWorldImage from "../assets/NPR/NPR2/PaperWorld.png";
import nprPaperWorldCompositingImage from "../assets/NPR/NPR2/CompositingNodes/PaperWorldCompositingNodes.png";
import nprPaperWorldLayoutImage1 from "../assets/NPR/NPR2/LayoutNodes/AppleBranchLayoutNodes.png";
import nprPaperWorldLayoutImage2 from "../assets/NPR/NPR2/LayoutNodes/AppleLayoutNodes.png";
import nprPaperWorldLayoutImage3 from "../assets/NPR/NPR2/LayoutNodes/GroundLayoutNodes.png";
import nprPaperWorldLayoutImage4 from "../assets/NPR/NPR2/LayoutNodes/MugLayoutNodes.png";
import nprToonWorldImage from "../assets/NPR/NPR3/ToonWorld.png";
import nprToonWorldCompositingImage from "../assets/NPR/NPR3/CompositingNodes/ToonWorldCompositingNodes.png";
import nprToonWorldLayoutImage1 from "../assets/NPR/NPR3/LayoutNodes/DonutLayoutNodes.png";
import nprToonWorldLayoutImage2 from "../assets/NPR/NPR3/LayoutNodes/GroundLayoutNodes.png";
import nprToonWorldLayoutImage3 from "../assets/NPR/NPR3/LayoutNodes/MugLayoutNodes.png";
import painterlyImage from "../assets/Painterly/Painterly.png";
import painterlyNodeImage from "../assets/Painterly/Node/PainterlyNode.png";
import cornelBoxImage1 from "../assets/Animation/Cornel Box 1.png";
import cornelBoxImage2 from "../assets/Animation/Cornel Box 2.png";
import cornelBoxImage3 from "../assets/Animation/Cornel Box 3.png";
import cornelBoxImage4 from "../assets/Animation/Cornel Box 4.png";
import cornelBoxImage5 from "../assets/Animation/Cornel Box 5.png";
import cornelBoxImage6 from "../assets/Animation/Cornel Box 6.png";
import cornelBoxImage7 from "../assets/Animation/Cornel Box 7.png";
import cornelBoxImage8 from "../assets/Animation/Cornel Box 8.png";
import binusImage1 from "../assets/Binus Website First Phase (Internship)/Binus1.png";
import binusImage2 from "../assets/Binus Website First Phase (Internship)/Binus2.png";
import binusImage3 from "../assets/Binus Website First Phase (Internship)/Binus3.png";
import binusImage4 from "../assets/Binus Website First Phase (Internship)/Binus4.png";
import binusImage5 from "../assets/Binus Website First Phase (Internship)/Binus5.png";
import binusImage6 from "../assets/Binus Website First Phase (Internship)/Binus6.png";

export const projectsData = [
  {
    id: 1,
    title: "BINUS Website (First Phase Internship)",
    description:
      "A website project completed during internship, focused on layout structure, responsive behavior, and production-ready interface delivery.",
    image: binusImage1,
    gallery: [
      binusImage1,
      binusImage2,
      binusImage3,
      binusImage4,
      binusImage5,
      binusImage6,
    ],
    videoUrl: "https://youtu.be/qM5Q3RtvZOc",
    tags: ["JavaScript", "React", "Website","Prototyping","HTML/CSS","Frontend Development","GitHub"],
    category: "Internship Project",
    link: "/project/5",
  },
  {
    id: 2,
    title: "HatchingXStippling",
    description:
      "A non-photorealistic rendering exploration focused on hatching and stippling style development, including compositing and layout node studies.",
    image: hatchingXStipplingImage,
    gallery: [
      hatchingXStipplingImage,
      hatchingCompositingImage,
      hatchingLayoutImage1,
      hatchingLayoutImage2,
      hatchingLayoutImage3,
      hatchingLayoutImage4,
    ],
    tags: ["Blender3D", "NPR", "Compositing"],
    category: "3D Rendering",
    link: "/project/1",
  },
  {
    id: 3,
    title: "NPR",
    description:
      "A grouped showcase of NPR scene outputs and node setups across Circles, PaperWorld, and ToonWorld workflows.",
    image: nprCirclesImage,
    gallery: [
      nprCirclesImage,
      nprCirclesCompositingImage,
      nprCirclesLayoutImage1,
      nprCirclesLayoutImage2,
      nprCirclesLayoutImage3,
      nprPaperWorldImage,
      nprPaperWorldCompositingImage,
      nprPaperWorldLayoutImage1,
      nprPaperWorldLayoutImage2,
      nprPaperWorldLayoutImage3,
      nprPaperWorldLayoutImage4,
      nprToonWorldImage,
      nprToonWorldCompositingImage,
      nprToonWorldLayoutImage1,
      nprToonWorldLayoutImage2,
      nprToonWorldLayoutImage3,
    ],
    tags: ["Blender3D", "NPR", "Shader"],
    category: "3D Rendering",
    link: "/project/2",
  },
  {
    id: 4,
    title: "Painterly",
    description:
      "A painterly rendering experiment using node-driven stylization to create hand-painted visual character.",
    image: painterlyImage,
    gallery: [painterlyImage, painterlyNodeImage],
    tags: ["Blender3D", "Painterly", "NPR"],
    category: "3D Rendering",
    link: "/project/3",
  },
  {
    id: 5,
    title: "Cornel Box Animation",
    description:
      "A Blender lighting and animation study based on a Cornel Box setup, showcasing material response, shadows, and camera framing.",
    image: cornelBoxImage1,
    gallery: [
      cornelBoxImage1,
      cornelBoxImage2,
      cornelBoxImage3,
      cornelBoxImage4,
      cornelBoxImage5,
      cornelBoxImage6,
      cornelBoxImage7,
      cornelBoxImage8,
    ],
    videoUrl: "https://youtu.be/pqJpAHZMF_Q?si=1x5a778qmx4E9S-Q",
    tags: ["Blender3D", "Animation", "Lighting"],
    category: "3D Animation",
    link: "/project/4",
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
    "Blender3D",
    "GitHub",
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
