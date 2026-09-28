export type SectionTheme = {
  name: string;
  bg: string;
  bgLight: string;
  border: string;
  accent: string;
  cardBg: string;
  filterActiveBg: string;
  quoteBg: string;
  heroImage: string;
};

export const themes: Record<string, SectionTheme> = {
  internship: {
    name: "internship",
    bg: "#FFF1F3",
    bgLight: "#FFE8EC",
    border: "#E7A6AF",
    accent: "#F48F9B",
    cardBg: "#FFFAFB",
    filterActiveBg: "#FFE0E5",
    quoteBg: "#FFF0F2",
    heroImage: "/images/transparent/internship.png",
  },
  research: {
    name: "research",
    bg: "#EEF5FF",
    bgLight: "#E7F1FF",
    border: "#91BCE8",
    accent: "#64A8E8",
    cardBg: "#F8FBFF",
    filterActiveBg: "#DCEEFF",
    quoteBg: "#EDF5FF",
    heroImage: "/images/transparent/research.png",
  },
  engineering: {
    name: "engineering",
    bg: "#EDFFF4",
    bgLight: "#E5F8EC",
    border: "#86CDA7",
    accent: "#55B985",
    cardBg: "#F8FFFB",
    filterActiveBg: "#D4F5E0",
    quoteBg: "#E8FFF1",
    heroImage: "/images/transparent/engineering.png",
  },
  skills: {
    name: "skills",
    bg: "#FFF8DF",
    bgLight: "#FFF1B8",
    border: "#E9C766",
    accent: "#F0B83F",
    cardBg: "#FFFDF5",
    filterActiveBg: "#FFF3C2",
    quoteBg: "#FFF8E0",
    heroImage: "/images/transparent/skills.png",
  },
  honors: {
    name: "honors",
    bg: "#F5F0FF",
    bgLight: "#EEE6FF",
    border: "#B8A0E8",
    accent: "#9678D4",
    cardBg: "#FAF8FF",
    filterActiveBg: "#E8E0FF",
    quoteBg: "#F2EEFF",
    heroImage: "/images/transparent/honors.png",
  },
  "leveling-up": {
    name: "leveling-up",
    bg: "#EEFAF8",
    bgLight: "#DFF6F2",
    border: "#91CEC4",
    accent: "#57B8A8",
    cardBg: "#F5FCFA",
    filterActiveBg: "#D4F0EC",
    quoteBg: "#E6F7F4",
    heroImage: "/images/transparent/leveling-up.png",
  },
};
