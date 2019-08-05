import Logo from "./logo"
import Nav from "./nav"
import MobileMenu from "./mobile-menu"

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

        @media (max-width: 850px) {
          header {
            padding: 25px 0;
          }
        }
      `}</style>
    </header>
  )
}
