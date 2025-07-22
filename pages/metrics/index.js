import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import Button from "../../src/components/Button";
import SectionTitle from "../../src/components/SectionTitle";
import Link from "next/link";
import { useCheckedIds } from "../../src/utilities/checklistsContext";
import s from "./metrics.module.css";
import IconArrowRight from "../../src/icons/arrowRight";

const MetricsRoute = ({ t }) => {
  const { checkedIds } = useCheckedIds();

  // Create a robust fallback translation object
  const defaultTranslations = {
    core: {
      completed: "Completed",
      previous: "Previous", 
      next: "Next",
      exportAction: "Export"
    }
  };

  // Ensure we always have valid translations
  const safeT = (t && t.core) ? t : defaultTranslations;

  const metricsData = {
    id: "metrics",
    sections: [
      {
        id: "business-financial",
        title: "Business & Financial Impact",
        description: "Metrics that connect the design system directly to financial and strategic business goals.",
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
        title: "Adoption & Engagement",
        description: "Track how teams and products are adopting and engaging with your design system.",
        checklist: ["metrics-adoption-rate", "metrics-component-usage", "metrics-contributions", "metrics-documentation-visits", "metrics-team-satisfaction", "metrics-participation-support"]
      },
      {
        id: "product-design-efficiency",
        title: "Product & Design Efficiency", 
        description: "Measure improvements in design and product development workflows.",
        checklist: ["metrics-time-to-market", "metrics-prototype-speed", "metrics-component-library-health", "metrics-component-detachments", "metrics-design-review-time", "metrics-onboarding-time"]
      },
      {
        id: "development-efficiency",
        title: "Development & Engineering Efficiency",
        description: "Track improvements in development speed and engineering workflows.",
        checklist: ["metrics-handoff-time", "metrics-task-completion", "metrics-tech-debt", "metrics-code-complexity", "metrics-linter-warnings", "metrics-system-update-efficiency"]
      },
      {
        id: "quality-ux",
        title: "Quality & User Experience",
        description: "Monitor the impact on product quality and user experience.",
        checklist: ["metrics-ui-consistency", "metrics-accessibility", "metrics-support-tickets", "metrics-design-debt", "metrics-accessibility-score", "metrics-user-satisfaction", "metrics-task-completion-rates"]
      }
    ]
  };

  const metricsTranslations = {
    title: "Design System Metrics",
    description: "Measure the impact and effectiveness of your design system with these key performance indicators and metrics.",
    "business-financial": {
      title: "Business & Financial Impact",
      description: "Metrics that connect the design system directly to financial and strategic business goals."
    },
    "adoption-engagement": {
      title: "Adoption & Engagement",
      description: "Track how teams and products are adopting and engaging with your design system."
    },
    "product-design-efficiency": {
      title: "Product & Design Efficiency",
      description: "Measure improvements in design and product development workflows."
    },
    "development-efficiency": {
      title: "Development & Engineering Efficiency",
      description: "Track improvements in development speed and engineering workflows."
    },
    "quality-ux": {
      title: "Quality & User Experience",
      description: "Monitor the impact on product quality and user experience."
    }
  };

  return (
    <Layout t={safeT}>
      <div className={s.container}>
        <Hero 
          title={metricsTranslations.title}
          subtitle={metricsTranslations.description}
        >
          <Link href="/metrics/business-financial">
            <Button text="Get started" />
          </Link>
        </Hero>
        <div className={s.list}>
          {metricsData.sections.map((sectionData) => {
            const sectionTranslations = metricsTranslations[sectionData.id];
            const total = sectionData.checklist.length;
            const completed = sectionData.checklist.filter((itemId) =>
              checkedIds.includes(itemId)
            ).length;

            return (
              <Link key={sectionData.id} href={`/metrics/${sectionData.id}`}>
                <div className={s.listItem}>
                  <div className={s.sectionOverview}>
                    <SectionTitle
                      title={sectionTranslations.title}
                      total={total}
                      completed={completed}
                      completedLabel={safeT.core.completed}
                    />
                    <p className={s.sectionDescription}>{sectionTranslations.description}</p>
                    <span className={s.arrowRight}>
                      <IconArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  // Simplified approach - just return default English translations for now
  const defaultTranslations = {
    core: {
      completed: "Completed",
      previous: "Previous",
      next: "Next", 
      exportAction: "Export"
    }
  };

  return {
    props: { 
      t: defaultTranslations 
    },
  };
}

export default MetricsRoute;