const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const listingRoutes = require('./routes/listingRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mdasikahamad20:vgc3jhfIzCATDfQm@cluster0.ohdqn1g.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'));

app.use('/api/listings', listingRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
