import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Navbar = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

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
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
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
    <header className='container'>
    <div className='navbar-inner'>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.svg" width={176.49} height={17} />
          </a>
        </Link>
      </div>

      {!hideNav && (
        <>
          <button
            ref={hamburger}
            className="header-nav-toggle"
            onClick={isActive ? closeMenu : openMenu}
          >
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <nav
            ref={nav}
            className={classNames("header-nav", isActive && "is-active")}
          >
            <ul className="nav-items header-nav-right">
              <li>
                <Link href="/">
                  <a className="cool-link">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/features">
                  <a className="cool-link">Features</a>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <a className="cool-link">About</a>
                </Link>
              </li>

              <li>
                <Link href="/faq">
                  <a className="cool-link">FAQs</a>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
      <div>
        {!hideSignin && (
          <Link href="/contact">
            <a className="btn-primary">Contact</a>
          </Link>
        )}
      </div>
      </div>
    </header>
  );
};

export default Navbar;
