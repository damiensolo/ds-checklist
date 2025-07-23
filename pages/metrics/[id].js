import React from "react";
import Layout from "../../src/components/Layout";
import Hero from "../../src/components/Hero";
import Section from "../../src/components/Section";

const metricsData = {
  sections: [
    {
      id: "business-financial",
      checklist: [
        "metrics-roi",
        "metrics-time-to-value", 
        "metrics-cost-savings",
        "metrics-conversion-rate",
        "metrics-brand-reputation",
        "metrics-company-scalability"
      ]
    }
  ]
};

const metricsTranslations = {
  "business-financial": {
    title: "Business & Financial Impact",
    description: "Metrics that connect the design system directly to financial and strategic business goals.",
    checklist: {
      "metrics-roi": {
        title: "Return on Investment (ROI)",
        description: "Measure the overall financial gains of the design system against the cost of its investment."
      },
      "metrics-time-to-value": {
        title: "Time to Value", 
        description: "Track the time from the initial investment to when the system begins delivering measurable returns, such as cost savings or revenue boosts."
      },
      "metrics-cost-savings": {
        title: "Cost Savings",
        description: "Calculate savings from increased efficiency, reduced refactoring, and fewer design/development hours spent on redundant work."
      },
      "metrics-conversion-rate": {
        title: "Conversion Rate Improvement",
        description: "Analyze how a more consistent and usable interface impacts user conversion rates."
      },
      "metrics-brand-reputation": {
        title: "Brand Reputation & Consistency",
        description: "Track improvements in brand recognition and trust, driven by a consistent visual identity across all products."
      },
      "metrics-company-scalability": {
        title: "Company Scalability",
        description: "Measure how the design system enables faster product development and team scaling."
      }
    }
  }
};

const MetricDetailRoute = ({ t, sectionId }) => {
  const section = metricsData.sections.find(s => s.id === sectionId);
  const sectionTranslations = metricsTranslations[sectionId];

  if (!section || !sectionTranslations) {
    return null;
  }

  const sectionData = {
    title: sectionTranslations.title,
    description: sectionTranslations.description,
    resources: [],
    checklist: section.checklist.map((id) => ({
      id,
      title: sectionTranslations.checklist[id].title,
      description: sectionTranslations.checklist[id].description,
    })),
  };

  return (
    <Layout t={t}>
      <Hero
        title={sectionTranslations.title}
        subtitle={sectionTranslations.description}
      />
      <div>
        <Section
          section={sectionData}
          completedLabel={t.core.completed}
        />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "business-financial" } }
    ],
    fallback: false,
  };
}

import translations from "../../src/translations";

export async function getStaticProps({ params }) {
  return {
    props: { 
      t: translations,
      sectionId: params.id 
    },
  };
}

export default MetricDetailRoute;