
import React from "react";
import Hero from "../../src/components/Hero";
import Layout from "../../src/components/Layout";
import Checklist from "../../src/components/Checklist";
import Section from "../../src/components/Section";
import s from "./metrics.module.css";

const MetricsRoute = ({ t }) => {
  const metricsData = {
    id: "metrics",
    sections: [
      {
        id: "business-financial",
        title: "Business & Financial Impact",
        checklist: ["metrics-roi", "metrics-time-to-value", "metrics-cost-savings"]
      },
      {
        id: "adoption-engagement", 
        title: "Adoption & Engagement",
        checklist: ["metrics-adoption-rate", "metrics-component-usage", "metrics-contributions"]
      },
      {
        id: "product-design-efficiency",
        title: "Product & Design Efficiency", 
        checklist: ["metrics-time-to-market", "metrics-prototype-speed"]
      },
      {
        id: "development-efficiency",
        title: "Development & Engineering Efficiency",
        checklist: ["metrics-handoff-time", "metrics-task-completion", "metrics-tech-debt"]
      },
      {
        id: "quality-ux",
        title: "Quality & User Experience",
        checklist: ["metrics-ui-consistency", "metrics-accessibility", "metrics-support-tickets"]
      }
    ]
  };

  const metricsTranslations = {
    title: "Design System Metrics",
    description: "Measure the impact and effectiveness of your design system with these key performance indicators and metrics.",
    sections: {
      "business-financial": {
        title: "Business & Financial Impact",
        items: {
          "metrics-roi": {
            title: "Return on Investment (ROI)",
            description: "Measure financial gains against the investment cost."
          },
          "metrics-time-to-value": {
            title: "Time to Value", 
            description: "Track the time from investment to measurable financial returns."
          },
          "metrics-cost-savings": {
            title: "Cost Savings",
            description: "Calculate savings from increased efficiency and reduced redundant work."
          }
        }
      },
      "adoption-engagement": {
        title: "Adoption & Engagement",
        items: {
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
            description: "Monitor contributions (new components, fixes) from various teams."
          }
        }
      },
      "product-design-efficiency": {
        title: "Product & Design Efficiency",
        items: {
          "metrics-time-to-market": {
            title: "Time to Market",
            description: "Measure reduction in time from idea to launched feature."
          },
          "metrics-prototype-speed": {
            title: "Prototype Speed", 
            description: "Track acceleration in creating and testing new prototypes."
          }
        }
      },
      "development-efficiency": {
        title: "Development & Engineering Efficiency",
        items: {
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
            description: "Track the decrease in UI-related tech debt through component reuse."
          }
        }
      },
      "quality-ux": {
        title: "Quality & User Experience",
        items: {
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
            description: "Track the decrease in UI-related support tickets."
          }
        }
      }
    }
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero 
          title={metricsTranslations.title}
          subtitle={metricsTranslations.description}
        />
        <div className={s.sections}>
          {metricsData.sections.map((section) => {
            const sectionTranslations = metricsTranslations.sections[section.id];
            
            return (
              <Section
                key={section.id}
                title={sectionTranslations.title}
                id={section.id}
              >
                <Checklist
                  items={section.checklist}
                  translations={sectionTranslations.items}
                />
              </Section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const t = (await import(`../../src/translations/${locale}/index`)).default;

  return {
    props: { t },
  };
}

export default MetricsRoute;
