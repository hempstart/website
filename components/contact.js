import Button from "./button"

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact us</h2>
      <p>Award winning cannabis starts with a message</p>
      <form action="">
        <label htmlFor="name" className="name">
          Name
          <input name="name" type="text" />
        </label>
        <label htmlFor="email" className="email">
          Email
          <input name="email" type="email" />
        </label>
        <label htmlFor="message" className="message">
          Message
          <textarea name="message" id="" cols="30" rows="10" />
        </label>
        <Button>Contact us</Button>
      </form>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          margin: 0 auto;
          padding: var(--gap-double);
          position: relative;
        }

        section > * {
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
          top: -10%;
          bottom: 0;
          z-index: 0;
        }

        h2 {
          margin-bottom: var(--gap-half);
        }

        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "name email" "message message";
          grid-gap: var(--gap-half);
          margin: var(--gap) 0;
          align-content: center;
        }

        label {
          display: flex;
          flex-direction: column;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #9b9b9b;
          transition: color 200ms ease;
        }

        label:focus-within {
          color: var(--color-primary);
        }

        input {
          width: 350px;
        }

        textarea {
          resize: none;
        }

        textarea,
        input {
          font-size: 18px;
          padding: 20px 15px;
          background: var(--background);
          border: 1px solid transparent;
          margin-top: 0.5em;
          transition: all 200ms ease;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 7px 30px rgba(82, 82, 107, 0.15);
        }

        .name {
          grid-area: name;
        }

        .email {
          grid-area: email;
        }

        .message {
          grid-area: message;
        }

        form :global(button) {
          grid-column: span 2;
          margin: 0 auto;
          width: 250px;
        }
      `}</style>
    </section>
  )
}
