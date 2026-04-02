const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auraDentalClinic', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Aura Dental Clinic API');
});

// Import routes
// const userRoutes = require('./routes/user');
// const appointmentRoutes = require('./routes/appointment');
// app.use('/api/users', userRoutes);
// app.use('/api/appointments', appointmentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
