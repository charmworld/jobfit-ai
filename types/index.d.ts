interface FeedbackTips {
  type: "good" | "improve";
  tip: string;
  explanation?: string;
}

interface FeedbackCategory {
  score: number;
  tips: FeedbackTips[];
}

interface Feedback {
  overallScore: number;
  ATS: FeedbackCategory;
  toneAndStyle: FeedbackCategory;
  content: FeedbackCategory;
  structure: FeedbackCategory;
  skills: FeedbackCategory;
}

interface Resume {
  id: string;
  companyName: string;
  jobTitle: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}
