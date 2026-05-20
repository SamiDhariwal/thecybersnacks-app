import {
  certificationTracks,
  type CertificationTrack,
  type CertificationTrackSlug,
} from "@/lib/certificationTracks";
import {
  getCertificationLessonConcepts,
  getCertificationTopicLessons,
  getCertificationTopics,
  type CertificationTopic,
} from "@/lib/certificationTopics";

export type StudioContentStatus = "Active" | "Draft" | "Empty";

export type StudioCertificationDomain = {
  conceptCount: number;
  lessonCount: number;
  publicHref?: string;
  status: StudioContentStatus;
  topic: CertificationTopic;
};

export type StudioCertificationSummary = {
  conceptCount: number;
  domainCount: number;
  domains: StudioCertificationDomain[];
  lessonCount: number;
  status: StudioContentStatus;
  track: CertificationTrack;
};

const tracksWithDomainRoutes = new Set<CertificationTrackSlug>(["sscp"]);

function getStatus(
  domainCount: number,
  lessonCount: number,
  conceptCount: number,
): StudioContentStatus {
  if (domainCount === 0) {
    return "Empty";
  }

  if (lessonCount === 0 || conceptCount === 0) {
    return "Draft";
  }

  return "Active";
}

function getDomainPublicHref(topic: CertificationTopic) {
  if (!tracksWithDomainRoutes.has(topic.trackSlug)) {
    return undefined;
  }

  return `/certifications/${topic.trackSlug}/${topic.slug}`;
}

export function getStudioCertificationSummary(
  track: CertificationTrack,
): StudioCertificationSummary {
  const domains = getCertificationTopics(track.slug).map((topic) => {
    const lessons = getCertificationTopicLessons(topic);
    const conceptCount = lessons.reduce((total, lesson) => {
      return total + getCertificationLessonConcepts(lesson).length;
    }, 0);
    const lessonCount = lessons.length;

    return {
      conceptCount,
      lessonCount,
      publicHref: getDomainPublicHref(topic),
      status: getStatus(1, lessonCount, conceptCount),
      topic,
    };
  });

  const lessonCount = domains.reduce((total, domain) => {
    return total + domain.lessonCount;
  }, 0);
  const conceptCount = domains.reduce((total, domain) => {
    return total + domain.conceptCount;
  }, 0);

  return {
    conceptCount,
    domainCount: domains.length,
    domains,
    lessonCount,
    status: getStatus(domains.length, lessonCount, conceptCount),
    track,
  };
}

export function getStudioCertificationSummaries() {
  return certificationTracks.map((track) => {
    return getStudioCertificationSummary(track);
  });
}

export function getStudioCertificationSummaryBySlug(slug: string) {
  return getStudioCertificationSummaries().find((summary) => {
    return summary.track.slug === slug;
  });
}

export function getStudioContentTotals() {
  const summaries = getStudioCertificationSummaries();

  return {
    certificationCount: summaries.length,
    conceptCount: summaries.reduce((total, summary) => {
      return total + summary.conceptCount;
    }, 0),
    domainCount: summaries.reduce((total, summary) => {
      return total + summary.domainCount;
    }, 0),
    lessonCount: summaries.reduce((total, summary) => {
      return total + summary.lessonCount;
    }, 0),
  };
}
