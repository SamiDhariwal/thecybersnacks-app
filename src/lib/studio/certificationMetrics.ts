import {
  certificationTracks,
  type CertificationTrack,
  type CertificationTrackSlug,
} from "@/lib/certificationTracks";
import {
  getCertificationLessonConcepts,
  getCertificationTopicLessons,
  getCertificationTopics,
  type CertificationTopicConcept,
  type CertificationTopicLesson,
  type CertificationTopic,
} from "@/lib/certificationTopics";
import type { ContentBlock, ContentBlockType } from "@/lib/studio/contentTypes";

export type StudioContentStatus = "Active" | "Draft" | "Empty";

export type StudioCertificationDomain = {
  conceptCount: number;
  lessonCount: number;
  publicHref?: string;
  status: StudioContentStatus;
  studioHref: string;
  topic: CertificationTopic;
};

export type StudioLessonSummary = {
  conceptCount: number;
  lesson: CertificationTopicLesson;
  status: StudioContentStatus;
  studioHref: string;
};

export type StudioConceptSummary = {
  blockCount: number;
  concept: CertificationTopicConcept;
  status: StudioContentStatus;
  studioHref: string;
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

export function getStudioCertificationHref(trackSlug: string) {
  return `/studio/certifications/${trackSlug}`;
}

export function getStudioDomainHref(trackSlug: string, domainSlug: string) {
  return `${getStudioCertificationHref(trackSlug)}/domains/${domainSlug}`;
}

export function getStudioLessonHref(
  trackSlug: string,
  domainSlug: string,
  lessonSlug: string,
) {
  return `${getStudioDomainHref(trackSlug, domainSlug)}/lessons/${lessonSlug}`;
}

export function getStudioConceptHref(
  trackSlug: string,
  domainSlug: string,
  lessonSlug: string,
  conceptSlug: string,
) {
  return `${getStudioLessonHref(
    trackSlug,
    domainSlug,
    lessonSlug,
  )}/concepts/${conceptSlug}`;
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
      studioHref: getStudioDomainHref(track.slug, topic.slug),
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

export function getStudioDomainSummary(trackSlug: string, domainSlug: string) {
  const certification = getStudioCertificationSummaryBySlug(trackSlug);

  if (!certification) {
    return undefined;
  }

  const domain = certification.domains.find((currentDomain) => {
    return currentDomain.topic.slug === domainSlug;
  });

  if (!domain) {
    return undefined;
  }

  const lessons = getCertificationTopicLessons(domain.topic).map((lesson) => {
    const conceptCount = getCertificationLessonConcepts(lesson).length;

    return {
      conceptCount,
      lesson,
      status: getStatus(1, 1, conceptCount),
      studioHref: getStudioLessonHref(trackSlug, domainSlug, lesson.slug),
    };
  });

  return {
    certification,
    domain,
    lessons,
  };
}

export function getStudioLessonSummary(
  trackSlug: string,
  domainSlug: string,
  lessonSlug: string,
) {
  const domainSummary = getStudioDomainSummary(trackSlug, domainSlug);

  if (!domainSummary) {
    return undefined;
  }

  const lessonSummary = domainSummary.lessons.find((currentLesson) => {
    return currentLesson.lesson.slug === lessonSlug;
  });

  if (!lessonSummary) {
    return undefined;
  }

  const concepts = getCertificationLessonConcepts(lessonSummary.lesson).map(
    (concept) => {
      const blockCount = getStudioConceptContentBlocks(concept).length;

      return {
        blockCount,
        concept,
        status: getStatus(1, 1, blockCount),
        studioHref: getStudioConceptHref(
          trackSlug,
          domainSlug,
          lessonSlug,
          concept.slug,
        ),
      };
    },
  );

  return {
    ...domainSummary,
    concepts,
    lesson: lessonSummary,
  };
}

export function getStudioConceptSummary(
  trackSlug: string,
  domainSlug: string,
  lessonSlug: string,
  conceptSlug: string,
) {
  const lessonSummary = getStudioLessonSummary(
    trackSlug,
    domainSlug,
    lessonSlug,
  );

  if (!lessonSummary) {
    return undefined;
  }

  const conceptSummary = lessonSummary.concepts.find((currentConcept) => {
    return currentConcept.concept.slug === conceptSlug;
  });

  if (!conceptSummary) {
    return undefined;
  }

  return {
    ...lessonSummary,
    blocks: getStudioConceptContentBlocks(conceptSummary.concept),
    concept: conceptSummary,
  };
}

function blockTitle(
  blockType: CertificationTopicConcept["blocks"][number]["type"],
  index: number,
) {
  if (blockType === "paragraph" && index === 0) {
    return "Definition";
  }

  return "Key points";
}

export function getStudioConceptContentBlocks(
  concept: CertificationTopicConcept,
): ContentBlock[] {
  const textBlocks: ContentBlock[] = concept.blocks.map((block, index) => {
    const type: ContentBlockType =
      block.type === "quote" ? "Focus Block" : "Text Block";

    return {
      conceptId: concept.slug,
      id: `${concept.slug}-block-${index + 1}`,
      order: index + 1,
      title: blockTitle(block.type, index),
      type,
    };
  });

  const scenarioBlocks = concept.scenario
    ? [
        {
          conceptId: concept.slug,
          id: `${concept.slug}-scenario`,
          order: textBlocks.length + 1,
          title: "Scenario example",
          type: "Scenario Example" as const,
        },
      ]
    : [];

  const studyTipBlocks = concept.memoryTip
    ? [
        {
          conceptId: concept.slug,
          id: `${concept.slug}-study-tip`,
          order: textBlocks.length + scenarioBlocks.length + 1,
          title: "Study tip",
          type: "Study Tip" as const,
        },
      ]
    : [];

  return [...textBlocks, ...scenarioBlocks, ...studyTipBlocks];
}
