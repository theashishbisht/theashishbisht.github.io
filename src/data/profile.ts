/**
 * ============================================================
 *  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
 * ============================================================
 *  Every number, label, and link on the site comes from here.
 *  Change a value, save, push to GitHub — done.
 * ============================================================
 */

export const PROFILE = {
  // -------- Identity --------
  name: "Ashish Bisht",
  role: "Senior Data Analyst",
  company: "Numerator",
  location: "Vadodara, India",

  // -------- THE COUNTS (update these any time) --------
  // ↓ Years of experience — shown in Hero and About
  yearsOfExperience: 4.5,

  // ↓ Stat tiles shown in the Hero section
  stats: [
    { label: "Years of experience",  value: "4.5+" },
    { label: "Pipelines shipped",    value: "30+"  },
    { label: "Datasets touched",     value: "1B+ rows" },
    { label: "Dashboards built",     value: "15+"  },
  ],
  // ---------------------------------------------------

  // -------- Hero copy --------
  tagline:
    "Turning complex data into decisions. SQL, Python, Azure, and modern data infrastructure.",
  profileImage: "https://i.postimg.cc/CKMtPmQK/DP.jpg",

  // -------- About --------
  about: {
    journey:
      "Senior QC Data Analyst at Numerator. I build scalable pipelines and turn raw consumer-panel data into the kind of answers leadership actually acts on.",
    approach:
      "I treat every dataset as a draft of a story. The job is to find the through-line — the metric that moves a decision — and remove everything else.",
    education: [
      {
        title: "Bachelor's in Mechanical Engineering",
        institution: "Silver Oak College of Engineering & Technology",
        year: "2020",
      },
      {
        title: "12th Grade",
        institution: "Kendriya Vidyalaya Sangathan (KVS)",
        year: "2016",
      },
      {
        title: "Big Data Course",
        institution: "Currently pursuing",
        year: "Present",
      },
    ],
  },

  // -------- Skills --------
  skills: [
    { name: "SQL",                  category: "Query",        level: 95 },
    { name: "Python",               category: "Language",     level: 85 },
    { name: "PySpark",              category: "Processing",   level: 88 },
    { name: "Apache Spark",         category: "Processing",   level: 85 },
    { name: "Hadoop",               category: "Processing",   level: 82 },
    { name: "Azure Data Factory",   category: "Cloud",        level: 90 },
    { name: "Google Cloud Platform",category: "Cloud",        level: 78 },
    { name: "Power BI",             category: "Visualization",level: 92 },
    { name: "NoSQL",                category: "Storage",      level: 85 },
    { name: "Linux",                category: "Platform",     level: 80 },
  ],

  // -------- Projects --------
  projects: [
    {
      title: "Data Pipeline Automation",
      blurb:
        "Automated ETL workflows on Azure Data Factory and PySpark, cutting processing time by 60%.",
      stack: ["Azure Data Factory", "PySpark", "SQL"],
    },
    {
      title: "Customer Analytics Dashboard",
      blurb:
        "Power BI dashboard surfacing real-time customer behavior and sales-trend signals.",
      stack: ["Power BI", "SQL", "DAX"],
    },
    {
      title: "Big Data Processing Framework",
      blurb:
        "Hadoop + Spark framework for processing terabytes of consumer panel data.",
      stack: ["Hadoop", "Spark", "Python"],
    },
  ],

  // -------- Contact --------
  contact: {
    email: "abisht129@gmail.com",
    linkedin: {
      url: "https://www.linkedin.com/in/theashishbisht",
      handle: "linkedin.com/in/theashishbisht",
    },
    github: {
      url: "https://github.com/theashishbisht",
      handle: "github.com/theashishbisht",
    },
  },

  // -------- EmailJS (your existing keys, kept) --------
  emailjs: {
    serviceId:  "service_uxy3trb",
    templateId: "template_vym9bcw",
    publicKey:  "5qSf2sVzSKBxABkR1",
  },

  // -------- Visitor counter (GoatCounter — free, privacy-friendly) --------
  // 1. Sign up at https://www.goatcounter.com/ (takes 30 seconds, no credit card).
  // 2. Pick a code (e.g. "ashishbisht"). Your dashboard will be at
  //    https://ashishbisht.goatcounter.com
  // 3. Paste that code below.
  // Until you do, the counter is silently hidden — the rest of the site works fine.
  goatcounter: {
    code: null as string | null,   // e.g. "ashishbisht"
  },
} as const;

export type Profile = typeof PROFILE;
