import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "franco@basement.studio",
    pass: "me gusta la pizza"
  }
})

export default function handle(req, res) {
  const mailOptions = {
    from: req.body.email,
    to: receiver,
    name: req.body.name,
    subject: "A new email from your website",
    html: `<p>${req.body.message}</p>`
  }

  // console.log(req.body.name)
  // return transporter.sendMail(mailOptions)
}
