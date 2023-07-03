import { Router } from "express";
import { getTasks, postTask, deleteTask } from "../controllers/tasksController.ts";
import { schemaValidator } from "../middlewares/schemaValidator.ts";
import tasksSchema from "../schemas/tasksSchema.ts";
import { validateIdAsParams } from "../middlewares/validateParams.ts";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", schemaValidator(tasksSchema), postTask);
taskRouter.delete("/:id", validateIdAsParams, deleteTask);



export default taskRouter;
