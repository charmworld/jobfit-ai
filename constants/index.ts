

export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({jobTitle, jobDescription}: { jobTitle: string; jobDescription: string; }) =>
  `You are a specialist in ATS (Applicant Tracking System) and resume evaluation.
  Carefully assess and score this resume, then provide actionable suggestions for improvement.
  Assign lower scores if the resume quality is poor.
  Be comprehensive and specific. Do not hesitate to highlight mistakes or areas needing enhancement.
  If the resume requires significant improvement, feel free to give it a low rating. This aims to assist the user in enhancing their resume.
  When available, incorporate the job description for the position being applied to for more precise feedback.
  Consider the job description carefully if it is provided.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Format the feedback according to the following structure:
  ${AIResponseFormat}
  Return the feedback strictly as a JSON object, excluding any additional text or code formatting.
  Do not include any comments or extra information.`;
