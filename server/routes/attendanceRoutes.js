const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

router.get('/', async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newEntry = new Attendance(req.body);
  await newEntry.save();
  res.json({ message: 'Attendance marked!' });
});

module.exports = router;