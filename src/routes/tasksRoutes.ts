import { Router } from "express";
import { getTasks, postTask } from "../controllers/tasksController.ts";
import { schemaValidator } from "../middlewares/schemaValidator.ts";
import tasksSchema from "../schemas/tasksSchema.ts";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", schemaValidator(tasksSchema), postTask);



export default taskRouter;
