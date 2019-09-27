import TextLoop from "react-text-loop"
import Button from "./button"

export default function Why() {
  return (
    <section id="why">
      <div className="title">
        <h5 className="label">Why grow with us</h5>
        <h2>
          Highly profitable cannabis business needs{" "}
          <span className="highlight">
            <TextLoop children={["planification", "strategy"]} />
          </span>
        </h2>
        <p>
          Our network is second to none, we know the drill and all the details
          of this thriving business. Why settle up with just an advisor?
          Hempstart will share all its expertise and knowledge in the area to
          match your expectations and needs. Focus on your project, We focus our
          efforts on you and your stress-free constant growth.
        </p>
        <Button>Schedule a meeting</Button>
      </div>
      <div className="content">
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
          margin-top: var(--gap);
          background-color: #eeefe7;
        }

        .content {
          max-width: var(--inner-width);
          margin: 0 auto;
          position: relative;
          min-height: 450px;
          width: 100%;
        }

        .title {
          max-width: var(--inner-width);
          margin: 0 auto;
          margin-bottom: -100px;
          padding: var(--gap);
        }

        h2 {
          max-width: 100%;
          margin-bottom: var(--gap-half);
        }

        p {
          max-width: 60%;
          margin-bottom: 30px;
        }

        .highlight {
          display: inline-block;
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
          pointer-events: none;
        }

        figure {
          position: absolute;
          margin: 0;
          overflow: hidden;
        }

        figure:nth-child(1) {
          max-width: 500px;
          height: 600px;
          right: 0;
          bottom: 15%;
          z-index: 100;
        }
        figure:nth-child(2) {
          max-width: 400px;
          height: 400px;
          bottom: -20%;
          left: 50%;
          z-index: 50;
        }
        figure:nth-child(3) {
          max-width: 300px;
          height: 300px;
          bottom: -10%;
          right: calc(var(--gap) * -1);
          z-index: 10;
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
            top: 35%;
            bottom: initial;
          }
          figure:nth-child(2) {
            max-width: 45vw;
            height: 45vw;
            top: 50%;
            bottom: initial;
            left: 0;
            z-index: 50;
          }
          figure:nth-child(3) {
            max-width: 26vw;
            height: 26vw;
            top: 80%;
            bottom: initial;
            right: calc(var(--gap) * -1);
            z-index: 10;
          }
        }

        @media (max-width: 850px) {
          h2 {
            max-width: 80%;
          }
          p {
            max-width: 70%;
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
