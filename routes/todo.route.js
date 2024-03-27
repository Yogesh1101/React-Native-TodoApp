import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

// get all todo list
router.get("/all", async (req, res) => {
  try {
    const todos = await getAllTodos();
    if (!todos) {
      return res.send(400).json({ error: "No Todo List Found" });
    }
    res.status(200).json({ data: todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Sever Error" });
  }
});

// Create a new todo
router.post("/create", async (req, res) => {
  try {
    const newTodo = await createTodo(req);
    if (!newTodo) {
      return res
        .send(400)
        .json({ error: "Error occur while creating new todo!" });
    }
    res
      .status(200)
      .json({ data: newTodo, message: "New Todo Created Successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Sever Error" });
  }
});

// update the todo with id
router.put("/update/:id", async (req, res) => {
  try {
    const updatedTodo = await updateTodo(req);
    if (!updatedTodo) {
      return res
        .status(400)
        .json({ error: "Error occur while updating todo!" });
    }
    res
      .status(200)
      .json({ data: updatedTodo, message: "Todo Updated Successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete todo with id
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTodo = await deleteTodo(req);
    if (!deletedTodo) {
      return res
        .status(400)
        .json({ error: "Error occur while deleting todo!" });
    }
    res.status(200).json({ message: "Todo deleted Successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const todoRotuer = router;
