import { RadianceCardProps } from "./radiance-card";

type RadianceCardItems = Record<string, RadianceCardProps[]>

export const data: RadianceCardItems = {
  "DeFi": [
    { imageUrl: 'intro-defi', title: "INTRO TO DEFI", description: "How can capital can be utilized for passive income?", link: "/defi" },
    { imageUrl: 'advanced-defi', title: "ADVANCED DEFI", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'tokenomics', title: "TOKENOMICS", description: "How can capital can be utilized for passive income?", link: "/def" },
  ],
  "Strategies": [
    { imageUrl: 'automated-trading', title: "AUTOMATED TRADING", description: "How can capital can be utilized for passive income?", link: "/defi" },
    { imageUrl: 'swap-strategies', title: "SWAP STRATEGIES", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'lending-strategies', title: "LENDING STRATEGIES", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'lowcap-strategies', title: "LOW CAP STRATEGIES", description: "How can capital can be utilized for passive income?", link: "/defi" },
    { imageUrl: 'derivatives-strategies', title: "DERIVATIVES STRATEGIES", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'yield-strategies', title: "YIELD STRATEGIES", description: "How can capital can be utilized for passive income?", link: "/def" },
  ],
  "Web 3.0": [
    { imageUrl: 'web3-ecosystem', title: "WEB 3.0 ECOSYSTEM", description: "How can capital can be utilized for passive income?", link: "/defi" },
    { imageUrl: 'earn-protocols', title: "EARN FROM PROTOCOLS", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'governance', title: "GOVERNANCE", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'web3-marketing', title: "WEB 3.0 MARKETING", description: "How can capital can be utilized for passive income?", link: "/defi" },
    { imageUrl: 'protocol-design', title: "PROTOCOL DESIGN", description: "How can capital can be utilized for passive income?", link: "/def" },
    { imageUrl: 'product', title: "PRODUCT", description: "How can capital can be utilized for passive income?", link: "/def" },
  ],
};