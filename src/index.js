const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendMail = require("./lib/mail");

const app = express();

const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs
  max: 1, // limit each IP to 1 requests per windowMs
  message: "You've already sent me a message",
});

app.use(cors());
app.use(bodyParser.json());

app.use(limiter);

app.post("/mail", (req, res) => {
  const { name, email, message } = req.body;

  if (name && email && message) {
    sendMail(name, email, message);
  }
});

app.listen(8456, () => {
  console.log(`Mail Server running at http://localhost:8456/mail`);
});
