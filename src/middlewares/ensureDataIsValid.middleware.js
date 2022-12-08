export const ensureDataIsValidMiddleware = (schema) => async (request, response, next) => {
    try {
        const validated = await schema.validate(request.body, {
            // stripUnknown: true,
            // abortEarly: false
        })

        request.validatedBody = validated

        return next()

    } catch (error) {
        console.log(error)
        return response.status(400).json({
            message: error.errors
        })
    }
}

