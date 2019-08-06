const onClick = () => {
  window.open(
    "https://calendly.com/hempstart",
    "Schedule a meeting",
    "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, height=650, width=500, centerscreen=yes"
  )
}

function Button({ children, secondary = false, type }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          background: ${secondary
            ? "var(--background);"
            : "var(--color-primary);"};
          color: ${secondary ? "var(--color-primary);" : "var(--background);"};
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 800;
          padding: 1.8em 2.5em;
          letter-spacing: 2px;
          line-height: 1em;
          transition: opacity 200ms ease;
          cursor: pointer;
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
