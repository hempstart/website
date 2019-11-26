import React, { useState } from "react"
import Button from "./button"

function MobileMenu() {
  const [open, toggleOpen] = useState(false)

  return (
    <div
      role="menu"
      className={open ? "menu open" : "menu"}
      tabIndex={0}
      onKeyDown={() => {
        toggleOpen(!open)
      }}
      onClick={() => {
        toggleOpen(!open)
      }}
    >
      MENU
      <div className="overlay">
        <nav>
          <ul>
            <li>
              <a href="#why">Why</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#how">How</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Button>Schedule a meeting</Button>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .menu.open .overlay {
          transform: translateX(calc(-100% + 67px));
        }

        nav {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          flex-direction: column;
          padding: 0 40px;
        }

        a {
          color: var(--color-primary);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
        }

        li {
          display: block;
          margin: 2em 0;
          text-align: center;
        }

        .overlay {
          position: fixed;
          height: 100vh;
          width: 100vw;
          top: 88px;
          background: var(--background);
          transform: translateX(100%);
          transition: transform 800ms ease-in-out;
          z-index: 1000;
        }

        @media (min-width: 850px) {
          .menu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default MobileMenu
