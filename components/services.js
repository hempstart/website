import ServicesGrid from "./services-grid"

function Services() {
  return (
    <section id="services">
      <div className="inner">
        <h5 className="label">Our Services</h5>
        <h2>Hemp & Related Consulting Services</h2>
        <p>
          Most of the United States now contain at least some form of medical or
          adult use cannabis law. Because of this, traditional business
          challenges emerge, such as operational efficiency, quality control,
          regulatory compliance and market penetration. Hempstart provides both
          hemp consulting and auxiliary services to meet your current and future
          needs. When it’s time to grow, we provide the proper environment.
        </p>
        <ServicesGrid />
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin: var(--gap) auto;
          padding: var(--gap);
        }

        .inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          max-width: var(--inner-width);
          margin: 0 auto;
          padding: 0 var(--gap);
        }

        h2 {
          margin-bottom: var(--gap-half);
        }

        p {
          max-width: 80%;
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

        @media (max-width: 850px) {
          .cards {
            grid-template-columns: 1fr;
            grid-row-gap: 80px;
          }
          p {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
