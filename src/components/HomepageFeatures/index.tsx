import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

type FAQsItem = {
  title: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    description: (
      <>Get your CATS account up and running with these easy guides</>
    ),
  },
  {
    title: "Account & Billing",
    description: (
      <>
        User management, account settings, billing changes, administrative
        settings
      </>
    ),
  },
  {
    title: "Candidates",
    description: (
      <>
        Adding candidates, sourcing tools, searching, email and SMS
        communication
      </>
    ),
  },
  {
    title: "Career Portal & Job Posting",
    description: (
      <>
        Portal customization, publishing, third-party job boards, website
        integration
      </>
    ),
  },
  {
    title: "Jobs",
    description: (
      <>Creating jobs, registration, applications and triggers, publishing</>
    ),
  },
  {
    title: "Integrations",
    description: (
      <>Connect your CATS account to powerful outside apps and services</>
    ),
  },
  {
    title: "Companies & Contacts",
    description: <></>,
  },
];

const FAQsList: FAQsItem[] = [
  {
    title: "Account & Billing",
  },
  {
    title: "Candidates",
  },
  {
    title: "Career Portal & Job Posting",
  },
  {
    title: "Companies & Contacts",
  },
  {
    title: "General",
  },
  {
    title: "Jobs",
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className="grid-home-page-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeatureFAQ({ title }: FAQsItem) {
  return (
    <div className="grid-home-page-item">
      <h3>{title}</h3>
    </div>
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
          {FeatureList.map((props, idx) => (
            <FeatureFAQ key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
