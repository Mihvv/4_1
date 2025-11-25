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


// zadanie 4_1.3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({
      error: "Invalid input"
    });
  }

  const result = Math.pow(base, exponent);

  const response = 
  {
    base: base,
    exponent: exponent,
    result: result
  };

  if (req.query.root === "true") {
    response.root = Math.sqrt(base).toFixed(2);
  }

  res.json(response);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});