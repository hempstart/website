import Button from "./button"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbztTWYj0N1LX41G1YTqbFm3yxo3hYfXd6DanZthISOe7lMfC4g/exec"

const sendEmail = e => {
  e.preventDefault()

  const name = document.getElementsByName("name")[0].value
  const email = document.getElementsByName("email")[0].value
  const message = document.getElementsByName("message")[0].value
  const badBot = document.getElementsByClassName("please-dont")[0].checked

  const values = {
    name,
    email,
    message
  }

  if (!badBot) {
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      alert("Thanks, we will get in touch soon - Hempstart")
    })
  } else {
    alert("Bad bad bot!")
  }
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact us</h2>
      <p>Award winning hemp starts with a message</p>
      <form>
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
        <input
          className="please-dont"
          type="checkbox"
          value="1"
          tabIndex="-1"
          autoComplete="nope"
        />
        <Button type="submit" action={sendEmail}>
          Contact us
        </Button>
      </form>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: var(--full-height);
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
          height: 110%;
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
          max-width: 100%;
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

        .please-dont {
          opacity: 0;
          transform: translate(-500000px);
        }

        form :global(button) {
          grid-column: span 2;
          margin: 0 auto;
          width: 250px;
        }

        @media (min-width: 851px) {
          input {
            width: 350px;
          }
        }

        @media (max-width: 850px) {
          section {
            padding: var(--gap-double) var(--gap);
          }
          form {
            width: 100%;
            grid-template-columns: 1fr;
            grid-gap: 0;
            grid-row-gap: var(--gap);
            grid-template-areas: "name" "email" "message";
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
