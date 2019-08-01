import Button from "./button"

export default function Nav({ noCta = false }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#why">Why</a>
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
        }

        a {
          color: var(--color-primary);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
        }

        li {
          display: inline-block;
          margin: 0 3em;
        }

        li:first-child {
          margin-left: 0;
        }

        li:last-child {
          margin-right: 0;
        }
      `}</style>
    </nav>
  )
}
