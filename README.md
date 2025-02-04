# CustomHtmlMailSender

CustomHtmlMailSender is a simple Node.js script that allows you to send **HTML** emails using **Nodemailer**. This project is ideal for testing email delivery with various providers (Gmail, Outlook, etc.).

## Features

- Send emails in HTML format.
- Easy configuration with environment variables.
- Compatible with major email providers (e.g., Gmail, custom SMTP).
- Supports attachments and email customization.

## Prerequisites

- **Node.js** (v16+ recommended)
- A configured email account (e.g., Gmail) with an application password or SMTP credentials.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/CustomMailSender.git
cd CustomMailSender
```

2. Install dependencies:

`npm install`

3. Set up your environment variables by creating a .env file at the root of the project:
```env
GMAIL=YourEmail@gmail.com
PASSWORD=YourAppPassword
TOs="test1@example.com"
# OR
TOs="test1@example.com, test2@example.com, ..."
```
## Usage

Fill in the .env file for your Gmail credentials and the recipient(s) of your email.
Edit the htmlContent.js file to define the HTML body to send.

Run the script:

`node index.js`

If everything is configured correctly, an email will be sent to the specified recipient.

## Documentation

[Config Gmail connection](https://medium.com/@y.mehnati_49486/how-to-send-an-email-from-your-gmail-account-with-nodemailer-837bf09a7628)
[HTML Email Development Best Practices](https://www.emailonacid.com/blog/article/email-development/email-development-best-practices-2/)
[Nodemailer](https://nodemailer.com/)
[Testing spam email](https://www.mail-tester.com/)