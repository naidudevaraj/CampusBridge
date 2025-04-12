const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB error", err));

// Routes
app.use('/student', require('./routes/student'));
app.use('/faculty', require('./routes/faculty'));
app.use('/admin', require('./routes/admin'));

// Auth (basic examples)
app.get('/', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.post('/login', (req, res) => res.redirect('/student'));
app.post('/register', (req, res) => res.redirect('/'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Campus Bridge running on port ${PORT}`));

