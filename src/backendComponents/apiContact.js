const nodemailer  = require('nodemailer');
const router = require('express').Router();

require('dotenv').config();

// POST route for contact form
router.post('/', sendEmailViaContactForm);

const smmtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
        user: process.env.SENDER_GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.SENDER_GMAIL_ADDRESS,
    to: '',
    replyTo: '',
    subject: '',
    html: ''
}

async function sendEmailViaContactForm(req, res) {
    console.log(req.body);
    try {
        const { email, name, mailBody } = req.body

        console.log(email, name, mailBody);

        await smmtpTransport.sendMail({
            ...mailOptions,
            to: process.env.RECIPIENT_GMAIL_ADDRESS,
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