import Button from "./button"
import axios from "axios"

const sendEmail = e => {
  e.preventDefault()

  const name = document.getElementsByName("name")[0].value
  const email = document.getElementsByName("email")[0].value
  const message = document.getElementsByName("message")[0].value

  axios({
    method: "post",
    url:
      "http://getsimpleform.com/messages/ajax?form_api_token=5c0a91f87d000cb37cc1690cd3110d44",
    data: {
      name: name,
      email: email,
      message: message
    }
  })
    .then(() => {
      alert("Thank you for contacting us - Hempstart")
    })
    .catch(error => {
      console.log(error)
    })
}
export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact us</h2>
      <p>Award winning cannabis starts with a message</p>
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
          width: 350px;
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

        form :global(button) {
          grid-column: span 2;
          margin: 0 auto;
          width: 250px;
        }

        @media (max-width: 850px) {
          form {
            width: 100%;
            grid-template-columns: 1fr;
            grid-template-areas: "name" "email" "message";
          }
          textarea,
          input {
            width: auto;
          }
        }
      `}</style>
    </section>
  )
}
