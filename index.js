'use strict';

const express = require('express');
const app = express();

// zadanie 4_1.1
app.get('/math/circle/:r', (req, res) => {  
  const r = Number(req.params.r);

  if (isNaN(r) || r <= 0)
  {
    return res.status(400).json({
      error: "Invalid input"
    });
  }

  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;

  const result =
  {
    radius: r,
    area: area.toFixed(2),
    circumference : circumference.toFixed(2)
  };
  
  res.json(result);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});