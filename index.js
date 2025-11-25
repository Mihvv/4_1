'use strict';

const express = require('express');
const app = express();

// zadanie 4_1.1
app.get('/math/circle/:r', (req, res) => {  
  res.json(result);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});