import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../utilities/themeContext";
import s from "./Header.module.css";

const Header = ({ t }) => {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const [active, setActive] = useState(false);
  const rightSectionClassName = classnames(s.rightSection, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);

  const toggleMenu = useCallback((flag) => {
    setActive((prev) => {
      const nextActive = flag === undefined ? !prev : flag;
      document.body.style.overflow = nextActive ? "hidden" : "auto";
      return nextActive;
    });
  }, []);

  const closeMenu = useCallback(() => toggleMenu(false), []);

  const navigate = (e, to) => {
    e.preventDefault();
    closeMenu();
    router.push(to);
  };

  return (
    <header className={s.container}>
      <span className={s.logo}>
        <Link href="/" className={s.logo}>
          <img 
            src="/sd-logo.png" 
            alt="SD Logo" 
            className={`${s.logoImage} ${isDarkMode ? s.logoDark : s.logoLight}`}
            onClick={closeMenu}
          />
        </Link>
        <Link href="/">
          <span onClick={closeMenu}>Design System Checklist</span>
        </Link>
      </span>

      <div className={rightSectionClassName}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            <li className={s.item}>
              <Link href="/" className={router.pathname === "/" ? s.active : ""}>
                Build
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/metrics" className={router.pathname === "/metrics" ? s.active : ""}>
                Measure
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/about">
                {t?.core?.about || "About"}
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/share">
                {t?.core?.share || "Share"}
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;