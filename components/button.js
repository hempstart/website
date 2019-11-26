import cn from "classnames"

const onClick = () => {
  window.open(
    "https://calendly.com/hempstart",
    "Schedule a meeting",
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, height=650, width=500, centerscreen=yes"
  )
}

function Button({ action, children, secondary = false, minimal }) {
  return (
    <button
      className={cn({ minimal, secondary })}
      type="button"
      onClick={action || onClick}
    >
      {children}
      <style jsx>{`
        button {
          background: var(--color-primary);
          color: var(--background);
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 800;
          padding: 1.8em 2.5em;
          letter-spacing: 2px;
          line-height: 1em;
          transition: opacity 200ms ease;
          cursor: pointer;
        }

        button.secondary {
          background: var(--background);
          color: var(--color-primary);
        }

        button.minimal {
          vertical-align: baseline;
          text-decoration: underline;
          padding: 0;
          color: inherit;
          letter-spacing: 0;
          text-transform: none;
          font-weight: inherit;
          background: none;
          font-size: calc(18px + (24 - 18) * (100vw - 375px) / (1920 - 375));
          line-height: 1.5em;
          margin: 0;
          font-family: "Futura New Book";
        }

        button:hover {
          opacity: 0.9;
        }

        @media (max-width: 850px) {
          button {
            width: 100%;
          }
        }
        @media (max-width: 320px) {
          button {
            font-size: 12px;
          }
        }
      `}</style>
    </button>
  )
}

export default Button
