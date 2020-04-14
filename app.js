const express = require('express');
const app = express();

const getGreeting = require('./getGreeting');
const getDate = require('./getDate');
/* const database = require('./database'); */
const getPollen = require('./getPollen');

app.get('/', async (req, res) => {
  const greeting = getGreeting();
  const date = getDate();
  const pollen = await getPollen();
    res.send(`<h1>Allergenie, your daily pollen forecast</h1>
      <h2>Today is: ${date}</h2>
      <p>${greeting}</p>
      <p>It looks like your zip is ${pollen.zip}.</p>
      <p>Allergy forecast for ${pollen.displayLocation}.</p>
      <p>Pollen index for today is ${pollen.pollenIndex}.</p>
      <p>Main allergens for today are ${pollen.triggerOne}, ${pollen.triggerTwo}, ${pollen.triggerThree}.</p>
      <footer>
      <p>Pollen forecast is provided by Pollen.com.</p>
      <p>Your location information is provided by ip-api.com.</p>
      <footer/>`);
});

module.exports = app;