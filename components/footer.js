import Button from "./button"
import Isologo from "./isologo"
import Nav from "./nav"

export default function Footer() {
  return (
    <section>
      <div className="cta">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="253"
          height="230"
          fill="none"
          className="background"
        >
          <path
            fill="var(--background)"
            fillRule="evenodd"
            d="M96 127.313c23.372-37.9025 37.213-72.376 37.416-121.02118C133.619-42.3533 118.762-97.8946 96-136 72.6278-98.0973 60.4541-43.5837 60.4541 5.88644 60.2508 54.5316 73.0343 89.2079 96 127.313zm-27.945 35.855c-18.088-12.567-39.8343-20.472-63.61292-21.485C-19.3366 140.669-41.8958 146.345-61 157.29c18.088 12.566 39.8343 20.471 63.61293 21.485 23.98187 1.216 46.33787-4.662 65.44207-15.607zm121.332 15.809c23.779-1.013 45.728-8.918 63.613-21.485-19.104-10.945-41.663-16.823-65.442-15.607-23.779 1.217-45.728 8.919-63.613 21.485 19.104 10.743 41.663 16.621 65.442 15.607zm-119.0964 3.851c-13.8201 3.041-27.2336 9.932-38.6149 20.675C20.0913 214.245 12.3683 227.217 8.10033 241c13.82007-3.04 27.23367-9.932 38.61487-20.674 11.3813-10.743 19.3074-23.715 23.5754-37.498zm74.5874 37.498c11.382 10.742 24.998 17.634 38.615 20.674-4.268-13.783-12.194-26.755-23.575-37.497-11.381-10.743-24.998-17.634-38.615-20.675 4.268 13.783 12.194 26.755 23.575 37.498zM70.2906 136.21c-4.8777-29.592-15.0395-58.1713-36.3793-82.0885C12.5715 30.407-14.0524 14.5973-42.5055 6.89517-37.6278 36.4876-24.824 65.0667-3.48415 88.9839 17.8557 112.901 41.8375 128.508 70.2906 136.21zM200.362 88.9839c21.34-23.7145 34.143-52.2936 39.021-82.08873-28.453 7.49943-55.077 23.30913-76.417 47.22633-21.339 23.7145-34.143 52.2935-39.021 82.0885 28.453-7.702 55.077-23.309 76.417-47.2261z"
            clipRule="evenodd"
            opacity=".15"
          />
        </svg>
        <div className="text">
          <h3>Do you want to talk?</h3>
          <p>Let’s schedule a meeting through Calendly. We’re born to grow.</p>
        </div>
        <Button secondary>Schedule a meeting</Button>
      </div>
      <footer>
        <Isologo />
        <Nav noCta />
        <div className="social" />
        <p>
          We’re an organization that incubates, develops, and partners with
          category leaders within the hemp sector.
        </p>
      </footer>
      <style jsx>{`
        section {
          padding-top: var(--gap);
        }
        .cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          background-color: var(--color-primary);
          color: var(--background);
          padding: var(--gap-half) 100px;
          position: relative;
          overflow: hidden;
        }

        .cta .background {
          position: absolute;
          overflow: visible;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        footer {
          display: grid;
          grid-template-columns: 1fr 14fr 1fr;
          grid-gap: var(--gap-half);
          align-items: center;
          justify-items: center;
          padding: var(--gap);
          padding-bottom: 0;
        }

        footer p {
          border-top: 1px solid #eaeaea;
          padding: var(--gap) 0;
          margin: 0 var(--gap);
          grid-column: 1 / -1;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 850px) {
          .cta {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding: var(--gap);
          }
          .cta .text {
            margin-bottom: var(--gap);
          }
          footer {
            grid-template-columns: 1fr;
          }
          .cta p {
            width: 70%;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
