import TextLoop from "react-text-loop"
import Button from "./button"

export default function Why() {
  return (
    <section id="why">
      <h5 className="label">Why grow with us</h5>
      <h2>
        Highly profitable cannabis business needs{" "}
        <span className="highlight">
          <TextLoop children={["planification", "strategy"]} />
        </span>
      </h2>
      <div className="content">
        <p>
          To shape the cannabis industry’s future by striving for constant
          evolution in products, places, and people.
        </p>
        <Button>Schedule a meeting</Button>
        <div className="images">
          <figure>
            <img src="/static/images/why/1.png" alt="" />
          </figure>
          <figure>
            <img src="/static/images/why/2.png" alt="" />
          </figure>
          <figure>
            <img src="/static/images/why/3.png" alt="" />
          </figure>
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: var(--full-height);
          max-width: var(--inner-width);
          margin: 0 auto;
          margin-top: var(--gap);
          padding: var(--gap);
        }

        .content {
          padding: 0 var(--gap-double);
          position: relative;
          min-height: 600px;
          width: 100%;
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

        .images {
          position: absolute;
          display: flex;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
        }

        figure {
          position: absolute;
          margin: 0;
          overflow: hidden;
          transition: transform 300ms ease-in-out;
          will-change: transform;
        }

        figure:nth-child(1) {
          max-width: 500px;
          height: 600px;
          right: 0;
          bottom: 15%;
          z-index: 100;
          transform: perspective(1000px) rotate(-3deg) rotateY(-18deg)
            rotateX(16deg);
        }
        figure:nth-child(2) {
          max-width: 400px;
          height: 400px;
          bottom: -20%;
          left: 50%;
          z-index: 50;
          transform: perspective(1000px) rotate(0deg) rotateY(5deg)
            rotateX(5deg) translateX(-50%);
        }
        figure:nth-child(3) {
          max-width: 300px;
          height: 300px;
          bottom: -10%;
          right: calc(var(--gap) * -1);
          z-index: 10;
        }

        figure:hover {
          transform: perspective(1000px) rotate(0) rotateY(0) rotateX(0);
        }

        figure:nth-child(2):hover {
          transform: perspective(1000px) rotate(0) rotateY(0) rotateX(0)
            translateX(-50%);
        }

        img {
          width: 100%;
          object-fit: cover;
        }

        @media (max-width: 1300px) {
          .images {
            position: relative;
            display: flex;
            min-height: 85vh;
            height: 100%;
            width: 100%;
            margin-top: -200px;
          }
          figure:nth-child(1) {
            max-width: 50vw;
            height: 61vw;
            right: 0;
            top: 25%;
            bottom: initial;
            transform: none;
          }
          figure:nth-child(2) {
            max-width: 45vw;
            height: 45vw;
            top: 50%;
            bottom: initial;
            left: 0;
            z-index: 50;
            transform: none;
          }
          figure:nth-child(3) {
            max-width: 26vw;
            height: 26vw;
            top: 80%;
            bottom: initial;
            right: calc(var(--gap) * -1);
            z-index: 10;
          }
          figure:nth-child(2):hover,
          figure:hover {
            transform: none;
          }
        }

        @media (max-width: 850px) {
          h2 {
            max-width: 90%;
          }
          .content {
            padding: 0 var(--gap);
          }
          .images {
            position: relative;
            display: flex;
            min-height: 65vh;
            height: 100%;
            width: 100%;
            margin-top: -100px;
          }
        }
      `}</style>
    </section>
  )
}
