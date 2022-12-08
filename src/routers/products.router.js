import { Router } from "express";
import { deleteCategoryController, getProductsByCategoryController, getProductsController, getSpecificProduct, patchProductController, postProductsController } from "../controllers/productsController";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createProductsSchema, editProductsSchema, teste } from "../schemas/products.schema";

export const productsRoutes = Router()


productsRoutes.get("", getProductsController)
productsRoutes.post("",ensureDataIsValidMiddleware(createProductsSchema), postProductsController)
productsRoutes.get("/:id", getSpecificProduct )
productsRoutes.patch("/:id", patchProductController)
productsRoutes.delete("/:id", deleteCategoryController)
productsRoutes.get("/category/:id", getProductsByCategoryController )