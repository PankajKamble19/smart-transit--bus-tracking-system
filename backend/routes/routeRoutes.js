const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    return res.json({ success: true, role: "admin" });
  }

  if (email === "driver@gmail.com" && password === "1234") {
    return res.json({ success: true, role: "driver" });
  }

  res.json({ success: false });
});

module.exports = router;