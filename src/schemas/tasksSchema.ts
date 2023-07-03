import Joi from 'joi';

const tasksSchema = Joi.object({
    task: Joi.string().max(255).required(),
    date: Joi.date(),
    is_done: Joi.boolean()
});

export default tasksSchema;