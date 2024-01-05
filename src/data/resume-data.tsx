import {
  CinchLogo,
  MotivePartnersLogo,
  VictorianPlumbingLogo,
  AoLogo,
  UnaMoneyLogo,
  LickrLogo,
  PiggyBankLogo,
  ImLearningLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Elliot Wood",
  initials: "EW",
  location: "Manchester, England, BST",
  locationLink: "https://www.google.com/maps/place/Manchester",
  about:
    "Frontend Web3 Engineer focused on building products that help onboard web2 users into web3.",
  summary:
    "As a Frontend Engineer, I have successfully taken multiple products from 0 to 1. I love mentoring and ensuring that my team is in an environment where people can do their best work. Currently, I work mostly with TypeScript, React and React Native. I have over 5 years of experience in working remotely with teams around the world.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQE6LXa8CQFFJA/profile-displayphoto-shrink_800_800/0/1642697396277?e=1709769600&v=beta&t=sBP6U-vGpkn2ZhxHvjdstOV58U7-EgyQDBoFf5sjGmo",
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
      school: "Buildspace",
      degree: "Nights & Weekends S2",
      start: "2022",
      end: "2023",
    },
    {
      school: "BCS, The Chartered Institute for IT",
      degree: "Level 4 Software Development",
      start: "2020",
      end: "2020",
    },
  ],
  awards: [
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
      title: "Frontend Engineer, Digital Assets",
      logo: MotivePartnersLogo,
      start: "Jul 2022",
      end: "Present",
      description:
        "Primarily working on Volta, an app which enables financial institutions to seamlessly connect and interact with cryptocurrency exchanges, FX services and blockchain wallet custodians. Technologies: React Native, TypeScript, React, Next.js, AWS",
    },
    {
      company: "Cinch",
      link: "https://www.cinch.co.uk/",
      badges: ["Remote"],
      title: "Frontend Developer",
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
    "Accessibility",
  ],
  projects: [
    {
      title: "Una Money",
      techStack: [
        "Side Project",
        "TypeScript",
        "React Native",
        "Ethers.js",
        "Solidity",
      ],
      description: "A web3 savings account for web2 users",
      logo: UnaMoneyLogo,
      link: {
        label: "una.money",
        href: "https://www.una.money/",
      },
    },
    {
      title: "Lickr",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "GraphQL",
        "Ethers.js",
        "MetaMask",
      ],
      description:
        "An app that allows a user to view all Gelato Network ‘ice cream’ tasks",
      logo: LickrLogo,
      link: {
        label: "gelato-ice-cream.vercel.app",
        href: "https://gelato-ice-cream.vercel.app",
      },
    },
    {
      title: "PiggyBank Vault",
      techStack: ["Side Project", "React", "Wagmi", "Solidity", "Tailwind"],
      description: "Deposit ETH or WETH in return for yummy 'HAM' tokens",
      logo: PiggyBankLogo,
      link: {
        label: "piggybankvault.vercel.app",
        href: "https://piggybankvault.vercel.app",
      },
    },
    {
      title: "Web3 Roadmap",
      techStack: ["Side Project", "React", "AWS"],
      description: "A web3 roadmap covering high level topics and concepts",
      logo: ImLearningLogo,
      link: {
        label: "imlearning.com",
        href: "https://imlearning.com/roadmap/web3",
      },
    },
  ],
} as const;
