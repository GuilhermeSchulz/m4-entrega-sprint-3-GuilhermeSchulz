import database from "../database";

export const listAllProducts = async () =>{
    const queryResponse = await database
    .query("SELECT * FROM products;")
    .then(res => res.rows)

    return [200, queryResponse]
}



