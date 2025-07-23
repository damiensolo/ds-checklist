
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../utilities/themeContext";
import s from "./Header.module.css";

const Header = ({ t }) => {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Ensure client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Clean menu state management
  const toggleMenu = useCallback((force) => {
    setMenuActive(prev => {
      const nextState = force !== undefined ? force : !prev;
      
      // Only manipulate DOM on client side
      if (typeof window !== 'undefined') {
        document.body.style.overflow = nextState ? "hidden" : "auto";
      }
      
      return nextState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    toggleMenu(false);
  }, [toggleMenu]);

  // Navigation handler
  const handleNavigation = useCallback((e, href) => {
    e.preventDefault();
    closeMenu();
    router.push(href);
  }, [router, closeMenu]);

  // CSS classes
  const rightSectionClass = classnames(s.rightSection, {
    [s.active]: menuActive
  });
  
  const burgerClass = classnames(s.burger, {
    [s.active]: menuActive
  });

  // Logo configuration - prevent hydration mismatch
  const logoConfig = {
    src: isClient && isDarkMode ? "/sd-logo-dark.png" : "/sd-logo.png",
    className: isClient && isDarkMode ? s.logoDark : s.logoLight
  };

  // Navigation items
  const navItems = [
    {
      href: "/",
      label: "Checklist",
      isActive: router.pathname === "/"
    },
    {
      href: "/metrics",
      label: "Measure", 
      isActive: router.pathname === "/metrics" || router.pathname.startsWith("/metrics/")
    },
    {
      href: "/about",
      label: t?.core?.about || "About",
      isActive: router.pathname === "/about"
    },
    {
      href: "/share",
      label: t?.core?.share || "Share",
      isActive: router.pathname === "/share"
    }
  ];

  return (
    <header className={s.container}>
      {/* Logo Section */}
      <div className={s.logo}>
        <Link href="/" onClick={closeMenu}>
          <img
            src={logoConfig.src}
            alt="SD Logo"
            className={`${s.logoImage} ${logoConfig.className}`}
          />
        </Link>
        <Link href="/" onClick={closeMenu}>
          Design System Checklist
        </Link>
      </div>

      {/* Navigation Section */}
      <div className={rightSectionClass}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            {navItems.map(({ href, label, isActive }) => (
              <li key={href} className={s.item}>
                <Link 
                  href={href}
                  className={isActive ? s.active : ""}
                  onClick={(e) => handleNavigation(e, href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className={burgerClass} 
        onClick={() => toggleMenu()}
        aria-label="Toggle menu"
      >
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;
