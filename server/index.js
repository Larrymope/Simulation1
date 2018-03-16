const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller');
const massive = require('massive');
      require('dotenv').config();  

const app = express();


app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    return app.set('db', db);
})
//ENDPOINTS
app.get( '/api/inventory', controller.getProducts );
app.post('/api/product', controller.createProduct );





const port = 3006;

app.listen(port, () => console.log(`SERVER listening on port ${port}`))