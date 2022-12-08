import database from "../database";

export const postCategory = async (categoryData) => {
    const queryResponse = await database
    .query(`INSERT INTO
                categories (name)
            VALUES
                ($1)
            RETURNING *;`,
            [categoryData.name])
    const returnInfos = queryResponse.rows[0]

    return [201, returnInfos]

}