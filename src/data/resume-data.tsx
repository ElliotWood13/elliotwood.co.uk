import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  AoLogo,
  CinchLogo,
  ImLearningLogo,
  MotivePartnersLogo,
  PiggyBankLogo,
  RicciLogo,
  VictorianPlumbingLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Elliot Wood",
  initials: "EW",
  location: "Manchester, England, BST",
  locationLink: "https://www.google.com/maps/place/Manchester",
  about: "Senior Frontend Engineer skilled in building dynamic applications.",
  summary:
    "As a Senior Frontend Engineer, I have successfully taken multiple products from 0 to 1. I love mentoring and ensuring that my team is in an environment where people can do their best work. Currently, I work mostly with TypeScript, React and JavaScript. I have over 5 years of experience in working remotely with teams around the world.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "elliotreecewood@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ElliotWood13",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/elliotwood/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/woodelliot",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Encode Club",
      degree: "Solidity Foundation",
      start: "2023",
      end: "2023",
    },
    {
      school: "BCS, The Chartered Institute for IT",
      degree: "Level 4 Diploma Software Development",
      start: "2020",
      end: "2020",
    },
  ],
  awards: [
    {
      name: "Best Use Of BlockScout Block Explorer Pool Prize Winner",
      event: "ETHGlobal Brussels",
      year: "2024",
    },
    {
      name: "Mantle Pool Prize Winner",
      event: "ETHGlobal Paris",
      year: "2023",
    },
  ],
  work: [
    {
      company: "Motive Partners",
      link: "https://www.motivepartners.com/",
      badges: ["Remote"],
      title: "Frontend Engineer → Senior Frontend Engineer",
      logo: MotivePartnersLogo,
      start: "Jul 2022",
      end: "Present",
      description:
        "Worked across multiple fintech products in diverse teams across different time zones, contributing to the success of projects for some of the world`s largest financial institutions including banks with over 71 million customers. Technologies: React Native, TypeScript, React, Next.js, AWS",
    },
    {
      company: "Cinch",
      link: "https://www.cinch.co.uk/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: CinchLogo,
      start: "Jul 2021",
      end: "Jul 2022",
      description:
        "Working within the Checkout domain, I was responsible for ensuring 300,000 orders could be successfully completed per year. Technologies: React, Typescript, AWS, Node.js",
    },
    {
      company: "Victorian Plumbing",
      link: "https://www.victorianplumbing.co.uk/",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      logo: VictorianPlumbingLogo,
      start: "Nov 2020",
      end: "Jul 2021",
      description:
        "Started rebuilding the ecommerce site from scratch by creating reusable, accessible components. Technologies: React",
    },
    {
      company: "AO.com",
      link: "https://ao.com/",
      badges: [],
      title: "Junior Frontend Developer → Frontend Developer",
      logo: AoLogo,
      start: "Jan 2019",
      end: "Nov 2020",
      description:
        "Enabling users by delivering self-serve features to the My Account section of the website. Technologies: React",
    },
  ],
  skills: [
    "TypeScript",
    "React Native",
    "React",
    "Next.js",
    "Ethers.js",
    "Wagmi",
    "JavaScript",
    "GraphQL",
    "AWS",
    "React Query",
    "Tailwind",
    "GraphQL",
    "Accessibility",
    "Semantic HTML",
  ],
  projects: [
    {
      title: "Paw - Cat Insurance",
      techStack: ["Flutter"],
      description:
        "A POC for how an existing pet insurance company could improve user experience and boost conversion",
      logo: "",
      link: {
        label: "pawcatinsurance",
        href: "https://paw-video.vercel.app/",
      },
    },
    {
      title: "Ricci Tennis",
      techStack: ["Side Project", "Shopify, Canva"],
      description:
        "A tennis clothing brand passion project leveraging advanced design tools for AI generation and logo creation",
      logo: RicciLogo,
      link: {
        label: "riccitennis",
        href: "https://www.riccitennis.com/",
      },
    },
    {
      title: "imlearning",
      techStack: ["Side Project", "React", "Typescript", "AWS"],
      description:
        "A platform designed to help individuals enter the tech industry as developers",
      logo: ImLearningLogo,
      link: {
        label: "imlearning.com",
        href: "https://imlearning.com",
      },
    },
    {
      title: "VerifyScout",
      techStack: ["Hackathon Project", "TypeScript", "React", "Next.js"],
      description:
        "A dashboard for monitoring and verifying smart contracts. Blockscout prize winner at ETHGlobal Brussels hackathon",
      logo: "",
      link: {
        label: "verifyscount",
        href: "https://verifyscout.vercel.app/",
      },
    },
    {
      title: "PiggyBank Vault",
      techStack: ["Side Project", "React", "Wagmi", "Solidity", "Tailwind"],
      description:
        "A web3 vault allowing users to deposit ETH or WETH in return for `HAM` tokens. Mantle prize winner at ETHGlobal Paris hackathon",
      logo: PiggyBankLogo,
      link: {
        label: "piggybankvault",
        href: "https://piggybankvault.vercel.app",
      },
    },
  ],
} as const;
