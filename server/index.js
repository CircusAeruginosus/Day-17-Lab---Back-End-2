//import express package into file
const express = require("express");

//import cors package into file
const cors = require("cors");

//create variable that will be reused to initialize express commands
const app = express();

//accept and use JSON objects in server's responses
app.use(express.json());

//accept and use CORS objects in server's responses
app.use(cors());



//Create a variable that requires the controller file
const controller = require("./controller")

const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse
} = require("./controller")

//endpoints
app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouse);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse)

//set up express server to listen on port 4004
app.listen(4004, () => console.log("server up and running on port 4004"));