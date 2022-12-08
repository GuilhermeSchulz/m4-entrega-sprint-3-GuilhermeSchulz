import database from "../database"


export const ensureProductExistsMiddleware = async (request, response, next) => {
    const queryResponse = await database.query(
        `
        SELECT 
            *
        FROM 	
            products
        WHERE 
            products.name = $1;
        `,
        [request.body.name]
    )

    const user = queryResponse.rows[0]

    if(user){
        return response.status(400).json({
            message: 'Product already exists!'
        })
    }

    return next()
}
export const ensureCategoryExistsMiddleware = async (request, response, next) => {
    const queryResponse = await database.query(
        `
        SELECT 
            *
        FROM 	
            categories
        WHERE 
            categories.name = $1;
        `,
        [request.body.name]
    )

    const user = queryResponse.rows[0]

    if(user){
        return response.status(400).json({
            message: 'Category already exists!'
        })
    }

    return next()
}