import type { CertificationTrackSlug } from "@/lib/certificationTracks";

export type SnackArticleSection = {
  heading: string;
  body: string[];
};

export type SnackArticle = {
  slug: string;
  category: string;
  certificationTrackSlugs: CertificationTrackSlug[];
  title: string;
  cardTitle: string;
  description: string;
  readTime: string;
  publishedText: string;
  heroDescription: string;
  intro: string[];
  sections: SnackArticleSection[];
  checklist: {
    heading: string;
    items: string[];
  };
  takeaway: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};

export const snackArticles: SnackArticle[] = [
  {
    slug: "phishing-signs-users-ignore",
    category: "Email Security",
    certificationTrackSlugs: ["sscp"],
    title: "3 phishing signs most users ignore",
    cardTitle: "Spotting a polished phishing email",
    description:
      "A quick look at sender details, mismatched links, and pressure tactics.",
    readTime: "4 min read",
    publishedText: "Published May 18, 2026",
    heroDescription:
      "Polished phishing emails can look calm, branded, and believable. The trick is to check the small details attackers hope you skip.",
    intro: [
      "Most people do not fall for phishing because they are careless. They fall for it because the message arrives during a normal busy moment and looks close enough to real.",
      "These three checks are simple, fast, and useful before opening a link, downloading a file, or sharing account details.",
    ],
    sections: [
      {
        heading: "1. The sender looks familiar, but the address is off",
        body: [
          "Phishing emails often borrow a trusted name, logo, or writing style. The display name may say Microsoft, your bank, or a coworker, but the real sender address tells a better story.",
          "Look for small changes: extra words, odd spelling, personal email accounts, or a reply-to address that does not match the sender. If the message claims to be from a company, the domain should match that company clearly.",
        ],
      },
      {
        heading: "2. The link text sounds safe, but the destination does not",
        body: [
          "A button can say View document or Reset password while sending you somewhere completely different. Attackers rely on people trusting the visible text instead of checking where the link actually goes.",
          "On desktop, hover over the link before clicking. On mobile, be careful with long-press previews and avoid opening anything by accident. If the destination uses a strange domain, a shortened link, or a confusing subdomain, slow down.",
        ],
      },
      {
        heading: "3. The message pushes you to act before thinking",
        body: [
          "Urgency is one of the most common phishing tricks. Messages may warn that your account will close, a payment will fail, a delivery is blocked, or a file needs immediate review.",
          "Real problems can be urgent too, so do not ignore every warning. The safer move is to verify through a trusted path: open the real website yourself, use a saved bookmark, or contact the person through a channel you already trust.",
        ],
      },
    ],
    checklist: {
      heading: "Practical checklist",
      items: [
        "Check the full sender address, not just the display name.",
        "Compare the link destination with the organization it claims to be from.",
        "Treat pressure, threats, and unusual deadlines as warning signs.",
        "Open important services directly instead of using email links.",
        "Confirm unexpected requests through a trusted channel.",
        "Report or delete the message if it still feels wrong.",
      ],
    },
    takeaway: {
      eyebrow: "Final Takeaway",
      heading: "Trust the process, not the polish.",
      body: "A phishing email does not need to look messy to be dangerous. If the sender, link, or urgency feels slightly wrong, pause and verify before you click.",
    },
    metadata: {
      title: "3 phishing signs most users ignore | The Cyber Snacks",
      description:
        "A beginner-friendly guide to spotting sender, link, and urgency clues in polished phishing emails.",
    },
  },
  {
    slug: "password-managers-matter",
    category: "Passwords",
    certificationTrackSlugs: ["sscp"],
    title: "Why password managers matter",
    cardTitle: "Why password managers matter",
    description:
      "Simple reasons unique passwords and secure storage reduce everyday risk.",
    readTime: "3 min read",
    publishedText: "Published May 18, 2026",
    heroDescription:
      "Password managers reduce the pressure to remember everything and make it easier to use strong, unique passwords where they matter.",
    intro: [
      "A password manager is not just a convenience tool. It is a practical way to stop password reuse, create stronger logins, and reduce the blast radius of a breach.",
      "You do not need to move every account in one day. Starting with email, banking, cloud storage, and work accounts gives you the biggest security improvement first.",
    ],
    sections: [
      {
        heading: "1. Reused passwords turn one leak into many problems",
        body: [
          "Most people reuse passwords because remembering dozens of unique logins is unrealistic. Attackers count on that. When one website leaks a password, they try the same email and password on other services.",
          "Example: a shopping site breach should not also give someone access to your email, banking, cloud storage, or work accounts. Unique passwords limit the damage.",
        ],
      },
      {
        heading: "2. A manager helps you create passwords you do not need to memorize",
        body: [
          "A password manager can generate long, random passwords and store them behind one strong master password. That means each account can have a different password without becoming a memory test.",
          "For beginners, the practical win is simple: you remember one strong master password, and the manager handles the messy parts for every other account.",
        ],
      },
      {
        heading: "3. Autofill can help you notice fake websites",
        body: [
          "Good password managers match saved passwords to the real website address. If a login page looks convincing but the manager does not offer to fill your password, that can be a useful warning sign.",
          "This is not perfect protection, but it adds another pause point. A fake page may look like your bank or email provider, while the domain tells a different story.",
        ],
      },
    ],
    checklist: {
      heading: "Starter checklist",
      items: [
        "Use one strong master password that you do not reuse anywhere else.",
        "Turn on MFA for the password manager account.",
        "Start by saving your most important accounts first.",
        "Replace reused passwords with generated unique passwords over time.",
        "Check the website address before saving or autofilling credentials.",
        "Keep recovery options current in case you lose access.",
      ],
    },
    takeaway: {
      eyebrow: "Final Takeaway",
      heading: "Make secure behavior easier to repeat.",
      body: "Password managers matter because they make the safer choice the easier choice: unique passwords, less reuse, and fewer risky memory shortcuts.",
    },
    metadata: {
      title: "Why password managers matter | The Cyber Snacks",
      description:
        "A practical beginner guide to password managers, unique passwords, safer autofill, and account protection.",
    },
  },
  {
    slug: "mfa-prompts-can-be-dangerous",
    category: "Microsoft 365",
    certificationTrackSlugs: ["cissp"],
    title: "Why MFA prompts can still be dangerous",
    cardTitle: "A beginner view of MFA prompts",
    description:
      "How to think about sign-in prompts, approvals, and suspicious requests.",
    readTime: "5 min read",
    publishedText: "Published May 18, 2026",
    heroDescription:
      "MFA is one of the best everyday security controls, but a prompt is still a decision point. The safest habit is to approve only what you started.",
    intro: [
      "MFA makes stolen passwords much less useful, but it does not remove every risk. Attackers know that people get busy, distracted, or tired of repeated prompts.",
      "The goal is not to fear MFA. The goal is to treat every prompt as a small security checkpoint.",
    ],
    sections: [
      {
        heading: "1. MFA proves a sign-in was approved, not that it was safe",
        body: [
          "Multi-factor authentication is a strong protection, but it still depends on the user making a good decision. If someone approves a prompt they did not request, the attacker may get the access they were waiting for.",
          "Example: you receive a push notification at night that says someone is trying to sign in. If you tap approve just to clear the notification, you may be approving a stolen password attempt.",
        ],
      },
      {
        heading: "2. Repeated prompts can wear people down",
        body: [
          "Attackers sometimes trigger many sign-in attempts in a short period. This is often called MFA fatigue because the goal is to make the prompt feel annoying instead of suspicious.",
          "A normal MFA prompt should match something you are doing right now. If the request appears when you are not signing in, treat it as a warning instead of a routine notification.",
        ],
      },
      {
        heading: "3. Number matching helps, but only if you read the screen",
        body: [
          "Some MFA systems ask you to type a number shown on the sign-in page. This is safer than a simple approve button, but it still needs attention.",
          "If someone calls, messages, or pressures you to read out or enter a number, stop. The number is meant to connect your real sign-in screen to your approval prompt, not to help someone else log in.",
        ],
      },
    ],
    checklist: {
      heading: "Prompt safety checklist",
      items: [
        "Only approve MFA prompts you started yourself.",
        "Deny unexpected prompts instead of ignoring them.",
        "Report repeated or unusual prompts to your IT or security contact.",
        "Read the app name, location, and sign-in details when they are shown.",
        "Never share MFA codes or number-matching values with another person.",
        "Change your password if you approved a prompt by mistake.",
      ],
    },
    takeaway: {
      eyebrow: "Final Takeaway",
      heading: "Approve actions, not surprises.",
      body: "MFA is powerful when the prompt matches something you are doing. If it appears out of nowhere, deny it, report it, and assume someone may already know your password.",
    },
    metadata: {
      title: "Why MFA prompts can still be dangerous | The Cyber Snacks",
      description:
        "A beginner-friendly guide to MFA prompt risks, fatigue attacks, and safer approval habits.",
    },
  },
  {
    slug: "local-admin-risk",
    category: "Endpoint Security",
    certificationTrackSlugs: ["sscp"],
    title: "Why local admin access is risky",
    cardTitle: "Why local admin access is risky",
    description:
      "A simple look at why everyday admin rights can make device problems worse.",
    readTime: "4 min read",
    publishedText: "Published May 18, 2026",
    heroDescription:
      "Local admin access can feel convenient, but it gives software and attackers more room to make serious changes on a device.",
    intro: [
      "Local admin access means a user can make powerful changes on their own computer. That can include installing software, changing settings, disabling controls, or approving actions that affect the whole device.",
      "For beginners, the key idea is simple: admin rights are useful for maintenance, but risky as an everyday default.",
    ],
    sections: [
      {
        heading: "1. Malware can inherit the user's power",
        body: [
          "If a person is using an admin account and accidentally runs malicious software, that software may get the same high level of access.",
          "Example: a fake installer downloaded from the web may be able to change system settings, add startup tasks, or weaken protections if it runs with admin rights.",
        ],
      },
      {
        heading: "2. Mistakes become easier to make",
        body: [
          "Admin access removes some of the normal guardrails. A user may be able to uninstall security tools, install untrusted apps, or approve changes they do not fully understand.",
          "This does not mean users are careless. It means the account has more power than it needs for everyday work like email, browsing, documents, and meetings.",
        ],
      },
      {
        heading: "3. Temporary elevation is safer than permanent access",
        body: [
          "Many teams handle admin tasks with a separate admin account, a help desk process, or a temporary approval tool. The goal is to give admin rights only when there is a real reason.",
          "This keeps normal work lower risk while still allowing updates, installs, and troubleshooting when needed.",
        ],
      },
    ],
    checklist: {
      heading: "Local admin safety checklist",
      items: [
        "Use a standard account for everyday work.",
        "Keep admin accounts separate from normal sign-in accounts.",
        "Only approve admin prompts when you know what change is being made.",
        "Avoid installing software from random links or pop-ups.",
        "Remove local admin rights when they are no longer needed.",
        "Ask IT or a trusted support person before changing security settings.",
      ],
    },
    takeaway: {
      eyebrow: "Final Takeaway",
      heading: "Use admin access only when the task needs it.",
      body: "Local admin rights are powerful. Keeping them limited reduces the damage from mistakes, unsafe software, and attacker activity.",
    },
    metadata: {
      title: "Why local admin access is risky | The Cyber Snacks",
      description:
        "A beginner-friendly guide to local admin risk, safer device habits, and why least privilege matters.",
    },
  },
  {
    slug: "suspicious-sender-addresses",
    category: "Email Security",
    certificationTrackSlugs: ["sscp"],
    title: "How to read suspicious sender addresses",
    cardTitle: "How to read suspicious sender addresses",
    description:
      "Practical sender checks for spotting confusing domains and fake message sources.",
    readTime: "3 min read",
    publishedText: "Published May 18, 2026",
    heroDescription:
      "The sender name in an email can be easy to fake. The real clue is often the full address behind it.",
    intro: [
      "A suspicious email may use a familiar display name like Payroll, Microsoft, your bank, or a coworker. That name is only the surface.",
      "Reading the sender address helps you slow down and check whether the message is coming from a source that makes sense.",
    ],
    sections: [
      {
        heading: "1. Separate the display name from the real address",
        body: [
          "The display name is the friendly label you see first. The real address is the full email address behind it, such as name@example.com.",
          "Example: an email may show Microsoft Support as the sender, but the address might be microsoft-alerts@gmail.com. That mismatch is a warning sign.",
        ],
      },
      {
        heading: "2. Read the domain from right to left",
        body: [
          "The most important part is the real domain near the end of the address. In security@example.microsoft.com, the domain belongs to microsoft.com. In security@microsoft.example.com, it belongs to example.com.",
          "Attackers often add trusted words near the front because many people stop reading too early.",
        ],
      },
      {
        heading: "3. Watch for lookalikes and extra words",
        body: [
          "Small spelling changes, extra hyphens, odd endings, and unfamiliar domains can make a fake address look close to a real one.",
          "Example: support@paypaI.com with a capital I instead of an l, or billing@company-secure-login.com, should make you pause before clicking anything.",
        ],
      },
    ],
    checklist: {
      heading: "Sender address checklist",
      items: [
        "Open or expand the sender details before trusting the message.",
        "Check the full address, not just the display name.",
        "Look for misspellings, extra words, and unusual domain endings.",
        "Be careful when trusted brand names appear before the real domain.",
        "Compare the address with previous legitimate messages when possible.",
        "Use a trusted website or contact method if the email asks you to act.",
      ],
    },
    takeaway: {
      eyebrow: "Final Takeaway",
      heading: "The display name is not proof.",
      body: "A sender name can look familiar while the real address tells a different story. When the message feels important, check the full address before you trust it.",
    },
    metadata: {
      title: "How to read suspicious sender addresses | The Cyber Snacks",
      description:
        "A practical beginner guide to reading sender addresses, spotting fake domains, and checking email source clues.",
    },
  },
];

export function getSnackArticle(slug: string) {
  return snackArticles.find((article) => article.slug === slug);
}
