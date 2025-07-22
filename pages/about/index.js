import React from "react";
import Layout from "../../src/components/Layout";
import translations from "../../src/translations/en";
import s from "./about.module.css";

const AboutRoute = () => {
  const t = translations;

  return (
    <Layout t={t}>
      <div className={s.container}>
        <h1>About Design System Checklist</h1>
        <p>
          An open-source checklist to help you plan, build and grow your design
          system.
        </p>
      </div>
    </Layout>
  );
};

export default AboutRoute;