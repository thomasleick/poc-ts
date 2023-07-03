import { Router } from "express";
import { getTasks, postTask, deleteTask, editTask } from "../controllers/tasksController.ts";
import { schemaValidator } from "../middlewares/schemaValidator.ts";
import tasksSchema from "../schemas/tasksSchema.ts";
import { validateIdAsParams } from "../middlewares/validateParams.ts";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", schemaValidator(tasksSchema, true), postTask);
taskRouter.delete("/:id", validateIdAsParams, deleteTask);
taskRouter.patch("/:id", validateIdAsParams, schemaValidator(tasksSchema, false), editTask);



export default taskRouter;
