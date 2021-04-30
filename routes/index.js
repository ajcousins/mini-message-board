var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Kumusta ang lahat?",
    user: "Tito Bong",
    added: new Date(),
  },
  {
    text: "¿Dónde pusiste mis plátanos?",
    user: "Raul",
    added: new Date(),
  },
  {
    text:
      "Can you make breakfast tomorrow at around 7am, eggs sunny-side up, thanks!",
    user: "Anna",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res, next) => {
  console.log(req.body.name);
  console.log(req.body.messageText);
  if (!req.body.messageText == "") {
    messages.push({
      text: req.body.messageText,
      user: req.body.name,
      added: new Date(),
    });
  }
  res.redirect("/");
});

module.exports = router;
