export type StudioEntityStatus = "Active" | "Draft" | "Empty";

export type ContentBlockType =
  | "Text Block"
  | "Focus Block"
  | "Scenario Example"
  | "Study Tip";

export type Certification = {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  status: StudioEntityStatus;
};

export type Domain = {
  certificationId: string;
  id: string;
  order: number;
  slug: string;
  status: StudioEntityStatus;
  summary: string;
  title: string;
};

export type Lesson = {
  domainId: string;
  id: string;
  order: number;
  slug: string;
  status: StudioEntityStatus;
  summary: string;
  title: string;
};

export type Concept = {
  id: string;
  lessonId: string;
  order: number;
  slug: string;
  status: StudioEntityStatus;
  summary: string;
  title: string;
};

export type ContentBlock = {
  conceptId: string;
  id: string;
  order: number;
  title: string;
  type: ContentBlockType;
};
