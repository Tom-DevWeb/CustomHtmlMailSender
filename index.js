require('dotenv').config();
const nodemailer = require('nodemailer');
const content = require('./htmlContent')

// Create a carrier for Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
    },
});

// Function to send an email
function sendEmail(to, subject, body) {
    const mailOptions = {
        to: to,
        subject: subject,
        html: body,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email :', error);

        } else {
            console.log('Email sent : %s', info.messageId);
        }
    });
}

// Split string to array
sendToList = process.env.TOs.split(", ")

sendToList.map(to => sendEmail(to, "Testing sending email with Nodemailer", content))
