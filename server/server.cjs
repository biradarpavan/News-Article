
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
});

const News = mongoose.model('News', newsSchema);

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the News API');
});

app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.post('/api/news', async (req, res) => {
  try {
    const article = new News(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    console.error('Error saving article:', err);
    res.status(500).json({ error: 'Failed to save article' });
  }
});

app.delete('/api/news/:id', async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted' });
  } catch (err) {
    console.error('Error deleting article:', err);
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
