import React from "react";
import Layout from "../../src/components/Layout";
import Hero from "../../src/components/Hero";
import Section from "../../src/components/Section";
import CategoryNav from "../../src/components/CategoryNav";
import { useCheckedIds } from "../../src/utilities/checklistsContext";
import s from "./metrics.module.css";

const MetricsSectionRoute = ({ t, sectionId }) => {
  const { checkedIds } = useCheckedIds();

  const metricsData = {
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
          description: "Measure the increase in team capacity and the ability to build and launch new products or features more quickly."
        }
      }
    },
    "adoption-engagement": {
      title: "Adoption & Engagement",
      description: "Track how teams and products are adopting and engaging with your design system.",
      checklist: {
        "metrics-adoption-rate": {
          title: "Adoption Rate",
          description: "Calculate the percentage of products/teams using the design system."
        },
        "metrics-component-usage": {
          title: "Component & Library Usage",
          description: "Track frequency and usage stats from design tools (e.g., Figma)."
        },
        "metrics-contributions": {
          title: "Contributions to the System",
          description: "Monitor the number of contributions (e.g., new components, bug fixes) from various teams, indicating a collaborative and valued system."
        },
        "metrics-documentation-visits": {
          title: "Documentation Visits",
          description: "Measure engagement with the design system's documentation to see if it's a helpful and frequently used resource."
        },
        "metrics-team-satisfaction": {
          title: "Team Satisfaction Surveys",
          description: "Collect qualitative feedback from design, development, and product teams to gauge their satisfaction and identify areas for improvement."
        },
        "metrics-participation-support": {
          title: "Participation & Support",
          description: "Track attendance at design system meetings ('office hours') and the number of support questions, which should decrease as the system matures."
        }
      }
    },
    "product-design-efficiency": {
      title: "Product & Design Efficiency",
      description: "Measure improvements in design and product development workflows.",
      checklist: {
        "metrics-time-to-market": {
          title: "Time to Market",
          description: "Measure reduction in time from idea to launched feature."
        },
        "metrics-prototype-speed": {
          title: "Prototype Speed", 
          description: "Track the acceleration in how quickly new feature prototypes can be created and tested."
        },
        "metrics-component-library-health": {
          title: "Component Library Health",
          description: "Monitor the growth of reusable components in the system and track total components available."
        },
        "metrics-component-detachments": {
          title: "Component Detachments (Figma)",
          description: "Track how often designers detach from components, which can signal gaps or usability issues in the system."
        },
        "metrics-design-review-time": {
          title: "Design Review Time",
          description: "Measure the reduction in time spent in design review cycles due to a shared understanding of patterns and components."
        },
        "metrics-onboarding-time": {
          title: "Onboarding Time",
          description: "Monitor the time saved when onboarding new designers and developers, as they can get up to speed with established patterns quickly."
        }
      }
    },
    "development-efficiency": {
      title: "Development & Engineering Efficiency",
      description: "Track improvements in development speed and engineering workflows.",
      checklist: {
        "metrics-handoff-time": {
          title: "Design-to-Development Handoff Time",
          description: "Measure the speed and efficiency of the handoff process."
        },
        "metrics-task-completion": {
          title: "Average Task Completion Time",
          description: "Compare developer time spent on UI tasks before and after."
        },
        "metrics-tech-debt": {
          title: "Reduction in Technical Debt",
          description: "Track the decrease in UI-related technical debt by measuring the reuse of standardized, pre-vetted code."
        },
        "metrics-code-complexity": {
          title: "Code Complexity",
          description: "Monitor for a reduction in code complexity and the need for refactoring, thanks to component reuse."
        },
        "metrics-linter-warnings": {
          title: "Linter Warnings",
          description: "Track the number of UI-related linter warnings, which should decrease significantly with a standardized codebase."
        },
        "metrics-system-update-efficiency": {
          title: "System-Wide Update Efficiency",
          description: "Measure the reduction in time and effort required to implement system-wide design changes or platform upgrades."
        }
      }
    },
    "quality-ux": {
      title: "Quality & User Experience",
      description: "Monitor the impact on product quality and user experience.",
      checklist: {
        "metrics-ui-consistency": {
          title: "UI Consistency",
          description: "Measure the reduction in visual inconsistencies and UI bugs."
        },
        "metrics-accessibility": {
          title: "Accessibility Score/Issues",
          description: "Track improvements in accessibility audit scores and fewer bugs."
        },
        "metrics-support-tickets": {
          title: "Support Ticket Reduction",
          description: "Track the decrease in support tickets related to UI confusion or usability problems."
        },
        "metrics-design-debt": {
          title: "Reduction in Design Debt",
          description: "Monitor the decrease in the number of design debt tickets and 'snowflake' components (one-off designs)."
        },
        "metrics-accessibility-score": {
          title: "Accessibility Score",
          description: "Track improvements in automated accessibility audit scores (e.g., WCAG compliance)."
        },
        "metrics-user-satisfaction": {
          title: "User Satisfaction",
          description: "Monitor changes in user satisfaction scores (e.g., CSAT, NPS) related to the product's interface and usability."
        },
        "metrics-task-completion-rates": {
          title: "Task Completion Rates",
          description: "Measure improvements in the success rate of users completing key tasks within the product."
        }
      }
    }
  };

  const section = metricsData.sections.find(s => s.id === sectionId);
  const sectionTranslations = metricsTranslations[sectionId];

  if (!section || !sectionTranslations) {
    return null;
  }

  const currentIndex = metricsData.sections.findIndex(s => s.id === sectionId);
  const previous = currentIndex > 0 ? metricsData.sections[currentIndex - 1] : null;
  const next = currentIndex < metricsData.sections.length - 1 ? metricsData.sections[currentIndex + 1] : null;

  const sectionData = {
    title: sectionTranslations.title,
    description: sectionTranslations.description,
    id: section.id,
    checklist: section.checklist.map((id) => ({
      id,
      title: sectionTranslations.checklist[id].title,
      description: sectionTranslations.checklist[id].description,
    })),
    resources: []
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero 
          title="Design System Metrics"
          subtitle="Measure the impact and effectiveness of your design system with these key performance indicators and metrics."
        />
        <div className={s.content}>
          <Section
            section={sectionData}
            completedLabel={t.core.completed}
          />
          <CategoryNav
            previousLabel={t.core.previous}
            nextLabel={t.core.next}
            next={
              next
                ? { text: next.title, url: `/metrics/${next.id}/` }
                : { text: t.core.exportAction, url: "/share/" }
            }
            previous={
              previous && {
                text: previous.title,
                url: `/metrics/${previous.id}/`,
              }
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      "/metrics/adoption-engagement",
      "/metrics/business-financial", 
      "/metrics/development-efficiency",
      "/metrics/product-design-efficiency",
      "/metrics/quality-ux",
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const t = (await import('../../src/translations/en/index')).default;

  return {
    props: { 
      t,
      sectionId: params.id 
    },
  };
}

export default MetricsSectionRoute;