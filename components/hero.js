import Button from "./button"

export default function Hero() {
  return (
    <section>
      <h1>Born to Grow</h1>
      <p>
        To shape the cannabis industry’s future by striving for constant
        evolution in products, places, and people.
      </p>
      <Button secondary>Schedule a meeting</Button>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: calc(100vh - 250px);
          background: url("./static/images/hero.png");
          max-width: var(--inner-width);
          margin: 0 auto;
          padding: var(--gap);
          opacity: 0;
          animation: fadein 400ms ease-in-out forwards;
          animation-delay: 600ms;
        }

        h1,
        p {
          color: var(--background);
          margin-bottom: var(--gap-half);
        }

        p {
          max-width: 45%;
        }

        @media (max-width: 850px) {
          section {
            min-height: 80vh;
            height: auto;
            padding-top: 88px;
          }
          h1,
          p {
            margin-bottom: var(--gap);
          }
          p {
            max-width: 80%;
          }
        }

        @keyframes fadein {
          to {
            opacity: 1;
          }
        }

        @media (max-width: 320px) {
          h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  )
}
