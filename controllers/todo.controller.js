import { Todo } from "../models/todo.js";

// This are the function used in the router

export function getAllTodos() {
  return Todo.find();
}

export function createTodo(req) {
  return new Todo({ ...req.body }).save();
}

export function updateTodo(req) {
  return Todo.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

export function deleteTodo(req) {
  return Todo.findOneAndDelete({ _id: req.params.id });
}
