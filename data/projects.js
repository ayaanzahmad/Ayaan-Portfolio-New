export const projects = [
  {
    id: "tech-liquidators",
    slug: "tech-liquidators",
    title: "TechLiquidators Manifest Analyzer",
    subtitle: "ETL + Pricing Intelligence for pallet manifests",
    cover: "/projects/tech-liquidators.png",
    skills: ["Python", "Streamlit", "Pandas", "eBay API", "UPCItemDB"],
    highlights: [
      "IQR-trimmed medians; ROI & recommended max bid",
      "Condition filters, caching, inline overrides"
    ],
    paragraphs: [
      "Ingests TL manifests (CSV/XLSX), enriches UPCs with product specs, and fetches sold comps from eBay to compute robust medians.",
      "Outputs ROI and a recommended max bid per lot, helping flippers avoid overpaying and move inventory faster."
    ],
    links: {
      repo: "https://github.com/ayaanzahmad/tech-liquidators", // UPDATE if needed
      demo: "https://tech.ayaanahmad.org" // optional
    }
  },
  {
    id: "youtube-shorts-pipeline",
    slug: "youtube-shorts-pipeline",
    title: "YouTube Shorts Automation Pipeline",
    subtitle: "Ingest TikToks → clip/format → upload as YT Shorts",
    cover: "/projects/youtube-pipeline.png",
    skills: ["Node.js", "ffmpeg", "Playwright", "YouTube API"],
    highlights: [
      "Headless capture, templated renders, metadata automation",
      "Queue + retries; next: hosted dashboard & webhooks"
    ],
    paragraphs: [
      "Automates pulling short-form content, standardizes aspect/length, and renders with ffmpeg templates.",
      "Handles authentication, rate limits, and posting with smart retries for reliability."
    ],
    links: {
      repo: "https://github.com/ayaanzahmad/youtube-shorts-pipeline", // UPDATE
      demo: "https://shorts.ayaanahmad.org" // optional
    }
  },
  {
    id: "veyra",
    slug: "veyra",
    title: "Veyra — AI Wardrobe & Styling Assistant",
    subtitle: "Closet scan + try-on concepts powered by Computer Vision + LLM suggestions",
    cover: "/projects/veyra.png",
    skills: ["Typescript", "OpenCV", "Next.js", "LLM APIs", "TensorFlow"],
    highlights: [
      "Prototype: item detection, metadata extraction, and outfit graphing",
      "Supports single-item capture and multi-shot ‘closet sweep’ scanning",
      "LLM layer for personalized outfit suggestions and social closet sharing"
    ],
    paragraphs: [
      "Veyra is an AI wardrobe assistant that digitizes a user’s closet through image capture or sweep scanning. Each garment is tagged by category, color, and style attributes using computer vision pipelines built with OpenCV and TensorFlow.",
      "A recommendation engine—powered by fine-tuned LLM prompts—suggests complete outfits, balances weather and occasion contexts, and can even share styles with friends through a social interface.",
      "Built with a modular Next.js frontend and Python-based backend inference layer, Veyra demonstrates scalable AI styling pipelines and the foundation for a future consumer-facing mobile experience."
    ],
    links: {
      repo: "https://github.com/ayaanzahmad/Veyra",   // update if different
      demo: "https://veyra.ayaanahmad.org"           // optional subdomain or video demo
    }
  },
];
