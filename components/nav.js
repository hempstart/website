import Button from "./button"

export default function Nav({ noCta = false }) {
  return (
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
        {!noCta && (
          <li>
            <Button>Schedule a meeting</Button>
          </li>
        )}
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
        }

        a {
          color: var(--color-primary);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
          transition: background 200ms ease;
          padding: 20px;
          margin: -20px;
        }

        a:hover {
          background: rgba(0, 99, 65, 0.15);
        }

        li {
          display: inline-block;
          margin: 0 2vw;
        }

        li:first-child {
          margin-left: 0;
        }

        li:last-child {
          margin-right: 0;
        }

        @media (max-width: 850px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
