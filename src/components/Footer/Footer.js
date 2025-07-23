
import React from "react";
import { useTheme } from "../../utilities/themeContext";
import s from "./Footer.module.css";

const Footer = ({ t }) => {
  const { isDarkMode } = useTheme();

  // Provide fallback values if t or t.core is undefined
  const footerTitle = t?.core?.footerTitle || "";
  const footerText = t?.core?.footerText || "";

  return (
    <div className={s.root}>
      <div className={s.content}>
        <h2 className={s.title}>{footerTitle}</h2>
        <p className={s.text}>{footerText}</p>
      </div>
    </div>
  );
};

export default Footer;
