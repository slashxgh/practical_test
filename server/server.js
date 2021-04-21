const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const cors = require('cors');
const app = express()
const logger = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swagger = require("./swagger");
const swaggerDocs = swaggerJsDoc(swagger.options);
const api = require("./routes/api");

require("./mongoose")();

app.set('port', process.env.PORT || 3000)
app.set('host', process.env.HOST || '0.0.0.0')
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(cors());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/api", api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});


// console.log(path.join(__dirname));
// console.log(path.normalize(__dirname + '/../frontend'));

const server = app.listen(app.get('port'), app.get('host'), () =>
    console.log(`\nServer listening at http://${server.address().address}:${server.address().port}`))
