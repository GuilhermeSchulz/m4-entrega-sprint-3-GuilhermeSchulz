import database from "../database"


export const getProductsCategory = async (categoryId) => {
    const queryResponse = await database
    .query(`SELECT products.name, products.price, categories.name as "category" FROM products

    JOIN categories ON categories.id = products.category_id
    WHERE products.category_id = $1;`,
    [categoryId])
    const returnInfos = queryResponse.rows

    return [200, returnInfos]
}



