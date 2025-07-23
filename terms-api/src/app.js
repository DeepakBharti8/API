const express = require('express');
const bodyParser = require('body-parser');
const termsRoutes = require('./routes/termsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/terms', termsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});   