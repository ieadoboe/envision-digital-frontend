import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const Nav = ({ navPosition, hideSignin, hideNav }) => {
  const hamburger = useRef(null)
  const [isActive, setIsactive] = useState(false)
  const nav = useRef(null)

  useEffect(() => {
    isActive && openMenu()
    document.addEventListener('keydown', keyPress)
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('keydown', keyPress)
      document.removeEventListener('click', clickOutside)
      closeMenu()
    }
  })

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active')
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px'
    setIsactive(true)
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active')
    nav.current && (nav.current.style.maxHeight = null)
    setIsactive(false)
  }

  const keyPress = e => {
    isActive && e.keyCode === 27 && closeMenu()
  }

  const clickOutside = e => {
    if (!nav.current) return
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return
    closeMenu()
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner has-bottom-divider">
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames('header-nav', isActive && 'is-active')}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/features">
                        <a>Features</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQs</a>
                      </Link>
                    </li>
                  </ul>
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link
                          href="/contact"
                          className="button button-primary button-wide-mobile button-sm"
                          onClick={closeMenu}
                        >
                          Contact
                        </Link>
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
  )
}

export default Nav
