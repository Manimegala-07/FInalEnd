const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentName: String,
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Present', 'Absent'], default: 'Present' },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);