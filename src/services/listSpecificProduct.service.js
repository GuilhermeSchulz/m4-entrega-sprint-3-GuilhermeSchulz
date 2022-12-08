import database from "../database";

export const listSpecificProduct = async (productId) =>{
    const queryResponse = await database
    .query(`SELECT * FROM products WHERE products.id = $1;`,
    [productId])
    const returnInfos = queryResponse.rows[0]

    return [200, returnInfos]
}



