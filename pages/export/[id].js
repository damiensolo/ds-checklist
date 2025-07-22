import React from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import CategoryNav from "../../src/components/CategoryNav";
import Section from "../../src/components/Section";
import data from "../../src/data";
import translations from "../../src/translations/en/index";

const ExportRoute = () => {
  const router = useRouter();
  const { id } = router.query;
  const t = translations;

  if (!id || !data[id]) {
    return (
      <Layout t={t}>
        <div>Category not found</div>
      </Layout>
    );
  }

  const categoryData = data[id];

  return (
    <Layout t={t}>
      <CategoryNav t={t} categoryId={id} />
      {categoryData.sections.map((section, index) => (
        <Section
          key={section.id}
          section={section}
          sectionTranslations={t[id]?.sections?.[section.id]}
          isLast={index === categoryData.sections.length - 1}
          t={t}
        />
      ))}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(data).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}



export default ExportRoute;