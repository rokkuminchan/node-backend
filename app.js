const express = require('express');
var cors = require('cors');
const studentController = require('./studentController');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({origin: '*'}));
studentController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})