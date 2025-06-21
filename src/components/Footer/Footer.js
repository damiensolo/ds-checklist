
import React from "react";
import { useTheme } from "../../utilities/themeContext";
import s from "./Footer.module.css";

const Footer = ({ t }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={s.root}>
      <div className={s.content}>
        <h2 className={s.title}>{t.footerTitle}</h2>
        <p className={s.text}>{t.footerText}</p>
      </div>
    </div>
  );
};

export default Footer;
