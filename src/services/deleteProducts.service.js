import database from "../database"

export const deleteProduct = async (productId) => {
    const queryResponse = await database
    .query(`DELETE FROM
	            products 
            WHERE 
	            products.id = $1
            RETURNING *;`,
            [productId])
    const returnInfos = queryResponse.rows[0]

    return [204, returnInfos]

}