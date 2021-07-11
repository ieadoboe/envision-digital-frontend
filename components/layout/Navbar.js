import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import classNames from "classnames";

//BUTTON COMPONENT
import Button from "./../elements/Button";

//IMPORT NAVBAR CSS
import styles from "./../../styles/Navbar.module.scss";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignIn: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignIn: false,
};

const Navbar = ({ className, navPosition, hideNav, hideSignIn, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsActive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsActive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  return (
    <header {...props} className={`${styles["site-header"]}`}>
      <div className={`container-2`}>
        <div className={`${styles["site-header-inner"]}`}>
          <ul className={`list-reset`}>
            <li className={`${styles["logo"]}`}>
              <a href="/">
                <Image
                  src="/logo.svg"
                  width={10.3}
                  height={1}
                  alt="company logo"
                  layout="responsive"
                  priority
                />
              </a>
            </li>
          </ul>

          {!hideNav && (
            <>
              <button
                refs={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className={`screen-reader`}>Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link href="/" onClick={closeMenu}>
                        <menu className={`navbar-link`}>Home</menu>
                      </Link>
                    </li>
                    <li>
                      <Link href="/features" onClick={closeMenu}>
                        <menu className={`navbar-link`} >Features</menu>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" onClick={closeMenu}>
                        <menu className={`navbar-link`}>About</menu>
                      </Link>
                    </li>
                  </ul>

                  {!hideSignIn && (
                    <ul className={`list-reset header-nav-right`}>
                      <li>
                        <a href="/contact" onClick={closeMenu}>
                          <Button menu={true}>Contact</Button>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
