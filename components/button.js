function Button({ children, secondary = false }) {
  return (
    <button>
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
      `}</style>
    </button>
  )
}

export default Button
