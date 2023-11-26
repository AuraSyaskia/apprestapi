const express = require('express');
const bodyparser = require('body-parser');
const app = express();


//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('.rputes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
