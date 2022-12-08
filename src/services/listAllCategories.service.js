import database from "../database";

const listAllCategories = async () =>{
    const queryResponse = await database
    .query("SELECT * FROM categories;")
    .then(res => res.rows)

    return [200, queryResponse]
}



export {listAllCategories};