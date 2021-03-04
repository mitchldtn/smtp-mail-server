# Simple SMTP Mail Server

## Why

I setup a contact form on my website and decided to setup a free email notification using gmail and nodemailer.

Just incase, I decided to setup a rate limiter. This prevents me from getting spammed by the same person. You can change the limits if you want in index.js. It's currently set to limit 1 email per user every 24hrs.

## Mail Server Setup

Create a new gmail account and go to myaccount.google.com/lesssecureapps

Enable the usage of Less Secure Apps.

Change `.env.example` to `.env` and input your gmail email in EMAIL_USER and gmail password in EMAIL_PASS.

Input your email where you want to recieve mail in SEND_TO.

## Frontend Usage Example

```
async function sendMessage() {
    let data = {
      name: name,
      email: email,
      message: message,
    };

    fetch("http://localhost:8456/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
```

### Disclaimer

There are some form validation precautions you may want to take.
