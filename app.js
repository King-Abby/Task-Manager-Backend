require("dotenv").config(); // Load environment variables from a .env ftle into procss.env

const express = require("express"); // Import Express Framework

const mongoose = require("mongoose"); // Import mongoose from MongoDB interactions

const cors = require("cors");

const app = express(); // Spinning up the express frame work server

const port = process.env.PORT || 3000; // Define the port number for the server

// CORS (Cross Origin Resource Sharing) when the frontend and backend are from different origins (domains, ports or protocols) and the backend hasnt been configured to accept requests from the frontend origin
app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task related routes

const notFound = require("./middlewares/notFound"); // Import a middleware to handle 404 Not Found errors

app.use(express.json()); // Middleware to parse incoming json requests from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task-related routes start with  /api/task

app.use(notFound); // Use the custom 404 middleware for handling unmatched routes

const start = async () => {
  try {
    // Atempt to connect to MongoDB using moongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    // Start the server qnd listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // Log the error if the dataBase connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

// Mongoose is an ODM  (Object Data Modelling) library for MongoDB and Node.js.

// MongoDb is a NoSQL data-base that stores data in a flexible , JSON like format

// iyiolaabby : my username
// vAHaUGAL8LOKxAOt : my password
// mongodb+srv://iyiolaabby:vAHaUGAL8LOKxAOt@cluster0.l9cjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 : my link
