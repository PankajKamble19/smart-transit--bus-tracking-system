const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// ✅ Update driver location
router.post("/update", async (req, res) => {
  try {
    const { driverId, lat, lng } = req.body;

    const newLocation = new Location({
      driverId,
      lat,
      lng,
    });

    await newLocation.save();

    res.json({ message: "Location updated successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ Get latest location of driver
router.get("/:driverId", async (req, res) => {
  try {
    const location = await Location.findOne({ driverId: req.params.driverId })
      .sort({ timestamp: -1 });

    res.json(location);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;