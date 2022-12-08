import database from "../database";

export const postProduct = async (productData) => {
    try {
        const queryResponse = await database
    .query(`INSERT INTO
                products (name, price, category_id)
            VALUES
                ($1, $2, $3)
            RETURNING *;`,
            [productData.name, productData.price, productData.category_id])
    const returnInfos = queryResponse.rows[0]

    return [201, returnInfos]
    } catch (error) {
        return [400, {message: error.message}]
    }
}