import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../utilities/themeContext";
import s from "./Header.module.css";

const Header = ({ t }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  const [active, setActive] = useState(false);
  const rightSectionClassName = classnames(s.rightSection, active && s["active"]);
  const burgerClassName = classnames(s.burger, active && s["active"]);

  const toggleMenu = useCallback((flag) => {
    setActive((prev) => {
      const nextActive = flag === undefined ? !prev : flag;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = nextActive ? "hidden" : "auto";
      }
      return nextActive;
    });
  }, []);

  const closeMenu = useCallback(() => toggleMenu(false), [toggleMenu]);

  const navigate = (e, to) => {
    e.preventDefault();
    closeMenu();
    router.push(to);
  };

  return (
    <header className={s.container}>
      <div className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          <img
              className={`${s.logoImage} ${
                !mounted ? s.logoDark : theme === "dark" ? s.logoLight : s.logoDark
              }`}
              src={!mounted ? "/sd-logo-dark.png" : theme === "dark" ? "/sd-logo.png" : "/sd-logo-dark.png"}
              alt="Design System Checklist"
              width="30"
              height="30"
            />
        </Link>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </div>

      <div className={rightSectionClassName}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            <li className={s.item}>
              <Link 
                href="/" 
                className={router.pathname === "/" ? s.active : ""}
                onClick={closeMenu}
              >
                Checklist
              </Link>
            </li>
            <li className={s.item}>
              <Link 
                href="/metrics" 
                className={router.pathname === "/metrics" || router.pathname.startsWith("/metrics/") ? s.active : ""}
                onClick={closeMenu}
              >
                Measure
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/about" onClick={closeMenu}>
                {t?.core?.about || "About"}
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/share" onClick={closeMenu}>
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