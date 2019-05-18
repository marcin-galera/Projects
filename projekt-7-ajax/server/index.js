const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const jsonParser = bodyParser.json()
const fs = require('fs');

const favs = []

app.use(cors());

app.post('/favs', jsonParser, function (req, res) {
  favs.push(req.body)
  res.end()
})

app.get('/favs', (req, res) => {
  res.json(favs)
})

app.get('/channels/:channelName', (req, res) => {
  
  const files = fs.readdirSync(
    '../slack/' + req.params.channelName
  );
  res.send(files);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))