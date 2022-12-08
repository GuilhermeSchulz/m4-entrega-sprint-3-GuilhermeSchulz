import database from "../database";

export const editCategory = async (categoryId, categoryData) => {
    const queryResponse = await database
        .query(`UPDATE
                	categories
                SET
	                name = $1
                WHERE
	                categories.id = $2
                RETURNING *;`,
            [categoryData.name, categoryId])
    const returnInfos = await queryResponse.rows[0]

    return [200, returnInfos]

}