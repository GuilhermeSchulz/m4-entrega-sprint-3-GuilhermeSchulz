import database from "../database";

export const deleteCategory = async (categoryId) => {
    const queryResponse = await database
    .query(`DELETE FROM
	            categories 
            WHERE 
	            categories.id = $1
            RETURNING *;`,
            [categoryId])
    const returnInfos = await queryResponse.rows[0]

    return [204, returnInfos]

}