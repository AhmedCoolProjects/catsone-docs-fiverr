import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  link: string;
};

type FAQsItem = {
  title: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    link: "docs/category/getting-started",
    description: (
      <>Get your CATS account up and running with these easy guides</>
    ),
  },
  {
    title: "Account & Billing",
    link: "docs/category/account--billing",
    description: (
      <>
        User management, account settings, billing changes, administrative
        settings
      </>
    ),
  },
  {
    title: "Candidates",
    link: "docs/category/candidates",
    description: (
      <>
        Adding candidates, sourcing tools, searching, email and SMS
        communication
      </>
    ),
  },
  {
    title: "Career Portal & Job Posting",
    link: "docs/category/career-portal--job-posting",
    description: (
      <>
        Portal customization, publishing, third-party job boards, website
        integration
      </>
    ),
  },
  {
    title: "Jobs",
    link: "docs/category/jobs",
    description: (
      <>Creating jobs, registration, applications and triggers, publishing</>
    ),
  },
  {
    title: "Integrations",
    link: "docs/category/integrations",
    description: (
      <>Connect your CATS account to powerful outside apps and services</>
    ),
  },
  {
    title: "Companies & Contacts",
    link: "docs/category/companies--contacts",
    description: <></>,
  },
];

const FAQsList: FAQsItem[] = [
  {
    title: "Account & Billing",
    link: "faq/category/account--billing",
  },
  {
    title: "Candidates",
    link: "faq/category/candidates",
  },
  {
    title: "Career Portal & Job Posting",
    link: "faq/category/career-portal--job-posting",
  },
  {
    title: "Companies & Contacts",
    link: "faq/category/companies--contacts",
  },
  {
    title: "General",
    link: "faq/category/general",
  },
  {
    title: "Jobs",
    link: "faq/category/jobs",
  },
];

function Feature({ title, description, link }: FeatureItem) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={link}
    >
      <div className="grid-home-page-item">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function FeatureFAQ({ title, link }: FAQsItem) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      to={link}
    >
      <div className="grid-home-page-item">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          General Guidance
        </h1>
        <div className="grid-home-page-container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomepageFAQs(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Frequently Asked Questions
        </h1>
        <div className="grid-home-page-container">
          {FAQsList.map((props, idx) => (
            <FeatureFAQ key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
