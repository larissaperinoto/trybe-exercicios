const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express().json());

//ROTAS
/* app.get('/activities', (_req, res) => {
  res.status(200).json(activities);
});
 */

app.post('/activities', (req, res) => {
  const activity = req.body;
  activities.push(activity);
  res.status(201).json(activity);
});

app.put('/activities', (req, res) => {
  const idParam  = req.params.id;
  const { description, status } = req.body;
  let updateActivity = 0;
  for (let i = 0; i<= activities.length; i++) {
    const activity = activities[i];

    if (activity.id === Number(idParam)) {
      activity.description = description;
      activity.status = status;

    }
  }

  res.status(201).json(activity);
});

module.exports = app;
