const express = require("express"); // import express frame work
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskController");

const router = express.Router(); //create a new router instance

router.get("/", getAllTask); // Route to get all task, handled by the getAllTask function

router.post("/create", createTask); // Route to create a new task, handled by a createT ask function

router.patch("/:id", editTask); // Route to edit a specific tasks by its id, handeled by editTask function from controller

router.delete("/:id", deleteTask); // Route to delete a specific task by its id, handeled by deleteTask function from controller

router.get("/:id", eachTask); // Route to get a specific task by its id, handeled by eachTask function from controller

module.exports = router; // Export the router to be used in the main server file app.js
