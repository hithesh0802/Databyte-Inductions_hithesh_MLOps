const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');
const goalRoutes = require('./routes/goals');
const { checkAuth } = require('./middleware/authMiddleware');

mongoose.connect('mongodb://localhost:27017/fitness-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/users', checkAuth, userRoutes);
app.use('/workouts', checkAuth, workoutRoutes);
app.use('/goals', checkAuth, goalRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
