import Logo from "./logo"
import Nav from "./nav"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
      <MobileMenu />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;
          max-width: var(--inner-width);
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          header {
            padding: 25px 20px;
            position: fixed;
            z-index: 1000;
            width: 100%;
            background: var(--background);
          }
        }
      `}</style>
    </header>
  )
}
