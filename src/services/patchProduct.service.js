import database from "../database"

export const editProduct = async (categoryId, categoryData) => {

    let query = 'UPDATE products SET '
    const keys = Object.keys(categoryData)
    const values = Object.values(categoryData)

    keys.forEach((key, index) => {
        query += `${key} = \$${index+=1}, `
    })

    query = query.slice(0, -2)

    query += ` WHERE id = \$${keys.length+=1} RETURNING *;` 

    
    const queryResponse = await database.query(
        query,
        [...values, categoryId]
    )

   
  
    const returnInfos = await queryResponse.rows[0]

    return [200, returnInfos]

}