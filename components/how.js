import Button from "./button"
import Card from "./card"

export default function How() {
  return (
    <section id="how">
      <div className="inner">
        <h5 className="label">How we solve the problem</h5>
        <h2>We turn cannabis into cash, and cash into cannabis.</h2>
        <div className="cards">
          <Card caption="Rapid Growth" />
          <Card caption="Top Visibility" />
          <Card caption="Strategic Partnerships" />
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: 100vh;
          margin: 0 auto;
          padding: var(--gap-double);
          position: relative;
        }

        section:before {
          content: "";
          display: block;
          width: 100%;
          height: 85%;
          background: #eeefe7;
          position: absolute;
          left: 0;
          right: 0;
          top: -10%;
          bottom: 0;
        }

        .inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          max-width: var(--inner-width);
          margin: 0 auto;
          padding: var(--gap);
        }

        h2 {
          margin-bottom: var(--gap-half);
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: var(--gap);
          width: 100%;
          align-content: center;
          justify-items: center;
          margin: var(--gap) 0 var(--gap-double) 0;
        }
      `}</style>
    </section>
  )
}
