import Logo from "./logo"
import Nav from "./nav"

export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;
          max-width: var(--inner-width);
          margin: 0 auto;
        }
      `}</style>
    </header>
  )
}
