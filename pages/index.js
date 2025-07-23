import React from "react";
import Link from "next/link";
import Layout from "../src/components/Layout";
import Button from "../src/components/Button";
import Hero from "../src/components/Hero";
import SectionTitle from "../src/components/SectionTitle";
import ArrowRightIcon from "../src/icons/arrowRight";
import data from "../src/data";
import { useCheckedIds } from "../src/utilities/checklistsContext";
import s from "./index.module.css";

const HomeRoute = (props) => {
  const { t } = props;
  const keys = Object.keys(data);
  const items = keys.map((k) => data[k]);
  const { checkedIds } = useCheckedIds();

  const renderItem = (item) => {
    let total = 0;
    let completed = 0;

    item.sections.forEach((section) => {
      total += section.checklist.length;
      completed += section.checklist.filter((id) => {
        return checkedIds.includes(id);
      }).length;
    });

    return (
      <Link 
        key={item.id} 
        href={`/category/${item.id}`}
        className={s.listItem}
      >
        <div className={s.sectionOverview}>
          <h3>{t?.[item.id]?.title}</h3>
          <p className={s.sectionDescription}></p>
          <span className={s.arrowRight}>
            <ArrowRightIcon />
          </span>
        </div>
      </Link>
    );
  };

  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero title={t.core.heroTitle} subtitle={t.core.heroSubtitle}>
          <Link href="/category/design-language">
            <Button text={t.core.heroAction} />
          </Link>
        </Hero>
        <ul className={s.list}>{items.map(renderItem)}</ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const targetLocale = locale || 'en';
  try {
    const t = (await import(`../src/translations/${targetLocale}/index`)).default;
    return {
      props: { t },
    };
  } catch (error) {
    console.error(`Failed to load translations for locale: ${targetLocale}`, error);
    // Fallback to English translations
    const t = (await import(`../src/translations/en/index`)).default;
    return {
      props: { t },
    };
  }
}

export default HomeRoute;