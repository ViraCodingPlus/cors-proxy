const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Proxy endpoint
app.post('/proxy', async (req, res) => {
  const { url, headers, body } = req.body;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    var responseData =data.data;
    console.log(responseData);
    res.json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})
// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})