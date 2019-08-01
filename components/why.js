import TextLoop from "react-text-loop"
import Button from "./button"

export default function Why() {
  return (
    <section id="why">
      <h5 className="label">Why grow with us</h5>
      <h2>
        Highly profitable cannabis business needs{" "}
        <span className="highlight">
          <TextLoop
            children={[
              "planification",
              "strategy",
              "continuous growth",
              "Stability"
            ]}
          />
        </span>
      </h2>
      <div className="content">
        <p>
          To shape the cannabis industry’s future by striving for constant
          evolution in products, places, and people.
        </p>
        <Button>Schedule a meeting</Button>
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: 100vh;
          max-width: var(--inner-width);
          margin: 0 auto;
          padding: var(--gap);
        }

        .content {
          padding: 0 var(--gap-double);
        }

        h2 {
          margin-bottom: var(--gap-half);
        }

        p {
          max-width: 28ch;
          margin-bottom: 30px;
        }

        .highlight {
          color: var(--color-secondary);
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}
