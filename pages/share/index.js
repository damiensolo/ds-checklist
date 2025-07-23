import React from "react";
import Hero from "../../src/components/Hero";
import ExportButton from "../../src/components/ExportButton";
import Layout from "../../src/components/Layout";
import s from "./share.module.css";

const ShareRoute = ({ t }) => {
  return (
    <Layout t={t}>
      <div className={s.container}>
        <Hero title={t.core.exportTitle} subtitle={t.core.exportSubtitle}>
          <ExportButton
            text={t.core.exportAction}
            feedbackText={t.core.exportComplete}
          />
        </Hero>
      </div>
    </Layout>
  );
};

import translations from "../../src/translations";

export async function getStaticProps() {
  return {
    props: { t: translations },
  };
}

export default ShareRoute;
