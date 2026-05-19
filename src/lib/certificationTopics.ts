import type { CertificationTrackSlug } from "@/lib/certificationTracks";

export type CertificationTopicContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bulletList";
      intro?: string;
      items: string[];
    }
  | {
      type: "quote";
      intro: string;
      text: string;
    }
  | {
      type: "subsection";
      title: string;
      blocks: CertificationTopicContentBlock[];
    };

export type CertificationTopicConcept = {
  order: number;
  title: string;
  slug: string;
  summary: string;
  badge?: string;
  blocks: CertificationTopicContentBlock[];
  scenario?: CertificationTopicContentBlock[];
  memoryTip?: string;
};

export type CertificationTopic = {
  trackSlug: CertificationTrackSlug;
  topicNumber: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  concepts: CertificationTopicConcept[];
  metadata: {
    title: string;
    description: string;
  };
};

export const certificationTopics: CertificationTopic[] = [
  {
    trackSlug: "sscp",
    topicNumber: 1,
    slug: "security-concepts-and-practices",
    title: "Security Concepts and Practices",
    subtitle:
      "Security fundamentals, CIA triad, governance, frameworks, and core access principles.",
    category: "SSCP Domain 1",
    readTime: "10 min read",
    concepts: [
      {
        order: 1,
        title: "Security Fundamentals",
        slug: "security-fundamentals",
        summary:
          "Basic ideas used to protect systems, devices, networks, and information.",
        badge: "Core Concept",
        blocks: [
          {
            type: "paragraph",
            text: "Security fundamentals are the basic ideas used to protect systems, devices, networks, and information from damage, theft, misuse, or unauthorized access.",
          },
          {
            type: "bulletList",
            intro: "The main goal of security is:",
            items: [
              "Keep information safe",
              "Make sure systems work properly",
              "Prevent attackers from causing harm",
            ],
          },
          {
            type: "bulletList",
            intro:
              "In cybersecurity, security is not just about stopping hackers. It is also about:",
            items: [
              "Reducing mistakes",
              "Following rules",
              "Protecting business operations",
              "Preparing for problems before they happen",
            ],
          },
        ],
        scenario: [
          {
            type: "bulletList",
            intro: "A hospital protects patient records by:",
            items: [
              "Requiring staff logins",
              "Backing up files daily",
              "Blocking unknown USB devices",
              "Training employees against phishing emails",
            ],
          },
          {
            type: "paragraph",
            text: "All of these together are part of security fundamentals.",
          },
        ],
      },
      {
        order: 2,
        title: "Confidentiality",
        slug: "confidentiality",
        summary:
          "Keeping information private so only authorized people can see it.",
        badge: "CIA Triad",
        blocks: [
          {
            type: "paragraph",
            text: "Confidentiality means keeping information private so only authorized people can see it.",
          },
          {
            type: "quote",
            intro: "The focus is:",
            text: "“Who is allowed to view this information?”",
          },
          {
            type: "bulletList",
            intro: "Ways confidentiality is protected:",
            items: [
              "Passwords",
              "Encryption",
              "Access control",
              "Locked rooms",
              "MFA",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "An employee salary spreadsheet should only be accessible by HR staff.",
          },
          {
            type: "paragraph",
            text: "If another employee opens it without permission, confidentiality has been broken.",
          },
        ],
        memoryTip: "Confidentiality = “Keep secrets secret.”",
      },
      {
        order: 3,
        title: "Integrity",
        slug: "integrity",
        summary:
          "Keeping information correct, accurate, and unchanged unless authorized.",
        badge: "CIA Triad",
        blocks: [
          {
            type: "paragraph",
            text: "Integrity means information stays correct, accurate, and unchanged unless an authorized person changes it.",
          },
          {
            type: "quote",
            intro: "The focus is:",
            text: "“Can we trust this information?”",
          },
          {
            type: "bulletList",
            intro: "Integrity protects against:",
            items: [
              "Unauthorized changes",
              "Accidental changes",
              "Corrupted data",
            ],
          },
          {
            type: "bulletList",
            intro: "Ways integrity is protected:",
            items: ["Hashing", "Permissions", "Version control", "Audit logs"],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "A hacker changes a bank account number in a payment system.",
          },
          {
            type: "paragraph",
            text: "The information is no longer accurate.",
          },
          {
            type: "paragraph",
            text: "Integrity has been lost.",
          },
        ],
        memoryTip: "Integrity = “Information stays correct.”",
      },
      {
        order: 4,
        title: "Availability",
        slug: "availability",
        summary: "Making sure systems and information are accessible when needed.",
        badge: "CIA Triad",
        blocks: [
          {
            type: "paragraph",
            text: "Availability means systems and information are accessible when needed.",
          },
          {
            type: "quote",
            intro: "The focus is:",
            text: "“Can users access the system when they need it?”",
          },
          {
            type: "bulletList",
            intro: "Availability problems can happen because of:",
            items: [
              "Power failures",
              "Hardware failures",
              "Ransomware",
              "DDoS attacks",
              "Accidental deletion",
            ],
          },
          {
            type: "bulletList",
            intro: "Ways availability is protected:",
            items: [
              "Backups",
              "Redundant systems",
              "UPS power supplies",
              "Disaster recovery plans",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "An online shopping website crashes during Black Friday sales.",
          },
          {
            type: "paragraph",
            text: "Customers cannot place orders.",
          },
          {
            type: "paragraph",
            text: "Availability has been affected.",
          },
        ],
        memoryTip: "Availability = “Systems are ready to use.”",
      },
      {
        order: 5,
        title: "CIA Triad Applications",
        slug: "cia-triad-applications",
        summary:
          "Applying confidentiality, integrity, and availability to real systems.",
        badge: "CIA Triad",
        blocks: [
          {
            type: "paragraph",
            text: "The CIA Triad is one of the most important ideas in cybersecurity.",
          },
          {
            type: "bulletList",
            intro: "It has 3 parts:",
            items: ["Confidentiality", "Integrity", "Availability"],
          },
          {
            type: "paragraph",
            text: "Security decisions are often based on balancing these three things.",
          },
          {
            type: "subsection",
            title: "Example 1 — Banking System",
            blocks: [
              {
                type: "subsection",
                title: "Confidentiality",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Only customers and bank staff can view account details.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Integrity",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Money transfers must be accurate.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Availability",
                blocks: [
                  {
                    type: "paragraph",
                    text: "ATMs and online banking should work 24/7.",
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            title: "Example 2 — Hospital System",
            blocks: [
              {
                type: "subsection",
                title: "Confidentiality",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Patient records stay private.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Integrity",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Medical records must not be changed incorrectly.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Availability",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Doctors must access records during emergencies.",
                  },
                ],
              },
            ],
          },
          {
            type: "subsection",
            title: "Example 3 — School Website",
            blocks: [
              {
                type: "subsection",
                title: "Confidentiality",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Student grades are private.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Integrity",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Grades should not be altered.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Availability",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Students should access the portal during exams.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        order: 6,
        title: "Due Care",
        slug: "due-care",
        summary:
          "Taking reasonable steps to protect systems and information.",
        badge: "Governance",
        blocks: [
          {
            type: "paragraph",
            text: "Due care means taking reasonable steps to protect systems and information.",
          },
          {
            type: "quote",
            intro: "It means:",
            text: "“Doing what a responsible organization should do.”",
          },
          {
            type: "bulletList",
            intro: "An organization shows due care by:",
            items: [
              "Creating security policies",
              "Installing antivirus",
              "Training employees",
              "Updating systems",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "A company installs MFA because passwords alone are risky.",
          },
          {
            type: "paragraph",
            text: "This is due care because they are taking reasonable protection steps.",
          },
        ],
        memoryTip: "Due care = “Taking action to stay safe.”",
      },
      {
        order: 7,
        title: "Due Diligence",
        slug: "due-diligence",
        summary: "Investigating and checking risks before making decisions.",
        badge: "Governance",
        blocks: [
          {
            type: "paragraph",
            text: "Due diligence means investigating and checking risks before making decisions.",
          },
          {
            type: "quote",
            intro: "It means:",
            text: "“Researching carefully before acting.”",
          },
          {
            type: "bulletList",
            intro: "Organizations use due diligence when:",
            items: [
              "Assessing vendors",
              "Reviewing risks",
              "Performing audits",
              "Testing systems",
            ],
          },
        ],
        scenario: [
          {
            type: "bulletList",
            intro: "Before buying a cloud service, a company checks:",
            items: [
              "Security certifications",
              "Data protection methods",
              "Previous security incidents",
            ],
          },
          {
            type: "paragraph",
            text: "This is due diligence.",
          },
        ],
        memoryTip: "Due diligence = “Checking carefully first.”",
      },
      {
        order: 8,
        title: "Difference Between Due Care and Due Diligence",
        slug: "due-care-vs-due-diligence",
        summary:
          "Separating security action from risk investigation and research.",
        badge: "Governance",
        blocks: [
          {
            type: "subsection",
            title: "Due Care:",
            blocks: [
              {
                type: "bulletList",
                items: [
                  "Taking security actions",
                  "Protecting systems",
                  "“Doing”",
                ],
              },
            ],
          },
          {
            type: "subsection",
            title: "Due Diligence:",
            blocks: [
              {
                type: "bulletList",
                items: [
                  "Investigating risks",
                  "Researching before decisions",
                  "“Checking”",
                ],
              },
            ],
          },
          {
            type: "subsection",
            title: "Simple Example",
            blocks: [
              {
                type: "paragraph",
                text: "Due diligence = researching a security company before hiring them.",
              },
              {
                type: "paragraph",
                text: "Due care = actually using the security company properly afterward.",
              },
            ],
          },
        ],
      },
      {
        order: 9,
        title: "Security Governance",
        slug: "security-governance",
        summary: "How an organization manages and controls cybersecurity.",
        badge: "Governance",
        blocks: [
          {
            type: "paragraph",
            text: "Security governance means how an organization manages and controls cybersecurity.",
          },
          {
            type: "bulletList",
            intro: "It includes:",
            items: [
              "Rules",
              "Policies",
              "Responsibilities",
              "Decision making",
              "Risk management",
            ],
          },
          {
            type: "paragraph",
            text: "Governance ensures security supports business goals.",
          },
          {
            type: "paragraph",
            text: "Senior management is usually responsible for governance.",
          },
        ],
        scenario: [
          {
            type: "bulletList",
            intro: "A company creates:",
            items: [
              "Password policies",
              "Incident response plans",
              "Employee security training rules",
            ],
          },
          {
            type: "paragraph",
            text: "This is part of security governance.",
          },
        ],
        memoryTip: "Governance = “How security is managed.”",
      },
      {
        order: 10,
        title: "Security Objectives",
        slug: "security-objectives",
        summary:
          "The goals an organization wants to achieve through security.",
        badge: "Governance",
        blocks: [
          {
            type: "paragraph",
            text: "Security objectives are the goals an organization wants to achieve through security.",
          },
          {
            type: "bulletList",
            intro: "Common objectives:",
            items: [
              "Protect information",
              "Reduce risk",
              "Prevent attacks",
              "Follow laws and regulations",
              "Keep business running",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "A hospital’s security objective may be:",
          },
          {
            type: "paragraph",
            text: "“Protect patient data and ensure systems remain available during emergencies.”",
          },
        ],
      },
      {
        order: 11,
        title: "Security Frameworks",
        slug: "security-frameworks",
        summary:
          "Organized sets of security best practices and guidelines.",
        badge: "Frameworks",
        blocks: [
          {
            type: "paragraph",
            text: "Security frameworks are organized sets of security best practices and guidelines.",
          },
          {
            type: "bulletList",
            intro: "They help organizations:",
            items: [
              "Improve security",
              "Follow standards",
              "Reduce risks",
              "Build security programs",
            ],
          },
          {
            type: "paragraph",
            text: "Frameworks provide structure.",
          },
          {
            type: "bulletList",
            intro: "Common examples:",
            items: [
              "ISO 27001",
              "NIST Cybersecurity Framework",
              "Essential Eight",
            ],
          },
          {
            type: "paragraph",
            text: "You do NOT need to memorize deep details for SSCP. Just understand their purpose.",
          },
        ],
        scenario: [
          {
            type: "bulletList",
            intro: "A company follows a framework to improve:",
            items: [
              "Password security",
              "Backups",
              "Incident response",
              "Employee training",
            ],
          },
        ],
      },
      {
        order: 12,
        title: "Security Architecture Concepts",
        slug: "security-architecture-concepts",
        summary: "Designing systems securely from the beginning.",
        badge: "Architecture",
        blocks: [
          {
            type: "paragraph",
            text: "Security architecture means designing systems securely from the beginning.",
          },
          {
            type: "bulletList",
            intro: "It focuses on:",
            items: [
              "Planning security properly",
              "Building secure systems",
              "Reducing weaknesses",
            ],
          },
          {
            type: "bulletList",
            intro: "Good security architecture includes:",
            items: [
              "Firewalls",
              "Network separation",
              "Secure authentication",
              "Layered security",
            ],
          },
        ],
        scenario: [
          {
            type: "bulletList",
            intro: "A company separates:",
            items: ["Guest Wi-Fi", "Employee network", "Server network"],
          },
          {
            type: "paragraph",
            text: "This reduces damage if one network is attacked.",
          },
        ],
      },
      {
        order: 13,
        title: "Defense in Depth",
        slug: "defense-in-depth",
        summary:
          "Using multiple layers of security instead of relying on one control.",
        badge: "Architecture",
        blocks: [
          {
            type: "paragraph",
            text: "Defense in depth means using multiple layers of security instead of relying on only one protection method.",
          },
          {
            type: "quote",
            intro: "The idea is:",
            text: "“If one security control fails, another still protects the system.”",
          },
          {
            type: "bulletList",
            intro: "Examples of layers:",
            items: [
              "Firewall",
              "Antivirus",
              "MFA",
              "Security awareness training",
              "Access controls",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "A phishing email bypasses spam filtering.",
          },
          {
            type: "bulletList",
            intro: "But:",
            items: [
              "MFA blocks attacker login",
              "Endpoint protection blocks malware",
            ],
          },
          {
            type: "paragraph",
            text: "The attack is stopped because multiple layers exist.",
          },
        ],
        memoryTip: "Defense in depth = “Multiple security walls.”",
      },
      {
        order: 14,
        title: "Least Privilege",
        slug: "least-privilege",
        summary:
          "Giving users only the minimum access needed to do their job.",
        badge: "Access Control",
        blocks: [
          {
            type: "paragraph",
            text: "Least privilege means users should only have the minimum access needed to do their job.",
          },
          {
            type: "paragraph",
            text: "They should not receive extra permissions.",
          },
          {
            type: "bulletList",
            intro: "This reduces:",
            items: [
              "Accidental mistakes",
              "Insider threats",
              "Damage from hacked accounts",
            ],
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "A receptionist only needs access to appointment systems.",
          },
          {
            type: "paragraph",
            text: "They should NOT have access to payroll or server settings.",
          },
        ],
        memoryTip: "Least privilege = “Only enough access to work.”",
      },
      {
        order: 15,
        title: "Need to Know",
        slug: "need-to-know",
        summary:
          "Limiting information access to what a user needs for specific tasks.",
        badge: "Access Control",
        blocks: [
          {
            type: "paragraph",
            text: "Need to know means users should only access information required for their specific tasks.",
          },
          {
            type: "paragraph",
            text: "Even if someone has clearance, they should only access necessary information.",
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "An HR employee may access salary information.",
          },
          {
            type: "paragraph",
            text: "But they do not need access to cybersecurity investigation reports.",
          },
        ],
        memoryTip: "Need to know = “Only access what is necessary.”",
      },
      {
        order: 16,
        title: "Separation of Duties",
        slug: "separation-of-duties",
        summary:
          "Splitting important tasks between different people to reduce risk.",
        badge: "Access Control",
        blocks: [
          {
            type: "paragraph",
            text: "Separation of duties means splitting important tasks between different people.",
          },
          {
            type: "bulletList",
            intro: "This prevents:",
            items: ["Fraud", "Mistakes", "Abuse of power"],
          },
          {
            type: "paragraph",
            text: "No single person should control everything.",
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "One employee creates vendor payments.",
          },
          {
            type: "paragraph",
            text: "Another employee approves them.",
          },
          {
            type: "paragraph",
            text: "This reduces fraud risk.",
          },
        ],
        memoryTip: "Separation of duties = “No one person controls everything.”",
      },
      {
        order: 17,
        title: "Job Rotation",
        slug: "job-rotation",
        summary:
          "Regularly switching responsibilities to reveal issues and reduce dependency.",
        badge: "Access Control",
        blocks: [
          {
            type: "paragraph",
            text: "Job rotation means employees regularly switch responsibilities or roles.",
          },
          {
            type: "bulletList",
            intro: "This helps:",
            items: [
              "Detect fraud",
              "Reduce dependency on one person",
              "Improve employee knowledge",
            ],
          },
          {
            type: "paragraph",
            text: "It can reveal hidden problems because another person reviews the work.",
          },
        ],
        scenario: [
          {
            type: "paragraph",
            text: "An employee handling financial records changes roles temporarily.",
          },
          {
            type: "paragraph",
            text: "The replacement discovers unusual unauthorized changes.",
          },
          {
            type: "paragraph",
            text: "Fraud is uncovered because of job rotation.",
          },
        ],
        memoryTip:
          "Job rotation = “Different people regularly handle the work.”",
      },
    ],
    metadata: {
      title:
        "SSCP Topic 1: Security Concepts and Practices | The Cyber Snacks",
      description:
        "Beginner-friendly SSCP Domain 1 study topic covering security fundamentals, CIA triad, governance, frameworks, architecture, and access principles.",
    },
  },
];

export function getCertificationTopics(trackSlug: CertificationTrackSlug) {
  return certificationTopics
    .filter((topic) => topic.trackSlug === trackSlug)
    .sort((firstTopic, secondTopic) => {
      return firstTopic.topicNumber - secondTopic.topicNumber;
    });
}

export function getCertificationTopic(
  trackSlug: CertificationTrackSlug,
  slug: string,
) {
  return getCertificationTopics(trackSlug).find((topic) => {
    return topic.slug === slug;
  });
}

export function getCertificationTopicConcepts(topic: CertificationTopic) {
  return [...topic.concepts].sort((firstConcept, secondConcept) => {
    return firstConcept.order - secondConcept.order;
  });
}

export function getCertificationTopicConcept(
  trackSlug: CertificationTrackSlug,
  topicSlug: string,
  conceptSlug: string,
) {
  const topic = getCertificationTopic(trackSlug, topicSlug);

  if (!topic) {
    return undefined;
  }

  return getCertificationTopicConcepts(topic).find((concept) => {
    return concept.slug === conceptSlug;
  });
}
