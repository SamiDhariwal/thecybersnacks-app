import { snackArticles } from "@/lib/snackArticles";

export type CertificationTrackSlug = "sscp" | "cism" | "cissp";

export type CertificationTrack = {
  slug: CertificationTrackSlug;
  name: string;
  certification: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const certificationTracks: CertificationTrack[] = [
  {
    slug: "sscp",
    name: "SSCP",
    certification: "Systems Security Certified Practitioner",
    description:
      "Operational security foundations for access control, endpoint habits, and practical defensive judgement.",
    metadata: {
      title: "SSCP Certification Track | The Cyber Snacks",
      description:
        "A focused SSCP certification track with practical Cyber Snacks on access control, endpoint security, and defensive habits.",
    },
  },
  {
    slug: "cism",
    name: "CISM",
    certification: "Certified Information Security Manager",
    description:
      "Governance, risk, and management-focused Snacks for translating security decisions into business context.",
    metadata: {
      title: "CISM Certification Track | The Cyber Snacks",
      description:
        "A static CISM certification track for governance, risk, and security management Cyber Snacks.",
    },
  },
  {
    slug: "cissp",
    name: "CISSP",
    certification: "Certified Information Systems Security Professional",
    description:
      "Broad security principles for identity, architecture, and resilient decision-making across domains.",
    metadata: {
      title: "CISSP Certification Track | The Cyber Snacks",
      description:
        "A focused CISSP certification track with Cyber Snacks on security principles, identity, architecture, and risk-aware decisions.",
    },
  },
];

export function getCertificationTrack(slug: string) {
  return certificationTracks.find((track) => track.slug === slug);
}

export function getRequiredCertificationTrack(slug: CertificationTrackSlug) {
  const track = getCertificationTrack(slug);

  if (!track) {
    throw new Error(`Unknown certification track: ${slug}`);
  }

  return track;
}

export function getSnackArticlesForCertificationTrack(
  slug: CertificationTrackSlug,
) {
  return snackArticles.filter((article) =>
    article.certificationTrackSlugs.includes(slug),
  );
}
