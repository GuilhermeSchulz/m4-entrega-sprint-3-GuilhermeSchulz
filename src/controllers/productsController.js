import { deleteProduct } from "../services/deleteProducts.service"
import { getProductsCategory } from "../services/getProductsById.service"
import { listAllProducts } from "../services/listAllProducts.service"
import { listSpecificProduct } from "../services/listSpecificProduct.service"
import { editProduct } from "../services/patchProduct.service"
import { postProduct } from "../services/postProducts.service"


export const getProductsController = async (req, resp) => {
    const [status, products] = await listAllProducts()
    return resp.status(status).json(products)
}
export const postProductsController = async (req, resp) => {
    const [status, products] = await postProduct(req.validatedBody)
    return resp.status(status).json(products)
}
export const getSpecificProduct = async (req, resp) => {
    const id = req.params.id
    const [status, products] = await listSpecificProduct(id)
    return resp.status(status).json(products)
}
export const patchProductController = async (req, resp) => {
    const id = req.params.id
    const [status, products] = await editProduct(id, req.body)
    return resp.status(status).json(products)
}
export const deleteCategoryController = async(req, resp) => {
    const id = req.params.id
    const [status, category] = await deleteProduct(id)
    return resp.status(status).json(category)
}
export const getProductsByCategoryController = async(req,resp) => {
    const id = req.params.id
    const [status, category] = await getProductsCategory(id)
    return resp.status(status).json(category)
}