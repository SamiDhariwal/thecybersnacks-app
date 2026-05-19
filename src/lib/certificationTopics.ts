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
      type: "table";
      headers: string[];
      rows: string[][];
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

export type CertificationTopicLesson = {
  order: number;
  title: string;
  slug: string;
  summary: string;
  badge?: string;
  blocks: CertificationTopicContentBlock[];
  scenario?: CertificationTopicContentBlock[];
  concepts: CertificationTopicConcept[];
};

export type CertificationTopic = {
  trackSlug: CertificationTrackSlug;
  topicNumber: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  lessons: CertificationTopicLesson[];
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
    lessons: [
      {
        order: 1,
        title: "Security Fundamentals",
        slug: "security-fundamentals",
        summary:
          "Basic ideas used to protect systems, devices, networks, and information.",
        badge: "Core Lesson",
        blocks: [],
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
      },
      {
        order: 2,
        title: "Risk Management",
        slug: "risk-management",
        summary: "Finding, understanding, and reducing security risks.",
        badge: "Risk Management",
        blocks: [],
        concepts: [
          {
            order: 1,
            title: "Risk Management",
            slug: "risk-management",
            summary: "Finding, understanding, and reducing security risks.",
            badge: "Risk Management",
            blocks: [
              {
                type: "paragraph",
                text: "Risk management is the process of finding, understanding, and reducing security risks.",
              },
              {
                type: "quote",
                intro: "The goal is:",
                text: "“Protect the organization from problems before serious damage happens.”",
              },
              {
                type: "bulletList",
                intro: "Risk management helps organizations:",
                items: [
                  "Prevent attacks",
                  "Reduce financial loss",
                  "Protect systems and data",
                  "Make smart security decisions",
                ],
              },
              {
                type: "bulletList",
                intro: "Basic risk management steps:",
                items: [
                  "Identify risks",
                  "Analyze risks",
                  "Decide what to do about risks",
                  "Monitor risks over time",
                ],
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company realizes employees are clicking phishing emails often.",
              },
              {
                type: "bulletList",
                intro: "The company:",
                items: [
                  "Identifies the risk",
                  "Analyzes how serious it is",
                  "Provides security training",
                  "Enables MFA",
                ],
              },
              {
                type: "paragraph",
                text: "This is risk management.",
              },
            ],
          },
          {
            order: 2,
            title: "Risk Assessment",
            slug: "risk-assessment",
            summary:
              "Identifying possible threats and understanding their impact.",
            badge: "Risk Management",
            blocks: [
              {
                type: "paragraph",
                text: "Risk assessment is the process of identifying possible threats and understanding how they could affect the organization.",
              },
              {
                type: "bulletList",
                intro: "It answers:",
                items: [
                  "What can go wrong?",
                  "How likely is it?",
                  "What damage could happen?",
                ],
              },
              {
                type: "paragraph",
                text: "Risk assessments help organizations prioritize security efforts.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A hospital checks:",
                items: [
                  "What happens if ransomware hits?",
                  "Which systems are most important?",
                  "How much downtime can they handle?",
                ],
              },
              {
                type: "paragraph",
                text: "This is a risk assessment.",
              },
            ],
            memoryTip: "Risk assessment = “Finding and understanding risks.”",
          },
          {
            order: 3,
            title: "Risk Analysis",
            slug: "risk-analysis",
            summary: "Studying risks to determine seriousness and likelihood.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "bulletList",
                intro: "Risk analysis means studying identified risks to determine:",
                items: [
                  "How serious they are",
                  "How likely they are to happen",
                  "What impact they could cause",
                ],
              },
              {
                type: "paragraph",
                text: "Organizations use risk analysis to decide which risks need urgent attention.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company discovers:",
                items: [
                  "Phishing emails happen frequently",
                  "Employees sometimes click them",
                  "Financial loss could be very high",
                ],
              },
              {
                type: "paragraph",
                text: "The company decides phishing is a high-risk issue.",
              },
            ],
            memoryTip: "Risk analysis = “How bad could this risk become?”",
          },
          {
            order: 4,
            title: "Risk Treatment",
            slug: "risk-treatment",
            summary: "Deciding what to do about a risk.",
            badge: "Risk Treatment",
            blocks: [
              {
                type: "paragraph",
                text: "Risk treatment means deciding what to do about a risk.",
              },
              {
                type: "bulletList",
                intro: "Organizations usually choose one of these:",
                items: [
                  "Accept the risk",
                  "Avoid the risk",
                  "Transfer the risk",
                  "Mitigate the risk",
                ],
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company identifies ransomware risk and decides to:",
                items: [
                  "Improve backups",
                  "Use endpoint protection",
                  "Train employees",
                ],
              },
              {
                type: "paragraph",
                text: "This is risk treatment.",
              },
            ],
            memoryTip: "Risk treatment = “Choosing how to handle risk.”",
          },
          {
            order: 5,
            title: "Risk Acceptance",
            slug: "risk-acceptance",
            summary: "Knowingly living with a risk.",
            badge: "Risk Treatment",
            blocks: [
              {
                type: "paragraph",
                text: "Risk acceptance means deciding to live with the risk because reducing it would cost too much or the risk is considered small.",
              },
              {
                type: "paragraph",
                text: "The organization knowingly accepts the possible consequences.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A small business decides not to buy an expensive backup internet connection because occasional downtime is acceptable.",
              },
              {
                type: "paragraph",
                text: "They accept the risk.",
              },
            ],
            memoryTip: "Risk acceptance = “We know the risk and accept it.”",
          },
          {
            order: 6,
            title: "Risk Avoidance",
            slug: "risk-avoidance",
            summary: "Removing the activity that creates the risk.",
            badge: "Risk Treatment",
            blocks: [
              {
                type: "paragraph",
                text: "Risk avoidance means removing the activity that creates the risk.",
              },
              {
                type: "paragraph",
                text: "This completely avoids the risk exposure.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company stops allowing employees to use personal USB devices because malware infections keep happening.",
              },
              {
                type: "paragraph",
                text: "The risky activity is removed.",
              },
            ],
            memoryTip: "Risk avoidance = “Avoid the risky activity completely.”",
          },
          {
            order: 7,
            title: "Risk Transfer",
            slug: "risk-transfer",
            summary: "Shifting financial impact to another party.",
            badge: "Risk Treatment",
            blocks: [
              {
                type: "paragraph",
                text: "Risk transfer means shifting the financial impact of a risk to another party.",
              },
              {
                type: "paragraph",
                text: "This does NOT remove the risk itself.",
              },
              {
                type: "bulletList",
                intro: "Common methods:",
                items: ["Insurance", "Outsourcing", "Contracts"],
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company buys cyber insurance to help cover ransomware recovery costs.",
              },
              {
                type: "paragraph",
                text: "The financial risk is transferred to the insurance company.",
              },
            ],
            memoryTip:
              "Risk transfer = “Someone else handles the financial damage.”",
          },
          {
            order: 8,
            title: "Risk Mitigation",
            slug: "risk-mitigation",
            summary: "Reducing the likelihood or impact of a risk.",
            badge: "Risk Treatment",
            blocks: [
              {
                type: "paragraph",
                text: "Risk mitigation means reducing the likelihood or impact of a risk.",
              },
              {
                type: "paragraph",
                text: "The risk still exists, but it becomes less dangerous.",
              },
              {
                type: "bulletList",
                intro: "Common mitigation controls:",
                items: [
                  "Firewalls",
                  "MFA",
                  "Backups",
                  "Security training",
                  "Antivirus",
                ],
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company enables MFA to reduce the risk of stolen passwords being used by attackers.",
              },
              {
                type: "paragraph",
                text: "The risk is reduced, not removed completely.",
              },
            ],
            memoryTip: "Risk mitigation = “Reduce the risk.”",
          },
          {
            order: 9,
            title: "Residual Risk",
            slug: "residual-risk",
            summary: "Risk remaining after security controls are applied.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "paragraph",
                text: "Residual risk is the remaining risk after security controls have been applied.",
              },
              {
                type: "paragraph",
                text: "No security system removes all risk completely.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company:",
                items: [
                  "Installs antivirus",
                  "Uses MFA",
                  "Trains employees",
                ],
              },
              {
                type: "paragraph",
                text: "But phishing attacks are still possible.",
              },
              {
                type: "paragraph",
                text: "The remaining risk is residual risk.",
              },
            ],
            memoryTip: "Residual risk = “Risk left over after protection.”",
          },
          {
            order: 10,
            title: "Inherent Risk",
            slug: "inherent-risk",
            summary: "Natural risk before any security controls are applied.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "paragraph",
                text: "Inherent risk is the natural level of risk before any security controls are applied.",
              },
              {
                type: "paragraph",
                text: "It is the original risk level.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "Online banking naturally faces high cyberattack risk even before security protections are added.",
              },
              {
                type: "paragraph",
                text: "That natural risk is inherent risk.",
              },
            ],
            memoryTip: "Inherent risk = “Original risk before protection.”",
          },
          {
            order: 11,
            title: "Inherent Risk vs Residual Risk",
            slug: "inherent-risk-vs-residual-risk",
            summary: "Comparing original risk with remaining risk.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "subsection",
                title: "Inherent Risk:",
                blocks: [
                  {
                    type: "bulletList",
                    items: [
                      "Risk before controls",
                      "Original risk level",
                      "No protection yet",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                title: "Residual Risk:",
                blocks: [
                  {
                    type: "bulletList",
                    items: [
                      "Risk after controls",
                      "Remaining risk",
                      "Some protection already applied",
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
                    text: "Inherent risk = house can easily catch fire.",
                  },
                  {
                    type: "paragraph",
                    text: "Smoke alarms and extinguishers are installed.",
                  },
                  {
                    type: "paragraph",
                    text: "Residual risk = fire can still happen, but damage may be reduced.",
                  },
                ],
              },
            ],
          },
          {
            order: 12,
            title: "Threat Modeling",
            slug: "threat-modeling",
            summary: "Identifying possible threats before attacks happen.",
            badge: "Threat Modeling",
            blocks: [
              {
                type: "paragraph",
                text: "Threat modeling is the process of identifying possible threats before attacks happen.",
              },
              {
                type: "paragraph",
                text: "It helps organizations think like attackers.",
              },
              {
                type: "bulletList",
                intro: "Questions asked:",
                items: [
                  "What can attackers target?",
                  "How could attacks happen?",
                  "What protections are needed?",
                ],
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "Before launching a mobile banking app, developers ask:",
                items: [
                  "Could attackers steal login details?",
                  "Could users send fake transactions?",
                  "Could data be intercepted?",
                ],
              },
              {
                type: "paragraph",
                text: "This is threat modeling.",
              },
            ],
            memoryTip: "Threat modeling = “Thinking ahead about attacks.”",
          },
          {
            order: 13,
            title: "Asset Valuation",
            slug: "asset-valuation",
            summary: "Determining how valuable an asset is to the organization.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "paragraph",
                text: "Asset valuation means determining how valuable an asset is to the organization.",
              },
              {
                type: "bulletList",
                intro: "Assets can include:",
                items: [
                  "Data",
                  "Servers",
                  "Applications",
                  "Employees",
                  "Reputation",
                ],
              },
              {
                type: "paragraph",
                text: "Higher-value assets usually receive stronger protection.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro:
                  "Customer payment data is considered very valuable because losing it could cause:",
                items: [
                  "Financial loss",
                  "Legal problems",
                  "Reputation damage",
                ],
              },
              {
                type: "paragraph",
                text: "So the company invests heavily in protecting it.",
              },
            ],
            memoryTip: "Asset valuation = “How important is this asset?”",
          },
          {
            order: 14,
            title: "Qualitative Risk Analysis",
            slug: "qualitative-risk-analysis",
            summary: "Using opinions, experience, and descriptive ratings.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "paragraph",
                text: "Qualitative risk analysis uses opinions, experience, and descriptive ratings instead of exact numbers.",
              },
              {
                type: "bulletList",
                intro: "Risks are often ranked as:",
                items: ["Low", "Medium", "High"],
              },
              {
                type: "paragraph",
                text: "This method is simpler and faster.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company decides:",
                items: [
                  "Ransomware risk = High",
                  "Printer failure risk = Low",
                ],
              },
              {
                type: "paragraph",
                text: "No exact dollar amounts are used.",
              },
            ],
            memoryTip: "Qualitative = “Words and rankings.”",
          },
          {
            order: 15,
            title: "Quantitative Risk Analysis",
            slug: "quantitative-risk-analysis",
            summary: "Using numbers and financial values to measure risk.",
            badge: "Risk Analysis",
            blocks: [
              {
                type: "paragraph",
                text: "Quantitative risk analysis uses numbers and financial values to measure risk.",
              },
              {
                type: "bulletList",
                intro: "This method estimates:",
                items: [
                  "Cost of damage",
                  "Likelihood of incidents",
                  "Expected yearly loss",
                ],
              },
              {
                type: "paragraph",
                text: "It is more detailed but takes more time.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company calculates:",
                items: [
                  "A ransomware attack may cost $100,000",
                  "It may happen once every 5 years",
                ],
              },
              {
                type: "paragraph",
                text: "This is quantitative analysis.",
              },
            ],
            memoryTip: "Quantitative = “Numbers and calculations.”",
          },
          {
            order: 16,
            title: "ALE / SLE / ARO Calculations",
            slug: "ale-sle-aro-calculations",
            summary: "Using SSCP risk formulas for expected loss.",
            badge: "Risk Formula",
            blocks: [
              {
                type: "paragraph",
                text: "These formulas are very important for SSCP exams.",
              },
              {
                type: "subsection",
                title: "SLE — Single Loss Expectancy",
                blocks: [
                  {
                    type: "paragraph",
                    text: "SLE is the amount of money lost from ONE incident.",
                  },
                  {
                    type: "paragraph",
                    text: "Formula:",
                  },
                  {
                    type: "paragraph",
                    text: "SLE = Asset Value × Exposure Factor",
                  },
                  {
                    type: "bulletList",
                    intro: "Terms:",
                    items: [
                      "Asset Value (AV) = total value of the asset",
                      "Exposure Factor (EF) = percentage of damage caused",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                title: "Example",
                blocks: [
                  {
                    type: "paragraph",
                    text: "A server is worth $50,000.",
                  },
                  {
                    type: "paragraph",
                    text: "A fire may damage 40% of it.",
                  },
                  {
                    type: "paragraph",
                    text: "Formula:",
                  },
                  {
                    type: "paragraph",
                    text: "SLE = 50,000 × 0.4 = 20,000",
                  },
                  {
                    type: "paragraph",
                    text: "SLE = $20,000",
                  },
                  {
                    type: "paragraph",
                    text: "Meaning:",
                  },
                  {
                    type: "paragraph",
                    text: "One fire incident could cost $20,000.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "ARO — Annualized Rate of Occurrence",
                blocks: [
                  {
                    type: "paragraph",
                    text: "ARO means how many times a risk is expected to happen each year.",
                  },
                  {
                    type: "bulletList",
                    intro: "Example:",
                    items: [
                      "Once every year = 1",
                      "Once every 5 years = 0.2",
                      "Twice a year = 2",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                title: "Easy Memory Tip",
                blocks: [
                  {
                    type: "paragraph",
                    text: "ARO = “How often per year?”",
                  },
                ],
              },
              {
                type: "subsection",
                title: "ALE — Annualized Loss Expectancy",
                blocks: [
                  {
                    type: "paragraph",
                    text: "ALE estimates the yearly expected financial loss from a risk.",
                  },
                  {
                    type: "paragraph",
                    text: "Formula:",
                  },
                  {
                    type: "paragraph",
                    text: "ALE = SLE × ARO",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Example",
                blocks: [
                  {
                    type: "paragraph",
                    text: "A ransomware attack:",
                  },
                  {
                    type: "bulletList",
                    items: [
                      "SLE = $20,000",
                      "ARO = 0.5 (once every 2 years)",
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Formula:",
                  },
                  {
                    type: "paragraph",
                    text: "ALE = 20,000 × 0.5 = 10,000",
                  },
                  {
                    type: "paragraph",
                    text: "ALE = $10,000 per year",
                  },
                  {
                    type: "paragraph",
                    text: "Meaning:",
                  },
                  {
                    type: "paragraph",
                    text: "The organization expects to lose about $10,000 yearly from this risk.",
                  },
                ],
              },
              {
                type: "subsection",
                title: "Easy Formula Summary",
                blocks: [
                  {
                    type: "bulletList",
                    items: [
                      "SLE = AV × EF = Loss from one incident",
                      "ALE = SLE × ARO = Expected yearly loss",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                title: "Super Important Exam Tip",
                blocks: [
                  {
                    type: "quote",
                    intro: "SSCP questions often ask:",
                    text: "“What is the BEST risk treatment option?”",
                  },
                  {
                    type: "bulletList",
                    intro: "Usually:",
                    items: [
                      "Avoidance removes the activity",
                      "Mitigation reduces the risk",
                      "Transfer shifts financial responsibility",
                      "Acceptance means knowingly living with the risk",
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Understanding the differences clearly is much more important than memorizing definitions only.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        order: 3,
        title: "Security Policies & Procedures",
        slug: "security-policies-and-procedures",
        summary:
          "Written security rules for protecting systems, data, and devices.",
        badge: "Policies",
        blocks: [],
        concepts: [
          {
            order: 1,
            title: "Security Policies & Procedures",
            slug: "security-policies-and-procedures",
            summary:
              "Written security rules for protecting systems, data, and devices.",
            badge: "Policies",
            blocks: [
              {
                type: "paragraph",
                text: "Security policies and procedures are written rules that explain how people should protect systems, data, and devices inside an organization.",
              },
              {
                type: "bulletList",
                intro: "They help:",
                items: [
                  "Keep security consistent",
                  "Reduce confusion",
                  "Ensure employees follow the same rules",
                  "Meet legal and business requirements",
                ],
              },
              {
                type: "quote",
                intro: "Think of them like:",
                text: "“The rulebook for security.”",
              },
            ],
          },
          {
            order: 2,
            title: "Policies",
            slug: "policies",
            summary:
              "High-level management rules that explain what must happen.",
            badge: "Policies",
            blocks: [
              {
                type: "paragraph",
                text: "Policies are high-level rules created by management that explain what employees are allowed or expected to do.",
              },
              {
                type: "bulletList",
                intro: "Policies usually:",
                items: [
                  "Explain goals",
                  "Define responsibilities",
                  "Set expectations",
                ],
              },
              {
                type: "paragraph",
                text: "Policies do NOT usually explain detailed technical steps.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company policy says:",
              },
              {
                type: "paragraph",
                text: "“All employees must use MFA to access company systems.”",
              },
              {
                type: "paragraph",
                text: "The policy explains the rule, but not the exact setup steps.",
              },
            ],
            memoryTip: "Policy = “What must be done.”",
          },
          {
            order: 3,
            title: "Standards",
            slug: "standards",
            summary: "Specific mandatory rules that support policies.",
            badge: "Standards",
            blocks: [
              {
                type: "paragraph",
                text: "Standards are specific mandatory rules that support policies.",
              },
              {
                type: "paragraph",
                text: "Standards make sure everyone follows security in the same way.",
              },
              {
                type: "paragraph",
                text: "They are more detailed than policies.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A password policy says:",
              },
              {
                type: "paragraph",
                text: "“Strong passwords are required.”",
              },
              {
                type: "bulletList",
                intro: "The password standard may define:",
                items: [
                  "Minimum 14 characters",
                  "Uppercase letters required",
                  "Numbers required",
                  "Special characters required",
                ],
              },
            ],
            memoryTip: "Standards = “Specific mandatory requirements.”",
          },
          {
            order: 4,
            title: "Procedures",
            slug: "procedures",
            summary: "Step-by-step instructions for performing a task.",
            badge: "Procedures",
            blocks: [
              {
                type: "paragraph",
                text: "Procedures are step-by-step instructions explaining exactly how to perform a task.",
              },
              {
                type: "paragraph",
                text: "They are detailed and practical.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A procedure for resetting a password may include:",
                items: [
                  "Verify employee identity",
                  "Open user account system",
                  "Reset password",
                  "Force password change at next login",
                ],
              },
            ],
            memoryTip: "Procedures = “Step-by-step instructions.”",
          },
          {
            order: 5,
            title: "Guidelines",
            slug: "guidelines",
            summary: "Recommended best practices when flexibility is acceptable.",
            badge: "Guidelines",
            blocks: [
              {
                type: "paragraph",
                text: "Guidelines are recommended best practices.",
              },
              {
                type: "paragraph",
                text: "They are helpful suggestions, but not always mandatory.",
              },
              {
                type: "paragraph",
                text: "Organizations use guidelines when flexibility is acceptable.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "A company guideline recommends:",
              },
              {
                type: "paragraph",
                text: "“Employees should avoid using public Wi-Fi for sensitive work.”",
              },
              {
                type: "paragraph",
                text: "Employees are encouraged to follow it, but it may not be a strict rule.",
              },
            ],
            memoryTip: "Guidelines = “Recommended advice.”",
          },
          {
            order: 6,
            title: "Baselines",
            slug: "baselines",
            summary: "Minimum security settings or requirements systems must meet.",
            badge: "Baselines",
            blocks: [
              {
                type: "paragraph",
                text: "Baselines are minimum security settings or requirements that systems must meet.",
              },
              {
                type: "paragraph",
                text: "They create a standard starting point for security.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company baseline for laptops may require:",
                items: [
                  "Antivirus enabled",
                  "Firewall enabled",
                  "Disk encryption enabled",
                  "Automatic updates enabled",
                ],
              },
              {
                type: "paragraph",
                text: "Every company laptop must meet these minimum settings.",
              },
            ],
            memoryTip: "Baseline = “Minimum security level.”",
          },
          {
            order: 7,
            title:
              "Difference Between Policies, Standards, Procedures, Guidelines, and Baselines",
            slug: "policy-standard-procedure-guideline-baseline-comparison",
            summary:
              "A quick comparison of the main security rule and guidance types.",
            badge: "Comparison",
            blocks: [
              {
                type: "table",
                headers: ["Term", "Purpose"],
                rows: [
                  ["Policy", "High-level rule"],
                  ["Standard", "Mandatory detailed requirement"],
                  ["Procedure", "Step-by-step instructions"],
                  ["Guideline", "Recommended best practice"],
                  ["Baseline", "Minimum required security level"],
                ],
              },
            ],
          },
          {
            order: 8,
            title: "Acceptable Use Policies (AUP)",
            slug: "acceptable-use-policies",
            summary:
              "Rules for using company systems, devices, internet, and email.",
            badge: "AUP",
            blocks: [
              {
                type: "paragraph",
                text: "An Acceptable Use Policy explains how employees are allowed to use company systems, devices, internet, and email.",
              },
              {
                type: "bulletList",
                intro: "It helps prevent:",
                items: ["Misuse", "Illegal activity", "Security problems"],
              },
              {
                type: "bulletList",
                intro: "Common AUP rules:",
                items: [
                  "No illegal downloads",
                  "No offensive content",
                  "No unauthorized software",
                  "Limited personal use",
                  "Follow security rules",
                ],
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "An employee installs pirated software on a work laptop.",
              },
              {
                type: "paragraph",
                text: "This violates the Acceptable Use Policy.",
              },
            ],
            memoryTip: "AUP = “Rules for using company systems.”",
          },
          {
            order: 9,
            title: "Security Awareness Policies",
            slug: "security-awareness-policies",
            summary:
              "Rules for how employees learn and follow security practices.",
            badge: "Awareness",
            blocks: [
              {
                type: "paragraph",
                text: "Security awareness policies explain how employees should learn and follow security practices.",
              },
              {
                type: "quote",
                intro: "The goal is:",
                text: "“Teach employees how to avoid security threats.”",
              },
              {
                type: "bulletList",
                intro: "These policies often require:",
                items: [
                  "Security training",
                  "Phishing awareness",
                  "Reporting suspicious activity",
                  "Password safety",
                ],
              },
              {
                type: "paragraph",
                text: "Humans are often the weakest security point, so awareness training is very important.",
              },
            ],
            scenario: [
              {
                type: "paragraph",
                text: "Employees complete phishing training every 6 months and must report suspicious emails.",
              },
              {
                type: "paragraph",
                text: "This supports the security awareness policy.",
              },
            ],
            memoryTip: "Security awareness = “Teaching people to stay secure.”",
          },
          {
            order: 10,
            title: "Data Handling Procedures",
            slug: "data-handling-procedures",
            summary: "Rules for managing data safely throughout its life.",
            badge: "Data Handling",
            blocks: [
              {
                type: "bulletList",
                intro: "Data handling procedures explain how data should be:",
                items: [
                  "Collected",
                  "Stored",
                  "Shared",
                  "Protected",
                  "Destroyed",
                ],
              },
              {
                type: "paragraph",
                text: "Different types of data may require different handling rules.",
              },
              {
                type: "paragraph",
                text: "Sensitive data usually requires stronger protection.",
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "Customer credit card information must:",
                items: [
                  "Be encrypted",
                  "Only be accessed by authorized staff",
                  "Not be emailed openly",
                  "Be deleted securely when no longer needed",
                ],
              },
              {
                type: "paragraph",
                text: "These are data handling procedures.",
              },
            ],
            memoryTip: "Data handling = “Rules for managing data safely.”",
          },
          {
            order: 11,
            title: "Password Policies",
            slug: "password-policies",
            summary: "Rules for creating and managing passwords.",
            badge: "Passwords",
            blocks: [
              {
                type: "paragraph",
                text: "Password policies define the rules for creating and managing passwords.",
              },
              {
                type: "quote",
                intro: "The goal is:",
                text: "“Make passwords difficult for attackers to guess.”",
              },
              {
                type: "bulletList",
                intro: "Common password policy requirements:",
                items: [
                  "Minimum length",
                  "Complexity requirements",
                  "Password expiration",
                  "Password history",
                  "MFA usage",
                ],
              },
              {
                type: "bulletList",
                intro: "Good password policies reduce:",
                items: [
                  "Brute-force attacks",
                  "Password guessing",
                  "Account compromise",
                ],
              },
            ],
            scenario: [
              {
                type: "bulletList",
                intro: "A company password policy requires:",
                items: [
                  "Minimum 14 characters",
                  "MFA enabled",
                  "Passwords cannot be reused",
                ],
              },
              {
                type: "paragraph",
                text: "Employees must follow these rules.",
              },
            ],
            memoryTip: "Password policy = “Rules for strong passwords.”",
          },
        ],
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

export function getCertificationTopicLessons(topic: CertificationTopic) {
  return [...topic.lessons].sort((firstLesson, secondLesson) => {
    return firstLesson.order - secondLesson.order;
  });
}

export function getCertificationTopicLesson(
  trackSlug: CertificationTrackSlug,
  topicSlug: string,
  lessonSlug: string,
) {
  const topic = getCertificationTopic(trackSlug, topicSlug);

  if (!topic) {
    return undefined;
  }

  return getCertificationTopicLessons(topic).find((lesson) => {
    return lesson.slug === lessonSlug;
  });
}

export function getCertificationLessonConcepts(
  lesson: CertificationTopicLesson,
) {
  return [...lesson.concepts].sort((firstConcept, secondConcept) => {
    return firstConcept.order - secondConcept.order;
  });
}

export function getCertificationLessonConcept(
  trackSlug: CertificationTrackSlug,
  topicSlug: string,
  lessonSlug: string,
  conceptSlug: string,
) {
  const lesson = getCertificationTopicLesson(trackSlug, topicSlug, lessonSlug);

  if (!lesson) {
    return undefined;
  }

  return getCertificationLessonConcepts(lesson).find((concept) => {
    return concept.slug === conceptSlug;
  });
}
