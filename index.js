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

// zadanie 4_1.2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
    return res.status(400).json({
      error: "Invalid input"
    });
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  const result = 
  {
    width: width,
    height: height,
    area: area,
    perimeter: perimeter
  };

  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});