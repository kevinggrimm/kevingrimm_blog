const resumeData = {
  summary: {
    title: "Summary",
    paragraphs: [
      "I am a fervent believer in investing in your own success.",
      "That philosophy drove my pursuit of Python, SQL, and later AWS despite having a background in finance. I later entered our data-driven world where business insights are unlocked through a solid foundation of technical skills, critical thinking, and dogged perseverance. Now several years into my career, I view data engineering as a complex puzzle that is solved through creative discovery.",
      "However, engineering is not performed in a vacuum; it's a collection of processes that involve multiple stakeholders and demands a fundamental understanding of the problem at hand. In this type of environment, communication and trust are crucial. Through proactive outreach and genuine conversation, I've cultivated a healthy and transparent culture in my current and past teams.",
      "The investment I make in myself does not stop when the workday ends. I am continuously striving to strengthen my education, health, and relationships because I know that doing this today will pay dividends tomorrow.",
      "In the years to come, this site will serve as a point of reference for the mountains thI have chosen.",
    ],
  },
  experience: {
    title: "Experience",
    roles: [
      {
        company: "Guidepoint Qsight", 
        position: "Senior Data Engineer",
        location: "Remote",
        period: "January 2022 - Present",
        accomplishments: [
          "Exhaustive ETL design for structured and semi-structured datasets of up to 800GB in size sourced from cloud storage, SFTP servers, flat files, and REST APIs.",
          "Architected a multi-cloud ETL solution that executes weekly batch transfers of 300GB+ datasets from GCP to AWS (Python / Snowflake / REST APIs).",
          "Proactive engagement with our team and data partners regarding business requirements and data asset characteristics to ensure data integrity.",
          "Continued investment towards data validation, standardized ETL development, and query optimization to deliver additional data pipelines.",
          "Improved operational reliability and team efficiency by automating IP whitelist rollouts for our Snowflake and AWS infrastructure.",
          "Frequent technical support to 5+ analysts over reviews of our custom Python framework, documentation, and presentations on completed projects.",
        ],
      },
      {
        company: "Guidepoint Qsight",
        position: "Data Engineer",
        location: "Remote",
        period: "July 2020 - December 2021",
        accomplishments: [
          "Owned the migration and successful execution of an ETL within an AWS MWAA environment as part of a longer-term evaluation of Apache Airflow",
          "Extensive debugging and testing of production ETLs and new datasets to uphold data quality standards of client deliverables.",
          "Enabled ETL migration to AWS Batch by adapting our Windows-based codebase to a container-friendly environment and delivering a 'batch and run' MVP.",
          "Entrusted with administrator duties of AWS account, managing IAM permissions for Qsight team and external clients.",
          "Managed relationships with our new data partner through regular technical calls, project updates, and data quality checks prior to production rollouts.",
        ],
      },
      {
        company: "MediaMath",
        position: "Supply Analytics Associate",
        location: "NYC",
        period: "May 2019 - July 2020",
        accomplishments: [
          "Expanded accessibility to bidding metrics by developing a web scraper to capture, normalize, and ingest real-time web traffic.",
          "Automated the processing of several thousand multi-currency invoices, saving 40+ hours of manual effort.",
          "Streamlined data loads by implementing a serverless workflow using AWS infrastructure and cross-account file transfers.",
          "Codified fragmented analytical processes using boto3, pandas, and other Python libraries.",
          "Managed the delivery of automated reporting to C-suite through cron jobs scheduled on our EC2 instance.",
        ],
      },
      {
        company: "The Daily Bit",
        position: "Co-Founder",
        location: "NYC",
        period: "November 2017 - November 2018",
        accomplishments: [
          "Launched an online publication that covered educational news on digital assets.",
          "Released 200+ newsletters for an audience of several thousand professionals.",
          "Engaged in daily market research to identify impactful industry developments.",
        ],
      },
    ],
  },
  techStack: {
    title: "Tech Stack",
    categories: [
      {
        name: "Languages",
        items: "Python, SQL, Javascript, Bash",
      },
      {
        name: "Frameworks",
        items: "Next.js, SST (Serverless Stack)",
      },
      {
        name: "Platforms",
        items: "AWS, Snowflake, Docker, Airflow, Node",
      },
      {
        name: "Tools",
        items: "Git, JIRA, Visual Studio Code",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    certs: [
      {
        name: "AWS Certified Developer - Associate",
        date: "May 2020",
        href: "https://www.credly.com/badges/15df4ca5-8894-42f6-b581-2b395698db61/linked_in_profile",
        id: "BQ3W5G5CMNF1QGCF",
      },
      {
        name: "AWS Certified Solutions Architect - Associate",
        date: "May 2020",
        href: "https://www.credly.com/badges/8e638ae0-8629-48d4-8e86-858dd69d9745/linked_in_profile",
        id: "RBV47CM1ME4QQE5W",
      },
      {
        name: "SnowPro Core Certification",
        date: "November 2021",
        href: "https://www.credly.com/badges/c6668f7d-62d1-479d-a4f4-59d82c7c1367/public_url",
        id: "10165750",
      },
    ],
  },
  projects: {
    title: "Projects",
    projects: [
      {
        name: "Form Fore",
        href: "https://formfore.io",
        site: "FormFore.io",
        description:
          "Form Fore is a data platform that alerts users as new SEC filings are submitted and presents transactions for analysis in simple dashboards.",
        details: [
          "Actively building during mornings, nights, and weekends since May 2021.",
          "Web scraper captures new filings and backfills past submissions.",
          "Data storage and app features are enabled through a serverless architecture.",
          "AWS infrastructure and Next.js frontend deployments are managed using SST.",
        ],
      },
    ],
  },
  leadership: {
    title: "Leadership",
    events: [
      {
        organization: "Guidepoint Qsight",
        timePeriod: "November 2021 - Present",
        actions: [
          "Presentation of technical learnings to team following a project's completion.",
          "Thought leadaership within data engineering team on how to improve inefficient workflows.",
          "Oversee the training, development, and success of our data engineering intern.",
        ],
      },
      {
        organization: "Circling For Semper Fi Fund",
        timePeriod: "October 2019 - October 2020",
        actions: [
          "Organized a fundraiser for the Semper Fi Fund, a non-profit organization that provides programs to assist wounded veterans.",
          "The campaign involved monthly 50k runs around the perimeter of Manhattan (and later AZ) on behalf of the Semper Fi Fund.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    university: "Georgetown University",
    college: "McDonough School of Business",
    location: "Washington, D.C.",
    timePeriod: "Fall 2011 - Spring 2015",
    details: [
      "B.S. in Business Administration | Accounting and Finance",
      "Courses: Advanced Accounting, Financial Statement Analysis, International Finance, Principles of Investment"
    ]
  },
  interests: {
    title: "Interests",
    activities: "Entrepreneurship, Hiking, Nutrition, Programming, Reading, Running, Web3"
  }
};

export default resumeData;