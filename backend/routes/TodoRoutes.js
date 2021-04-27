const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is from the todo page!!");
});

module.exports = router;
