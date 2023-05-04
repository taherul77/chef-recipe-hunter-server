const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const chef = require("./data/chef.json")
const recipes = require("./data/recipe.json")

app.get('/', (req, res) => {
  res.send('Perfect Food!')
})
app.get("/chef", (req, res) => {
  res.send(chef);
});




app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chef.find((c) => c.id === id);
  res.send( singleChef);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})