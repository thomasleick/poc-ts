import Joi from 'joi';

const tasksSchema = Joi.object({
    task: Joi.string()
        .max(255)
        .when('isRequired', {
            is: true,
            then: Joi.required(),
            otherwise: Joi.optional()
        }),
    date: Joi.date(),
    is_done: Joi.boolean(),
    isRequired: Joi.boolean(),
});

export default tasksSchema;