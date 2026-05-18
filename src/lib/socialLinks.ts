export const contactLinks = {
  youtube: {
    label: "YouTube",
    handle: "@TheCyberSnacks",
    href: "https://www.youtube.com/@TheCyberSnacks",
  },
  github: {
    label: "GitHub",
    handle: "SamiDhariwal",
    href: "https://github.com/SamiDhariwal",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "Sami Ullah Dhariwal",
    href: "https://www.linkedin.com/in/sami-ullah-dhariwal/",
  },
} as const;

export const socialLinks = [
  contactLinks.youtube,
  contactLinks.github,
  contactLinks.linkedin,
] as const;
