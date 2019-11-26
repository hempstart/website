import Card from "./card"

function How() {
  return (
    <section id="how">
      <div className="inner">
        <h5 className="label">How we solve the problem</h5>
        <h2>We turn hemp into cash, and cash into hemp.</h2>
        <p>
          Investing in the hemp industry is not difficult, but since it’s a new
          environment there are lots of fine print that you will need to take
          into consideration. We provide safe paths for you to start your
          business in the industry, grow with us.
        </p>
        <div className="cards">
          <Card
            image="/static/images/how/1.png"
            caption="Rapid Growth"
            text="When any industry is on its early stage growth can be easier, and faster. Contact us and know the possibilities on your state, start your Hemp business today."
          />
          <Card
            image="/static/images/how/2.png"
            caption="Top Visibility"
            text="Our brands are bold, intrepid, and focused on their products. That’s how they stand out. Visibility is key on a crowded environment. We have you covered."
          />
          <Card
            image="/static/images/how/3.png"
            caption="Strategic Partnerships"
            text="Based on what we learn, we shape strategic partnerships with our clients improving their business market knowledge."
          />
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          height: var(--full-height);
          margin: var(--gap-double) auto;
          padding: var(--gap-double) 0;
          position: relative;
        }

        section:before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: #eeefe7;
          position: absolute;
          left: 0;
          right: 0;
          top: -20%;
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

        p {
          max-width: 60%;
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: var(--gap);
          width: 100%;
          align-content: center;
          justify-items: center;
          margin: var(--gap) 0;
        }

        @media (max-width: 850px) {
          .cards {
            grid-template-columns: 1fr;
            grid-row-gap: 80px;
          }
          p {
            max-width: 70%;
          }
        }
      `}</style>
    </section>
  )
}

export default How
