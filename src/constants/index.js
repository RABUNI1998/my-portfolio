const servicesList = [
  {
    title: "Web Development (React, Next.js)",
    icon: "⚛️",
  },
  {
    title: "Mobile Development (Flutter)",
    icon: "📱",
  },
  {
    title: "AI-Powered Solutions",
    icon: "🤖",
  },
  {
    title: "Backend & Databases (Firebase, PostgreSQL)",
    icon: "🗃️",
  },
  {
    title: "Excel & PowerPoint Automation",
    icon: "📊",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
  },
];

export { servicesList };

// src/constants/index.js

// ... other constants

export const myApps = [
  {
    id: "app-barber",
    name: "RB Barber Web App",
    description:
      "A modern web application for a barbershop, allowing clients to view services, check availability, and book appointments online with ease.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    platform: "web",
    image: "/apps/rbbarber.jpg", // Your screenshot in public/apps/
    gallery: [
      "/apps/rbbarber.jpg",
      "/apps/rbbarber-2.jpg", // Placeholder: Add more screenshots
      "/apps/rbbarber-3.jpg", // Placeholder: Add more screenshots
    ],
    live_demo_link: "https://rbbarber.netlify.app/",
    source_code_link: "https://github.com/your-github/rb-barber-repo", // Optional: Add your GitHub repo link
    version: "1.0.0",
    size: "Web App",
    featured: true,
    testimonials: [
      {
        quote: "This app transformed how we manage our appointments. Our clients absolutely love the seamless booking experience!",
        author: "John D., Owner of The Classic Cut",
      }
    ]
  },
  {
    id: "app-player",
    name: "RBplayer Audio Player",
    description:
      "A sleek and lightweight audio player for Android, built with Flutter. Enjoy your favorite music with a clean interface and essential playback controls.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "dart", color: "pink-text-gradient" },
      { name: "android", color: "green-text-gradient" },
    ],
    platform: "mobile",
    image: "/apps/rbplayer.jpg", // Your screenshot in public/apps/
    gallery: [
      "/apps/rbplayer.jpg",
      "/apps/rbplayer-2.jpg", // Placeholder: Add more screenshots
    ],
    download_link: "/apks/rbplayer.apk", // Your APK file in public/apks/
    version: "1.0.0",
    size: "15 MB", // Update with your actual APK size
    testimonials: [
      {
        quote: "Finally, a music player that is simple, fast, and looks great. It's my new daily driver for listening to music.",
        author: "Sarah K., Music Enthusiast",
      }
    ]
  },
  // {
  //   id: "app-3",
  //   name: "Markdown Editor",
  //   description:
  //     "A sleek and powerful desktop markdown editor built with Electron, featuring real-time preview and syntax highlighting.",
  //   tags: [
  //     { name: "electron", color: "blue-text-gradient" },
  //     { name: "javascript", color: "green-text-gradient" },
  //     { name: "css", color: "pink-text-gradient" },
  //   ],
  //   platform: "desktop",
  //   image: "/apps/markdown-editor.jpg",
  //   source_code_link: "https://github.com/your-github/markdown-editor",
  //   download_link: "https://github.com/your-github/markdown-editor/releases",
  //   version: "2.1.0",
  //   size: "80 MB",
  // },
  // ... Add more apps here
];

export const testimonials = [
  {
    id: 1,
    author: "Sarah K.",
    quote: "Working with RB-TECH was a game-changer. The final product exceeded all our expectations!",
  },
  {
    id: 2,
    author: "John D.",
    quote: "The level of professionalism and skill is unmatched. Our mobile app is a huge success thanks to their work.",
  },
  {
    id: 3,
    author: "Emily R.",
    quote: "I was impressed by the attention to detail and the creative solutions provided throughout the project.",
  },
  {
    id: 4,
    author: "Michael B.",
    quote: "RB-TECH delivered an outstanding web solution that perfectly met our complex requirements. Highly recommended!",
  },
  // Add more testimonials here. The animation works best with at least 3.
];
