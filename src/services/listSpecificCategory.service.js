import database from "../database";

export const listSpecificCategory = async (categoryId) =>{
    const queryResponse = await database
    .query(`SELECT * FROM categories WHERE categories.id = $1;`,
    [categoryId])
    const returnInfos = queryResponse.rows[0]

    return [200, returnInfos]
}



