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
    },
    {
      id: "adoption-engagement",
      checklist: [
        "metrics-adoption-rate",
        "metrics-component-usage",
        "metrics-contributions",
        "metrics-documentation-visits",
        "metrics-team-satisfaction",
        "metrics-participation-support"
      ]
    },
    {
      id: "product-design-efficiency",
      checklist: [
        "metrics-time-to-market",
        "metrics-prototype-speed",
        "metrics-component-library-health",
        "metrics-component-detachments",
        "metrics-design-review-time",
        "metrics-onboarding-time"
      ]
    },
    {
      id: "development-efficiency",
      checklist: [
        "metrics-handoff-time",
        "metrics-task-completion",
        "metrics-tech-debt",
        "metrics-code-complexity",
        "metrics-linter-warnings",
        "metrics-system-update-efficiency"
      ]
    },
    {
      id: "quality-ux",
      checklist: [
        "metrics-ui-consistency",
        "metrics-accessibility",
        "metrics-support-tickets",
        "metrics-design-debt",
        "metrics-accessibility-score",
        "metrics-user-satisfaction",
        "metrics-task-completion-rates"
      ]
    }
  ]
};



const MetricDetailRoute = ({ t, sectionId }) => {
  const section = metricsData.sections.find(s => s.id === sectionId);
  const sectionTranslations = t.metrics[sectionId];

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
      { params: { id: "business-financial" } },
      { params: { id: "adoption-engagement" } },
      { params: { id: "product-design-efficiency" } },
      { params: { id: "development-efficiency" } },
      { params: { id: "quality-ux" } }
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