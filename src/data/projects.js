export const PROJECT_CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];
import luxemarketImage from "../assets/images/luxemarket.png";
import chefWebsiteImage from "../assets/images/chefweb.png";
import hometaste from "../assets/images/hometaste.png";
import ANDY from "../assets/images/ANDY.png";

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
      "Framer Motion",
    ],
    image: chefWebsiteImage,
    liveUrl: "https://chef-websites.netlify.app/",
    githubUrl: "YOUR_GITHUB_REPOSITORY",
    featured: true,
  },
  {
    id: 3,
    title: "HomeTaste Food Ordering App",
    description:
      "A modern food ordering platform that allows customers to browse local meals, place orders, make payments, and arrange convenient food delivery.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    image: hometaste,
    liveUrl: "https://home-taste-kappa.vercel.app/",
    githubUrl: "https://github.com/yourusername/HomeTaste",
    featured: true,
  },
  {
    id: 4,
    title: "Andy’s Watchshop",
    description:
      "A full-stack jewelry e-commerce platform with secure authentication, product management, shopping cart, orders, image uploads, and a PostgreSQL database.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    image: ANDY,
    liveUrl: null,
    githubUrl: "https://github.com/yourusername/andys-watchshop",
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
