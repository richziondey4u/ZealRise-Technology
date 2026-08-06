export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];
import luxemarketImage from "../assets/images/luxemarket.png"
import chefWebsiteImage from "../assets/images/chefweb.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Luxemarket",
    description:
      "A modern full-stack e-commerce platform featuring product browsing, shopping cart, authentication, secure checkout, and an admin dashboard for managing products and orders.",
    category: "Full Stack",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    image: luxemarketImage,
    liveUrl: "https://luxemarket-two.vercel.app/",
    githubUrl: "YOUR_GITHUB_REPOSITORY",
    featured: true,
  },
{
  id: 2,
  title: "Chef Restaurant Website",
  description:
    "A modern and responsive restaurant website designed to showcase signature dishes, chef services, customer testimonials, and an engaging dining experience. Built with a clean UI, smooth animations, and a mobile-first approach to help restaurants attract and convert more customers.",
  category: "Frontend",
  tags: [
    "React",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "Framer Motion"
  ],
  image: chefWebsiteImage,
  liveUrl: "https://chef-websites.netlify.app/",
  githubUrl: "YOUR_GITHUB_REPOSITORY",
  featured: true,
},  
  {
    id: 3,
    title: "Portfolio Landing Page",
    description:
      "A pixel-perfect animated landing page built with a focus on micro-interactions and accessibility.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: null,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/landing-page",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Service",
    description:
      "A scalable REST API with JWT authentication, rate limiting, and full OpenAPI documentation.",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/yourusername/rest-api-service",
    featured: false,
  },
  {
    id: 5,
    title: "Real-Time Chat App",
    description:
      "A WebSocket-powered messaging app supporting group chats, typing indicators, and file sharing.",
    category: "Full Stack",
    tags: ["React", "Socket.io", "Redis", "Node.js"],
    image: null,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/chat-app",
    featured: true,
  },
  {
    id: 6,
    title: "Task Management Tool",
    description:
      "A drag-and-drop kanban board with team collaboration, due dates, and activity tracking.",
    category: "Frontend",
    tags: ["React", "Zustand", "Tailwind CSS"],
    image: null,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: false,
  },
];
