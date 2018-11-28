const express = require("express");
const bodyParser = require("body-parser");

const passwords = require("./src/util/password");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/users", (req, res) => {
  console.log(`req.body`, req.body);
  console.log(`req.headers`, req.headers);

  const { username, password } = req.body;

  passwords
    .hashpassword(password)
    .then(hashedValue => {
      return res.status(201).json({
        username: username
      });
    })
    .catch(error => {
      console.error(`BcryptError: `, err);
      return res.json(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
