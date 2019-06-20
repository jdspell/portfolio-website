const nodemailer  = require('nodemailer');
const router = require('express').Router();

require('dotenv').config();

// POST route for contact form
router.route('/')
    .post(sendEmailViaContactForm)

const smmtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: '',
    to: '',
    replyTo: '',
    subject: '',
    html: ''
}

async function sendEmailViaContactForm(req, res) {
    try {
        const { email, name, mailBody } = req.mailBody
        await smmtpTransport.sendMail({
            ...mailOptions,
            to: "mail address",
            replyTo: email,
            subject: `[Portfolio Site]: ${name} sent you a message!`,
            html: `
                <h1>Hello from portfolio contact form.</h1>
                <p>Somebody tried to reach out to you via contact form at the landing page.</p>

                <h4>From: ${name} (${email})</h4>
                <h4>Date: ${new Date()}</h4>
                <p><b>Mail:</b> ${mailBody}</p>
            `
        }, async (err, res) => {
            if(err) throw err;
            await smmtpTransport.close();
        });
        return await res.status(200).json({ message: 'Email has been sent!' });

    } catch (error) {
        return await res.status(500).json({ error: error.message })
    }
}

module.exports = router;