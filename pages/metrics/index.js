import React from "react";
import Link from "next/link";
import Layout from "../../src/components/Layout";
import SectionTitle from "../../src/components/SectionTitle";
import ArrowRightIcon from "../../src/icons/arrowRight";
import translations from "../../src/translations/en";
import { useCheckedIds } from "../../src/utilities/checklistsContext";
import s from "./metrics.module.css";

const metricsCategories = [
  {
    id: "business-financial",
    title: "Business & Financial Impact",
    description: "Metrics that connect the design system directly to financial and strategic business goals.",
  },
  {
    id: "adoption-engagement", 
    title: "Adoption & Engagement",
    description: "Metrics that measure how widely and effectively the design system is being used across teams.",
  },
  {
    id: "quality-consistency",
    title: "Quality & Consistency", 
    description: "Metrics that evaluate the design system's impact on product quality and user experience consistency.",
  },
  {
    id: "developer-experience",
    title: "Developer Experience",
    description: "Metrics that measure how the design system affects developer productivity and satisfaction.",
  }
];

const MetricsRoute = () => {
  const t = translations;
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    return (
      <Link href={`/metrics/${item.id}/`} key={item.id}>
        <a className={s.listItem}>
          <div className={s.sectionOverview}>
            <SectionTitle
              title={item.title}
              key={item.id}
              total={0}
              completed={0}
              completedLabel={t.core.completed}
            />
            <div className={s.sectionDescription}>{item.description}</div>
          </div>
          <div className={s.arrowRight}>
            <ArrowRightIcon />
          </div>
        </a>
      </Link>
    );
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <h1>Design System Metrics</h1>
        <p>Track and measure the success of your design system with these key performance indicators.</p>
        <ul className={s.list}>{metricsCategories.map(renderItem)}</ul>
      </div>
    </Layout>
  );
};

export default MetricsRoute;