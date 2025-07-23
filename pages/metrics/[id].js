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