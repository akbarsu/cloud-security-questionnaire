
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const responseRoutes = require('./routes/responseRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/cloud-security', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/responses', responseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
