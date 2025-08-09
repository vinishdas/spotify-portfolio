const projectDetails = {
  Work: {
    topic: "intrest",
    title: "Work Experience",
    gradient: "gradient-blue-purple",
    intrestList: ["google", "facebook", "instagram", "microsoft"],
  },
  SideIntrest: {
    topic: "intrest",
    title: "Side Intrests",
    gradient: "gradient-green-blue",
    intrestList: ["Acting", "chess", "philosophy", "Ui/Ux Design"],
  },
 Competition: {
    topic: "intrest",
    title: "Competition participated",
    gradient: "bg-gradient-to-r from-yellow-400 to-purple-600",
    intrestList: ["Hack to future", "TechVision", "Aetherion",],
  },
 Techstack: {
    topic: "intrest",
    title: "Tech Stack ",
    gradient: "bg-gradient-to-r from-yellow-400 to-purple-600",
    intrestList: ["java", "python", "c++","c","javascript","git","postman","mongoDb","sql","react"],
  },
  "portfolio-website": {
    topic: "intrestt",
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills",
    type: "Frontend Project",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    duration: "2 weeks",
    status: "Completed",
    gradient: "gradient-green-blue",
    liveUrl: "spotify-portfolio-q1x2g9rzb-vinishdas-projects.vercel.app",
    githubUrl: "https://github.com/vinishdas/spotify-portfolio.git",
   documentation: {
    overview: "A responsive and modern portfolio website designed to showcase professional projects and technical skills. Built with performance and user experience in mind, featuring smooth animations and an intuitive interface.",
    keyFeatures: [
      "Fully responsive design that works seamlessly across all devices",
      "Dark and light mode toggle for enhanced user experience",
      "Smooth page transitions and micro-animations using Framer Motion",
      "Contact form with email integration",
      "Dynamic blog section for sharing insights",
      "SEO optimized for better search engine visibility",
      "Fast loading times with Next.js optimization"
    ],
    techStack: {
      frontend: "Next.js 14 with TypeScript for type safety",
      styling: "Tailwind CSS for rapid UI development",
      animations: "Framer Motion for smooth interactions",
      deployment: "Vercel for seamless CI/CD"
    },
    challenges: "Implementing complex animations while maintaining performance and ensuring cross-browser compatibility.",
    learnings: "Gained expertise in Next.js app router, advanced Tailwind CSS techniques, and performance optimization strategies.",
    // images: [
    //   {
    //     url: "/images/portfolio-homepage.jpg",
    //     alt: "Portfolio website homepage",
    //     caption: "Clean and modern homepage design"
    //   },
    //   {
    //     url: "/images/portfolio-projects.jpg", 
    //     alt: "Projects showcase section",
    //     caption: "Interactive projects gallery"
    //   },
    //   {
    //     url: "/images/portfolio-mobile.jpg",
    //     alt: "Mobile responsive design",
    //     caption: "Responsive design on mobile devices"
    //   }
    // ]
  }
  },
  "api-doc-ai-tool": {
  topic: "project",
  title: "API Doc AI Tool",
  description: "An AI-powered CLI tool that automatically generates beautiful, professional API documentation for Express.js projects",
  type: "Backend/CLI Tool",
  technologies: ["Node.js", "Express.js", "Hugging Face API", "OpenAI API", "JavaScript", "CLI"],
  duration: "1 month", 
  status: "Completed",
  gradient: "gradient-blue-purple",
  liveUrl: "https://www.npmjs.com/package/api-doc-ai-tool",
  githubUrl: "https://github.com/vinishdas/api-doc-ai-tool",
  documentation: {
    overview: "Instantly generate beautiful, professional API documentation for your Node.js Express projects using the power of AI. This command-line tool dynamically analyzes any Express application, including those with complex nested routers, and uses Large Language Models (LLMs) to generate clear, structured, and human-readable documentation in a single markdown file.",
    keyFeatures: [
      "Fully Automated: Zero manual documentation writing. Just point the tool at your project",
      "AI-Powered Descriptions: Uses AI to analyze your handler code and generate clear descriptions, parameter tables, and request/response examples",
      "Deep Router Analysis: Intelligently traverses your entire Express router stack to find every endpoint, no matter how deeply nested",
      "Smart Environment Loading: Automatically detects and loads .env files from the target project to ensure correct initialization",
      "Beautiful Markdown Output: Generates a clean, professional, and interactive API.md file ready for your GitHub repository or internal documentation portal",
      "Highly Configurable: Easily switch between LLM providers (e.g., OpenAI, Hugging Face) by adapting the LLM service",
      "Global npm installation for single-command execution anywhere on your system"
    ],
    techStack: {
      runtime: "Node.js for cross-platform CLI execution",
      ai: "OpenAI and Hugging Face APIs for intelligent code analysis and documentation generation", 
      analysis: "Dynamic analysis approach to safely load Express applications and map router stacks",
      packaging: "npm global package distribution with robust .env support",
      output: "Structured Markdown generation with parameters and response models"
    },
    challenges: "Implementing dynamic analysis to recursively parse Express router stacks without starting servers, enabling thorough endpoint discovery in nested and middleware-heavy apps while maintaining compatibility across different Express.js project architectures.",
    learnings: "Gained expertise in CLI tool development, dynamic module loading, AST parsing, LLM integration patterns, npm package publishing workflows, and automating code documentation processes to reduce developer onboarding friction.",
    images: [
      {
        url: "/images/api-tool-cli.jpg",
        alt: "API Doc AI Tool command line interface",
        caption: "Simple command execution to generate documentation"
      },
      {
        url: "/images/api-tool-markdown.jpg", 
        alt: "Generated API documentation markdown file",
        caption: "Professional markdown output with structured endpoints"
      },
      {
        url: "/images/api-tool-npm-package.jpg",
        alt: "NPM package page showing installation stats",
        caption: "Published package available globally via npm"
      }
    ]
  }
},
"workforce-management-ai": {
  topic: "project",
  title: "Workforce Management AI Web App",
  description: "An AI-driven platform for skill-aware task allocation, conversational assignment, and automated redistribution with manager-in-the-loop support.",
  type: "AI/Full-Stack Web App",
  technologies: ["Flask", "Node.js", "Python", "Supabase", "Google Gemini API", "Graph Neural Networks", "ML Classifiers", "CSV Ingestion"],
  duration: "Apr 2025",
  status: "Completed",
  gradient: "gradient-green-blue",
  liveUrl: "",
  githubUrl: "",
  documentation: {
    overview: "A workforce management platform that uses Graph Neural Networks and ML classifiers to allocate tasks based on inferred skills and team structure. It integrates Google Gemini for conversational task assignment and manager-in-the-loop decisions, supports leave-management with automatic redistribution, and handles batch onboarding via CSV ingestion. Built on Flask and Node.js with Supabase for real-time storage.",
    keyFeatures: [
      "Skill-aware task allocation using ML-based skill inference and GNN-driven reallocation",
      "90% allocation accuracy across diverse team structures and workloads",
      "Conversational task assignment via Google Gemini with manager-in-the-loop approval",
      "Leave-management workflows with automatic AI-based task redistribution",
      "Batch onboarding through CSV ingestion with validation and error reporting",
      "Real-time updates using Supabase channels and role-based access",
      "Hybrid backend (Flask for ML services, Node.js for orchestration and APIs)"
    ],
    techStack: {
      backend_ml: "Flask (Python) services for GNN inference and classifiers",
      backend_api: "Node.js for API gateway, authentication, and orchestration",
      database: "Supabase (Postgres + Realtime) for storage and event streams",
      ai_services: "Google Gemini API for conversational allocation and summaries",
      ml_models: "Graph Neural Networks for reallocation; classifiers for skill inference",
      ingestion: "CSV ingestion pipeline with schema validation and mappings",
      deployment: "Containerized services; environment-driven configuration"
    },
    challenges: "Designing a reliable GNN-based reallocation loop that adapts to changing team graphs, ensuring data consistency across Flask ML services and Node.js APIs, and creating a safe manager-in-the-loop workflow with clear override/approval states.",
    learnings: "Built robust ML-in-production patterns, event-driven task updates with Supabase, prompt-engineering for Gemini in constrained contexts, and interoperable Python–Node service boundaries.",
    images: [
      {
        url: "/images/workforce-dashboard.jpg",
        alt: "Workforce management dashboard",
        caption: "Dashboard showing team load, skills, and pending approvals"
      },
      {
        url: "/images/task-allocation-flow.jpg",
        alt: "AI task allocation flow",
        caption: "GNN + classifier allocation and reallocation pipeline"
      },
      {
        url: "/images/gemini-chat.jpg",
        alt: "Conversational task assignment",
        caption: "Manager converses with AI to assign tasks with context"
      }
    ]
  }
}
,"version-controlled-text-editor": {
  topic: "project",
  title: "Version-Controlled Text Editor",
  description: "A full-stack text editor with Git-inspired versioning, branching, and chunk-based delta storage for efficient history and fast retrieval.",
  type: "Full-Stack Web App",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express", "JWT", "MongoDB"],
  duration: "May 2025 – Jul 2025",
  status: "Completed",
  gradient: "gradient-purple-blue",
  liveUrl: "",
  githubUrl: "",
  documentation: {
    overview: "Engineered a Git-inspired editor that lets users create, save, branch, and compare document versions. Uses chunk-based delta storage to persist only incremental changes, reducing database usage and accelerating version retrieval. Includes checkpointing, branching workflows, and an interactive diff viewer to highlight chunk-level changes and restore historical states.",
    keyFeatures: [
      "Git-like versioning with branching for parallel drafts and alternative endings",
      "Chunk-based delta storage to save only incremental changes and speed retrieval",
      "Checkpointing for stable version snapshots and quick rollbacks",
      "Interactive diff viewer highlighting chunk-level changes between versions",
      "JWT-secured APIs for authentication and protected operations",
      "Responsive React + Tailwind UI for a smooth editing experience",
      "Optimized MongoDB schema for efficient branching and fast lookups"
    ],
    techStack: {
      frontend: "React with Tailwind CSS for responsive, component-driven UI",
      backend: "Node.js + Express for REST APIs and version management",
      auth: "JWT-based authentication and route protection",
      database: "MongoDB with optimized schema for versions, branches, and metadata",
      storage: "Chunk-based delta storage (Git-like) for efficient history",
      features: "Checkpointing, branching, interactive diff and restore"
    },
    challenges: "Designing a chunking strategy that balances granularity with performance, ensuring consistent diffs and merges across branches, and optimizing MongoDB indexes for fast version retrieval at scale.",
    learnings: "Built robust versioning patterns, implemented efficient delta storage, optimized MongoDB queries and indexes, and refined UX for diff visualization and history navigation.",
    images: [
      {
        url: "/images/editor-main.jpg",
        alt: "Editor main interface",
        caption: "Clean editor UI with version sidebar and actions"
      },
      {
        url: "/images/editor-diff.jpg",
        alt: "Interactive diff viewer",
        caption: "Chunk-level differences highlighted between versions"
      },
      {
        url: "/images/editor-branches.jpg",
        alt: "Branching and checkpoints",
        caption: "Parallel branches and checkpoint management"
      }
    ]
  }
},
"das-promotion-home-nursing": {
  topic: "project",
  title: "Das Promotion Home Nursing – Frontend",
  description: "A fast, SEO-optimized marketing site for a home nursing business with responsive, accessible pages for services, training, and success stories.",
  type: "Frontend Project",
  technologies: ["Next.js", "Tailwind CSS"],
  duration: "2025",
  status: "Completed",
  gradient: "gradient-green-blue",
  liveUrl: "https://das-promotion-web.vercel.app/",
  githubUrl: "https://github.com/vinishdas/dasPromotionWeb",
  documentation: {
    overview: "A production-ready frontend for Das Promotion Home Nursing, built with Next.js for fast routing and rendering, and Tailwind CSS for clean, responsive UI. The site is fully SEO-optimized and mobile-friendly, with accessible design and clear informational pages about services, training, and success stories.",
    keyFeatures: [
      "Fast rendering and routing with Next.js",
      "Tailwind CSS for clean, responsive layouts",
      "Fully SEO-optimized metadata and structure",
      "Mobile-friendly and accessible components",
      "Informational pages for services, training, and success stories"
    ],
    techStack: {
      framework: "Next.js for routing, rendering, and deployment readiness",
      styling: "Tailwind CSS utility-first styling for rapid UI development",
      seo: "Semantic HTML, meta tags, sitemap/robots readiness"
    },
    challenges: "Balancing clean design with strong SEO and accessibility, while ensuring fast load times across mobile devices.",
    learnings: "Refined Next.js routing and metadata handling, responsive design patterns with Tailwind, and practical SEO/accessibility techniques for business sites.",
    images: [
      {
        url: "/images/das-promotion-home.jpg",
        alt: "Homepage",
        caption: "Clean homepage highlighting services and brand"
      },
      {
        url: "/images/das-promotion-services.jpg",
        alt: "Services page",
        caption: "Service details with responsive sections"
      },
      {
        url: "/images/das-promotion-mobile.jpg",
        alt: "Mobile view",
        caption: "Mobile-friendly and accessible layout"
      }
    ]
  }
}



};

export default projectDetails;