import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { db } from '../src/lib/db.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes pour les connexions et utilisation
app.get('/api/connections/daily', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const data = await db.getDailyConnections(startDate, endDate);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/distribution', async (req, res) => {
  try {
    const data = await db.getUserTypeDistribution();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/age-distribution', async (req, res) => {
  try {
    const data = await db.getAgeDistribution();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/location-distribution', async (req, res) => {
  try {
    const data = await db.getLocationDistribution();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/profile-status', async (req, res) => {
  try {
    const data = await db.getProfileStatus();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes pour l'engagement et les interactions
app.get('/api/applications/daily', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const data = await db.getDailyApplications(startDate, endDate);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/applications/per-ad', async (req, res) => {
  try {
    const data = await db.getApplicationsPerAd();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/applications/response-time', async (req, res) => {
  try {
    const data = await db.getResponseTime();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});