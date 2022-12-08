import { Router } from "express";
import { deleteCategoryController, getProductsByCategoryController, getProductsController, getSpecificProduct, patchProductController, postProductsController } from "../controllers/productsController";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { verifyCategoryId, verifyProductId } from "../middlewares/ensureIdIsValid.middleware";
import { ensureProductExistsMiddleware } from "../middlewares/ensureProductNotExist.middleware";
import { createProductsSchema } from "../schemas/products.schema";

export const productsRoutes = Router()


productsRoutes.get("", getProductsController)
productsRoutes.post("",ensureProductExistsMiddleware,ensureDataIsValidMiddleware(createProductsSchema), postProductsController)
productsRoutes.get("/:id",verifyProductId,  getSpecificProduct )
productsRoutes.patch("/:id",verifyProductId, patchProductController)
productsRoutes.delete("/:id",verifyProductId, deleteCategoryController)
productsRoutes.get("/category/:id",verifyCategoryId, getProductsByCategoryController )