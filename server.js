const express = require('express');
const app = express();
const connectionDB = require('./server/database/connection');
const routes = require('./server/router/routes');

//connecting MongoDB
connectionDB();

//parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routing
app.use("/api",routes);

//printing the process id 
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(process.pid);
    console.log(`on process id: ${process.pid}`);
});