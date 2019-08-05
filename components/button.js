function Button({ children, secondary = false, type }) {
  return (
    <button type={type}>
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
