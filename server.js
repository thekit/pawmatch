const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes for future expansion
app.get('/api/pets', (req, res) => {
  // Mock pet data - in production, this would come from a database
  const pets = [
    {
      id: 1,
      name: "Luna",
      type: "dog",
      breed: "Golden Retriever Mix",
      age: "2 years",
      size: "medium",
      energyLevel: "high",
      difficulty: "easy",
      timeNeeds: "medium",
      personality: ["friendly", "playful", "loyal"],
      photos: ["https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"],
      description: "Luna is a sweet, energetic golden retriever mix who loves playing fetch and meeting new friends.",
      shelter: "Happy Tails Shelter",
      location: { lat: 40.7128, lng: -74.0060 },
      story: "Luna was found as a stray but has blossomed into the most loving companion.",
      goodWith: ["kids", "dogs"],
      specialNeeds: null
    }
    // Add more pets here
  ];
  
  res.json(pets);
});

app.get('/api/shelters', (req, res) => {
  const shelters = [
    {
      id: 1,
      name: "Happy Tails Shelter",
      address: "123 Pet Street, New York, NY",
      phone: "(555) 123-4567",
      email: "contact@happytails.org",
      website: "https://happytails.org",
      location: { lat: 40.7128, lng: -74.0060 }
    }
    // Add more shelters here
  ];
  
  res.json(shelters);
});

// Serve main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`PawMatch server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
