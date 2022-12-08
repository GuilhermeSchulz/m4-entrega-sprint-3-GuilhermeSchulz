import { deleteCategory } from '../services/deleteCategory.service.js'
import {listAllCategories} from '../services/listAllCategories.service.js'
import { listSpecificCategory } from '../services/listSpecificCategory.service.js'
import { editCategory } from '../services/patchCategory.service.js'
import { postCategory } from '../services/postCategories.service.js'



export const getCategoriesController =async (req, resp) => {
    const [status, categories] = await listAllCategories()
    return resp.status(status).json(categories)
}
export const postCategoryController = async (req, resp) => {
    const [status, categories] = await postCategory(req.validatedBody)
    return resp.status(status).json(categories)
}
export const getSpecificCategoryController = async (req, resp) => {
    const id = req.params.id
    const [status, category] = await listSpecificCategory(id)
    return resp.status(status).json(category)
}
export const editSpecificCategoryController = async (req, resp) =>{
    const id = req.params.id
    const [status, category] = await editCategory(id, req.validatedBody)
    return resp.status(status).json(category)
}
export const deleteCategoryController = async(req, resp) => {
    const id = req.params.id
    const [status, category] = await deleteCategory(id)
    return resp.status(status).json(category)
}